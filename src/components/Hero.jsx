import './Hero.css';

function Hero({ id }) {
  return (
    <section id={id} className="hero-section">
      <div className="hero-bg-glow"></div>
      
      <div className="hero-content animate-fade-in">
        <div className="hero-badge glass-panel">
          <span className="badge-dot"></span> Available for new opportunities
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="text-gradient">Khalid Ayodeji</span>
        </h1>
        
        <h2 className="hero-subtitle">Senior Frontend Engineer</h2>
        
        <p className="hero-description">
          I specialize in building responsive, user-friendly experiences with HTML, Tailwind CSS, and React, focusing on clean code and visually appealing interfaces.
        </p>
        
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
