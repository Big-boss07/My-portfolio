import './Project.css';

const projectData = [
  {
    title: 'Video Tool',
    description: 'A responsive video management interface built with modern web technologies, providing seamless user interaction and sleek aesthetics.',
    tech: ['React', 'Tailwind CSS', 'HTML'],
    link: 'https://video-tool-one.vercel.app/'
  },
  {
    title: 'Khaf Consult',
    description: 'A professional consultancy website featuring clean design, smooth animations, and optimized performance for client acquisition.',
    tech: ['React', 'Tailwind CSS', 'HTML'],
    link: 'https://khaf-consult.vercel.app/'
  },
  {
    title: 'Kanban App',
    description: 'An interactive project management board allowing users to organize tasks and workflows efficiently using drag-and-drop mechanics.',
    tech: ['React', 'Tailwind CSS', 'HTML'],
    link: 'https://kanban-app-tan-omega.vercel.app/'
  }
];

function Projects({ id }) {
  return (
    <section id={id} className="section projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card glass-panel">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
            <div className="project-footer">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                Live Demo
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '0.25rem'}}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
