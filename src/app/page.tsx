import LoadingAnimation from '@/components/home/LoadingAnimation'
import Hero from '@/components/home/Hero'
import MessageSection from '@/components/home/MessageSection'
import Features from '@/components/home/Features'
import PhotoGallery from '@/components/home/PhotoGallery'
import ProgramSection from '@/components/home/ProgramSection'
import FlowSection from '@/components/home/FlowSection'
import DailySchedule from '@/components/home/DailySchedule'
import RecruitBanner from '@/components/home/RecruitBanner'
import ContactCTA from '@/components/home/ContactCTA'
import WaveDivider from '@/components/ui/WaveDivider'

export default function HomePage() {
  return (
    <>
      {/* Loading animation — self-contained, unmounts after sequence completes */}
      <LoadingAnimation />

      {/* Hero — full viewport photo, transparent header overlays here */}
      <Hero />

      {/* Philosophy — editorial white section */}
      <MessageSection />

      {/* Features — photo × text alternating rows */}
      <Features />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Programs — card grid */}
      <WaveDivider bgColor="bg-kb-bg" fillColor="#ffffff" />
      <ProgramSection />

      {/* Flow */}
      <WaveDivider bgColor="bg-white" fillColor="#FFFDF0" />
      <FlowSection />
      <WaveDivider bgColor="bg-[#FFFDF0]" fillColor="#ffffff" />

      {/* Daily + Recruit */}
      <DailySchedule />
      <RecruitBanner />
      <WaveDivider bgColor="bg-kb-bg" fillColor="#FFB300" />

      {/* CTA */}
      <ContactCTA />
    </>
  )
}
