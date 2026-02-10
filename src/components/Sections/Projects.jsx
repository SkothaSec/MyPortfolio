import projects from '../../data/projects.json'
import { SectionLabel } from './SectionLabel'
import { withBase } from '../../utils/assetPath'

export const ProjectsSection = () => (
  <section id="projects" className="container mx-auto px-4 pb-20 space-y-6">
    <SectionLabel>Projects</SectionLabel>
    <div className="card bg-base-100 shadow-xl border border-base-200">
      <div className="card-body space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="text-base-content/80">
              Here are some projects I've created, you can find more in my github.
            </p>
          </div>
          
        </div>

        <div className="carousel carousel-center w-full space-x-4 rounded-2xl bg-base-200 p-4">
          {projects.map((project, idx) => (
            <div key={project.title} className="carousel-item w-full sm:w-3/4 md:w-1/2 lg:w-2/5">
              <div className="card bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 border border-base-200 shadow-md h-full">
                {project.image && (
                  <figure className="h-40 w-full overflow-hidden bg-base-200">
                    <img
                      src={withBase(project.image)}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </figure>
                )}
                <div className="card-body">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="card-title text-xl">{project.title}</h3>
                    
                  </div>
                  <p className="text-base-content/80">{project.blurb}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech) => (
                      <span key={tech} className="badge  badge-outline">{tech}</span>
                    ))}
                  </div>
                  <div className="card-actions justify-between items-center pt-2">
                    {project.link ? (
                      <a className="btn btn-sm btn-primary" href={project.link} target="_blank" rel="noreferrer">
                        <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.47 11.47 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.23 0 4.61-2.81 5.63-5.5 5.93.43.37.81 1.1.81 2.23 0 1.61-.02 2.91-.02 3.31 0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" /></svg>
                        GitHub Repo
                      </a>
                    ) : (
                      <button className="btn btn-sm btn-primary" disabled>View case study</button>
                    )}
                    {project.demo ? (
                      <a className="btn btn-sm btn-secondary" href={project.demo} target="_blank" rel="noreferrer">See demo</a>
                    ) : (
                      <></>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
