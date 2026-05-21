import { MainLayout }           from '@/layouts/MainLayout'
import { HeroSection }          from '@/sections/hero'
import { ClientsBar }           from '@/sections/clients'
import { ServicesSection }      from '@/sections/services'
import { CapabilitiesSection }  from '@/sections/capabilities'
import { TransformationSection } from '@/sections/transformation'
import { ProjectsSection }      from '@/sections/projects'
import { CTASection }           from '@/sections/cta'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ClientsBar />
      <ServicesSection />
      <CapabilitiesSection />
      <TransformationSection />
      <ProjectsSection />
      <CTASection />
    </MainLayout>
  )
}
