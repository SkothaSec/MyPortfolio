import posts from '../../data/posts.json'
import { SectionLabel } from './SectionLabel'

export const BlogSection = () => (
  <section id="blog" className="container mx-auto px-4 pb-20 space-y-6">
    <SectionLabel>Blog</SectionLabel>
    <div className="card bg-base-100 shadow-xl border border-base-200">
      <div className="card-body space-y-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold">Articles I've Written</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="card bg-base-200 border border-base-200/80 shadow-sm h-full"
            >
              <div className="card-body space-y-3">
                <p className="text-sm text-base-content/60">{post.date}</p>
                <h3 className="card-title">{post.title}</h3>
                <p className="text-base-content/80">{post.excerpt}</p>
                <div className="card-actions">
                  {post.link ? (
                    <a className="btn btn-sm btn-primary" href={post.link} target="_blank" rel="noreferrer">
                      Read
                    </a>
                  ) : (
                    <button className="btn btn-sm btn-primary" disabled>Read</button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)
