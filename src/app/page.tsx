import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import Features from '@/components/home/Features'
import MessageSection from '@/components/home/MessageSection'
import ProgramSection from '@/components/home/ProgramSection'
import FlowSection from '@/components/home/FlowSection'
import DailySchedule from '@/components/home/DailySchedule'
import RecruitBanner from '@/components/home/RecruitBanner'
import ContactCTA from '@/components/home/ContactCTA'
import WaveDivider from '@/components/ui/WaveDivider'

export default function HomePage() {
  return (
    <>
      {/* bg-kb-bg (#FFFDF0) */}
      <Hero />
      <WaveDivider bgColor="bg-[#FFFDF0]" fillColor="#ffffff" />

      {/* bg-white */}
      <StatsBar />
      <Features />
      <WaveDivider bgColor="bg-white" fillColor="#FFFDF0" />

      {/* bg-kb-bg — philosophy quote */}
      <MessageSection />
      <WaveDivider bgColor="bg-[#FFFDF0]" fillColor="#ffffff" />

      {/* bg-white */}
      <ProgramSection />
      <WaveDivider bgColor="bg-white" fillColor="#FFFDF0" />

      {/* bg-kb-bg */}
      <FlowSection />
      <WaveDivider bgColor="bg-[#FFFDF0]" fillColor="#ffffff" />

      {/* bg-white */}
      <DailySchedule />
      <RecruitBanner />
      <WaveDivider bgColor="bg-white" fillColor="#FFB300" />

      {/* bg-kb-yellow */}
      <ContactCTA />
    </>
  )
}
