import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { Sidebar } from './Sidebar'
import { MainContent } from './MainContent'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { PdfDownload } from './PdfDownload'

export function Resume() {
  const { resolve } = useTranslation()

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Background Video */}
      <div className="fixed inset-0 -z-10 bg-slate-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 dark:bg-black/60"></div>
      </div>

      {/* Top bar: theme toggle + language + pdf */}
      <div className="flex items-center justify-between mb-4">
        <PdfDownload />
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle label={resolve(resumeConfig.labels.actions.switchTheme)} />
        </div>
      </div>

      {/* Resume card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-resume-bg-card rounded-lg shadow-2xl overflow-hidden dark:border dark:border-resume-primary/10"
      >
        <div className="flex flex-col-reverse md:flex-row">
          <Sidebar />
          <MainContent />
        </div>
      </motion.div>

      {/* Hint */}
      <p className="text-center text-sm text-resume-text-secondary mt-6">
        {resolve(resumeConfig.labels.actions.clickHint)}
      </p>
    </div>
  )
}
