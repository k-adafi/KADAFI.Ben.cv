import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { assetUrl } from '@/lib/utils'
import { detectedAssets } from 'virtual:detected-assets'
import { SidebarSection } from './SidebarSection'
import { ContactItem } from './ContactItem'
import { TechBadge } from './TechBadge'

const PHOTO_ANIMATION_DURATION = 0.8

function SidebarPhoto({ photo, name, emoji }: { photo?: string; name: string; emoji?: string }) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleFlip = () => {
    if (isSpinning) return
    setIsSpinning(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleFlip()
    }
  }

  if (!photo || hasError) {
    return (
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-resume-primary to-resume-primary-light flex items-center justify-center border-4 border-resume-bg/30 shadow-lg">
          <span className="text-4xl">{emoji || '👨‍💻'}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center mb-6" style={{ perspective: '300px' }}>
      <motion.div
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        onAnimationComplete={() => setIsSpinning(false)}
        animate={{ rotateY: isSpinning ? 360 : 0 }}
        transition={{ duration: PHOTO_ANIMATION_DURATION, ease: 'easeInOut' }}
        className="relative w-32 h-32 cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        role="button"
        tabIndex={0}
        aria-label={`Photo of ${name} — click to flip`}
      >
        <div
          className="absolute inset-0 rounded-full overflow-hidden border-4 border-resume-bg/30 shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={photo}
            alt={`Profile photo of ${name}`}
            className="object-cover w-full h-full"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        </div>
        <div
          className="absolute inset-0 rounded-full border-4 border-resume-bg/30 shadow-lg bg-gradient-to-br from-resume-primary to-resume-primary-light flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="text-4xl">{emoji || '👨‍💻'}</span>
        </div>
      </motion.div>
    </div>
  )
}

export function Sidebar() {
  const { resolve } = useTranslation()
  const { personal, contact, skills, hobbies, experiences_association, labels } = resumeConfig

  return (
    <div className="md:w-[38%] bg-gradient-to-b from-resume-sidebar-from to-resume-sidebar-to p-8">
      {/* Photo / Profile image — priority: config > auto-detected > emoji fallback */}
      <SidebarPhoto
        photo={(personal.photo || detectedAssets.photo) ? assetUrl(personal.photo || detectedAssets.photo!) : undefined}
        name={personal.name}
        emoji={personal.photoBackEmoji}
      />

      {/* Contact */}
      <SidebarSection title={resolve(labels.sections.contact)}>
        <div className="space-y-3">
          {contact.map((item) => (
            <ContactItem key={`${item.type}-${item.label}`} type={item.type} label={item.label} href={item.href} />
          ))}
        </div>
      </SidebarSection>

          {skills.map((category, i) => (
            <SidebarSection key={`${resolve(category.title)}-${i}`} title={resolve(category.title)}>
              {category.type === 'badges' && category.items.every((item) => !item.percentage) && (
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item, j) => {
                    const techName = typeof item.name === 'string' ? item.name : resolve(item.name)
                    return <TechBadge key={`${techName}-${j}`} tech={techName} color={item.color} />
                  })}
                </div>
              )}
              {category.type === 'badges' && category.items.some((item) => item.percentage) && (
                <div className="space-y-3">
                  {category.items.map((item, j) => {
                    const techName = typeof item.name === 'string' ? item.name : Object.values(item.name)[0]
                    return (
                      <div key={`${techName}-${j}`}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium text-resume-text">{techName}</span>
                          {item.percentage && (
                            <span className="text-[10px] font-bold text-resume-accent">{item.percentage}%</span>
                          )}
                        </div>
                        {item.percentage && (
                          <div className="w-full bg-resume-primary/10 rounded-full h-1 overflow-hidden">
                            <motion.div
                              className="bg-resume-accent h-full rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.percentage}%` }}
                              transition={{ duration: 1, ease: 'easeOut' }}
                              viewport={{ once: true }}
                            />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
              {category.type === 'text' && (
                <p className="text-xs text-resume-text-secondary">
                  {category.items
                    .map((item) => (typeof item.name === 'string' ? item.name : resolve(item.name)))
                    .join(', ')}
                </p>
              )}
              {category.type === 'languages' && (
                <div className="space-y-2">
                  {category.items.map((item, j) => {
                    const name = typeof item.name === 'string' ? item.name : resolve(item.name)
                    return (
                      <div key={`${name}-${j}`}>
                        <p className="text-xs font-medium text-resume-text">
                          {name} <span className="text-resume-text-secondary font-normal">{item.level ? resolve(item.level) : ''}</span>
                        </p>
                        {item.details && (
                          <p className="text-[10px] text-resume-text-secondary opacity-70 italic">{item.details}</p>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </SidebarSection>
          ))}

      {/* AssociationEngagement */}
      {experiences_association && experiences_association.length > 0 && labels.sections.experiences_association && (
        <SidebarSection title={resolve(labels.sections.experiences_association)}>
          <div className="grid grid-cols-2 gap-3">
            {experiences_association.map((association, i) => (
              <div key={`${resolve(association.role)}-${i}`}>
                <p className="font-medium text-sm text-resume-text">{resolve(association.period)}</p>
                <p className="font-medium text-sm text-resume-text">{resolve(association.role)}</p>
                <p className="font-medium text-sm text-resume-text">{resolve(association.company)}</p>
              </div>
            ))}
          </div>
        </SidebarSection>
      )}

      {/* Hobbies */}
      {hobbies && hobbies.length > 0 && labels.sections.hobbies && (
        <SidebarSection title={resolve(labels.sections.hobbies)}>
          <div className="grid grid-cols-2 gap-3">
            {hobbies.map((hobby, i) => (
              <div key={`${resolve(hobby.title)}-${i}`}>
                <p className="font-medium text-sm text-resume-text">{resolve(hobby.title)}</p>
                {hobby.details?.map((detail, j) => (
                  <p key={j} className="text-xs text-resume-text-secondary">
                    {resolve(detail)}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </SidebarSection>
      )}
    </div>
  )
}
