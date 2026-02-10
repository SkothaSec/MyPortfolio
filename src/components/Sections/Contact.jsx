import { SectionLabel } from './SectionLabel'

const Icon = {
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5A2.25 2.25 0 0 1 22.5 5.25v13.5A2.25 2.25 0 0 1 20.25 21h-16.5A2.25 2.25 0 0 1 1.5 18.75Zm2.25-.75a.75.75 0 0 0-.75.75v.334l8.2 5.07a.75.75 0 0 0 .8 0l8.2-5.07V5.25a.75.75 0 0 0-.75-.75Zm15.54 3.145-5.99 3.7a2.25 2.25 0 0 1-2.39 0l-5.99-3.7v10.86a.75.75 0 0 0 .75.75h12.87a.75.75 0 0 0 .75-.75Z" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.446-2.136 2.94v5.668H9.345V9h3.41v1.561h.047c.475-.899 1.637-1.848 3.368-1.848 3.6 0 4.266 2.37 4.266 5.455v6.284zM5.337 7.433a2.027 2.027 0 1 1 0-4.055 2.027 2.027 0 0 1 0 4.055Zm1.781 13.02H3.556V9h3.562v11.453ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.47 11.47 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.23 0 4.61-2.81 5.63-5.5 5.93.43.37.81 1.1.81 2.23 0 1.61-.02 2.91-.02 3.31 0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  ),
}

export const ContactSection = () => (
  <section id="contact" className="container mx-auto px-4 pb-20">
    
    <div className="card bg-base-100 shadow-2xl border border-base-200 overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary" />
      
      <div className="card-body gap-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-secondary/80">Let's collaborate</p>
            <div className='join'>
            <img
              src="/images/profilePicture.jpeg"
              alt="Portrait of Christian Gorke"
              className="h-16 w-16 rounded-2xl object-cover border border-base-200 join-item"
              loading="lazy"
            />
            <div className="space-y-1 join-item">
              <h2 className="text-3xl font-bold">Christian Gorke</h2>
              <p className="text-base-content/80">Denver, CO · Security Researcher</p>
              <p className="text-base-content/70">
                Detection strategy · Incident response · Security automation · Cloud/infra security
              </p>
            </div>
            
          </div>
          </div>

          <div className="flex flex-col gap-3 items-stretch md:items-end min-w-[240px]">
            <a
              className="btn btn-primary justify-start gap-3 w-full md:w-60"
              href="mailto:cgorke@proton.me"
            >
              {Icon.mail}
              cgorke@proton.me
            </a>
            <a
              className="btn btn-secondary justify-start gap-3 w-full md:w-60"
              href="https://www.linkedin.com/in/christiangorke"
              target="_blank"
              rel="noreferrer"
            >
              {Icon.linkedin}
              linkedin.com/in/christiangorke
            </a>
            <a
              className="btn btn-secondary justify-start gap-3 w-full md:w-60"
              href="https://github.com/SkothaSec"
              target="_blank"
              rel="noreferrer"
            >
              {Icon.github}
              github.com/SkothaSec
            </a>
          </div>
        </div>

        <div className="alert bg-base-200 border border-base-300">
          <div className="flex items-center gap-3 text-sm text-base-content/80">
            <span className="badge badge-outline">Timezone</span>
            <span>Mountain Time (UTC-7)</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)
