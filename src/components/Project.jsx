function Projects({id}) {
  return (
    <section id={id} className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
       <div className="project-card">
  <h3>Project One</h3>
  <p>A short description of your first project goes here.</p>
  {/* The CSS flex-grow on the <p> will push this button to the bottom nicely */}
  <button onClick={() => window.open("https://big-boss07.github.io/kanban-app/kanban.html")}>
     View Project
  </button>
</div>

<div className="project-card">
  <h3>Project Two</h3>
  <p>A short description of your first project goes here.</p>
  {/* The CSS flex-grow on the <p> will push this button to the bottom nicely */}
  <button onClick={() => window.open("LINK", "_blank")}>
     View Project
  </button>
</div>


<div className="project-card">
  <h3>Project Three</h3>
  <p>A short description of your first project goes here.</p>
  {/* The CSS flex-grow on the <p> will push this button to the bottom nicely */}
  <button onClick={() => window.open("LINK", "_blank")}>
     View Project
  </button>
</div>
      </div>

   

    </section>
  );
}

export default Projects;
