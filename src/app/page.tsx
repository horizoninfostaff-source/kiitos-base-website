import LoadingAnimation from '@/components/home/LoadingAnimation'
import WorldBackdrop from '@/components/home/WorldBackdrop'
import GrowingThread from '@/components/ui/GrowingThread'
import Hero from '@/components/home/Hero'
import MessageSection from '@/components/home/MessageSection'
import Features from '@/components/home/Features'
import PhotoGallery from '@/components/home/PhotoGallery'
import ProgramSection from '@/components/home/ProgramSection'
import FlowSection from '@/components/home/FlowSection'
import DailySchedule from '@/components/home/DailySchedule'
import RecruitBanner from '@/components/home/RecruitBanner'
import ContactCTA from '@/components/home/ContactCTA'

export default function HomePage() {
  return (
    <>
      {/* Loading animation — self-contained, unmounts after sequence completes */}
      <LoadingAnimation />

      {/* One continuous sky-to-earth world living behind every section */}
      <WorldBackdrop />

      <div className="relative">
        {/* The growing root/sprout thread that draws itself down the page */}
        <GrowingThread />

        {/* All content floats above the world — no flat full-width colour blocks */}
        <div className="relative z-10">
          <Hero />
          <MessageSection />
          <Features />
          <PhotoGallery />
          <ProgramSection />
          <FlowSection />
          <DailySchedule />
          <RecruitBanner />
          <ContactCTA />
        </div>
      </div>
    </>
  )
}
