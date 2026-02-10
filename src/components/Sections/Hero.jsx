import { SectionLabel } from './SectionLabel'

export const Hero = () => (
  <section className="container mx-auto px-4 py-16">
    <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
      <div className="space-y-6">
        <SectionLabel>Christian Gorke</SectionLabel>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Security Researcher
        </h1>
        <p className="text-lg text-base-content/80 max-w-2xl">
          Denver based security researcher specializing in detection strategy, incident response,
          security automation, and cloud/infra security.
        </p>

      </div>

      
    </div>
  </section>
)
