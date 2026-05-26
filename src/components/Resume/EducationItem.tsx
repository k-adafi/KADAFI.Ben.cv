import { assetUrl } from '@/lib/utils'

interface EducationItemProps {
  school: string
  degree: string
  specialty?: string
  period?: string
  logo?: string
}

export function EducationItem({ school, degree, specialty, period, logo }: EducationItemProps) {
  return (
    <div className="flex items-start gap-4 py-3 px-3 -mx-3 rounded-lg hover:bg-resume-primary/5 transition-all group relative">
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-resume-accent group-hover:w-1.5 transition-all duration-300" />
      
      <div className="pl-2 flex items-start gap-4 w-full">
        {logo && (
          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-resume-primary/10 bg-white p-1">
            <img src={assetUrl(logo)} alt={`${school} logo`} className="object-contain w-full h-full" loading="lazy" />
          </div>
        )}
        <div>
          <p className="text-base font-semibold text-resume-text leading-tight">{school}</p>
          <p className="text-sm text-resume-text-secondary mt-0.5">{degree}</p>
          {specialty && (
            <p className="text-sm text-resume-accent mt-0.5 font-medium">{specialty}</p>
          )}
          {period && (
            <p className="text-xs font-bold text-resume-accent mt-1 tracking-wide">{period}</p>
          )}
        </div>
      </div>
    </div>
  )
}
