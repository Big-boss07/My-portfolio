import './About.css';
import avatarImg from '../assets/portfolio image.jpeg';

function About({ id }) {
  return (
    <section id={id} className="section about-section glass-panel">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>About Me</h2>
          <div className="about-bio">
            <p>
              I’m a frontend developer focused on building responsive, user-friendly web applications. I specialize in modern technologies like React and JavaScript, and I’m passionate about creating clean, efficient, and visually appealing interfaces.
            </p>
            <p>
              I started my journey in 2024, beginning with Notepad++, and I’ve continued to grow my skills through consistent practice and real-world projects. I’m always ready to learn, collaborate, and take on new challenges.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number text-gradient">2024</span>
              <span className="stat-label">Journey Started</span>
            </div>
            <div className="stat-item">
              <span className="stat-number text-gradient">React</span>
              <span className="stat-label">Core Speciality</span>
            </div>
            <div className="stat-item">
              <span className="stat-number text-gradient">100%</span>
              <span className="stat-label">Ready for new projects</span>
            </div>
          </div>
        </div>
        <div className="about-image-container">
          <div className="image-wrapper">
             <img 
                src={avatarImg} 
                alt="Khalid Ayodeji" 
                className="about-image" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }} 
              />
             <div className="image-placeholder" style={{display: 'none'}}>Avatar Image</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
