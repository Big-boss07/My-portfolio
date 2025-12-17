function Hero({id}) {
  return (
    <section id={id} className="hero">
      <h1>Hello, I'm Khalid</h1>
      <h2>Frontend Developer</h2>
      <p>I build modern and responsive web applications using React.</p>

         <button onClick={() => {
  const projectsSection = document.getElementById("projects");
  projectsSection.scrollIntoView({ behavior: "smooth" });
}}>
  View My Projects
</button>


   
    </section>
  );
}

export default Hero;
