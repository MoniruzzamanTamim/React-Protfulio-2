import { Close, GitHub, Link } from "@mui/icons-material";
import { useMemo, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Corporate WordPress Site",
    category: "WordPress",
    description: "Custom company website with Elementor and optimized SEO.",
    image: "https://picsum.photos/seed/wp1/800/500",
    live: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 2,
    title: "WooCommerce Store",
    category: "WordPress",
    description: "Product filtering, checkout customization and payment integration.",
    image: "https://picsum.photos/seed/wp2/800/500",
    live: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 3,
    title: "React Dashboard",
    category: "Frontend",
    description: "Analytics dashboard with charts, table filters and API feeds.",
    image: "https://picsum.photos/seed/front1/800/500",
    live: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 4,
    title: "Portfolio SPA",
    category: "Frontend",
    description: "Responsive one-page app with animations and theme support.",
    image: "https://picsum.photos/seed/front2/800/500",
    live: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 5,
    title: "Python CRM Backend",
    category: "Backend",
    description: "REST API for lead and pipeline management with role-based auth.",
    image: "https://picsum.photos/seed/back1/800/500",
    live: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 6,
    title: "PHP Booking Engine",
    category: "Backend",
    description: "Reservation system with calendar sync and email notifications.",
    image: "https://picsum.photos/seed/back2/800/500",
    live: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 7,
    title: "Theme Customizer Tool",
    category: "WordPress",
    description: "Advanced styling and live-preview controls for custom themes.",
    image: "https://picsum.photos/seed/wp3/800/500",
    live: "https://example.com",
    github: "https://github.com"
  },
  {
    id: 8,
    title: "Landing Pages Collection",
    category: "Frontend",
    description: "A/B tested campaign pages for multiple product launches.",
    image: "https://picsum.photos/seed/front3/800/500",
    live: "https://example.com",
    github: "https://github.com"
  }
];

const filters = ["All", "WordPress", "Frontend", "Backend"];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="section-gap">
      <div className="container">
        <h2 className="section-title text-center">Portfolio</h2>
        <p className="text-center section-subtitle mb-4">Recent work samples and projects.</p>
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`btn btn-sm ${activeFilter === filter ? "btn-primary mainbtn" : "secondbtn"}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="row g-4">
          {visibleProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <article className="portfolio-card" onClick={() => setActiveProject(project)}>
                <img src={project.image} alt={project.title} className="img-fluid rounded-3" />
                <div className="portfolio-overlay">
                  <h3 className="h6 mb-1">{project.title}</h3>
                  <p className="small mb-0">{project.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="portfolio-modal" role="dialog" aria-modal="true">
          <div className="portfolio-modal-box">
            <button type="button" className="btn-close-modal mainbtn" onClick={() => setActiveProject(null)}>
              <Close />
            </button>
            <img src={activeProject.image} alt={activeProject.title} className="img-fluid rounded-3 mb-3" />
            <h3 className="h4">{activeProject.title}</h3>
            <p className="small badge text-bg-primary mb-3">{activeProject.category}</p>
            <p>{activeProject.description}</p>
            <div className="d-flex flex-wrap gap-2">
              <a href={activeProject.live} target="_blank" rel="noreferrer" className="btn btn-primary mainbtn  btn-sm">
                <Link fontSize="small" /> Live Demo
              </a>
              <a
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary mainbtn btn-sm"
              >
                <GitHub fontSize="small" /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
