import './Contact.css';

function Contact({ id }) {
  return (
    <section id={id} className="section contact-section">
      <h2 className="section-title">Let's Connect</h2>
      <p className="contact-subtitle">
        I'm currently exploring new opportunities. Whether you have a question, a project idea, or just want to network, I'll do my best to get back to you!
      </p>
      
      <div className="contact-grid">
        <div className="glass-panel contact-card">
          <div className="contact-icon">📧</div>
          <h3>Email Me</h3>
          <p>Reach out directly to my inbox.</p>
          <a href="mailto:khalidayodeji66@gmail.com" className="btn-primary w-full" style={{marginTop: 'auto'}}>khalidayodeji66@gmail.com</a>
        </div>
        
        <div className="glass-panel contact-card">
          <div className="contact-icon">💬</div>
          <h3>WhatsApp</h3>
          <p>Send me a fast message directly.</p>
          <a href="https://wa.me/2349132622900" target="_blank" rel="noopener noreferrer" className="btn-primary w-full" style={{marginTop: 'auto'}}>Chat on WhatsApp</a>
        </div>
      </div>

      <div className="social-links-container">
        <h3>Connect on social media</h3>
        <div className="social-links">
          <a href="https://github.com/Big-boss07" target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
          <a href="https://linkedin.com/in/khalid-ayodeji" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
          <a href="https://x.com/ayodejibigboss" target="_blank" rel="noopener noreferrer" className="social-btn">X (Twitter)</a>
          <a href="https://instagram.com/Khalid Ayodeji" target="_blank" rel="noopener noreferrer" className="social-btn">Instagram</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
