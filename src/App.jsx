
import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <button
        id="menuToggle"
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="sidebar"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "×" : "☰"}
      </button>

      <aside
        className={`sidebar ${menuOpen ? "open" : ""}`}
        id="sidebar"
      >
        <div>
          <img
            src="/images/profile.jpg"
            alt="My profile photo"
            className="profile-pic"
          />

          <h1 className="name">Emmanuel Frias Capilitan</h1>
          <p className="role">Web Developer / Network Engineer</p>

          <nav className="nav">
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
            <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <a href="mailto:capilitanemmanuel14@gmail.com">Email Me</a>

          <div className="socials">
            <a href="https://github.com/emmanzz-tech" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/emmanuel-capilitan" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/emmanuel.frias.7140" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </aside>

      <main className="content">
        <section id="about" className="section intro">
          <p className="eyebrow-text">Based in Iloilo, Philippines</p>

          <h2 className="headline">
            I build things for the web, and I'm figuring out how they break.
          </h2>

          <p className="lead">
            I am a 20-year-old IT student at the Western Institute of Technology.
            I'm a student developer learning HTML, CSS, JavaScript, PHP, and MySQL.
            I'm focused on building web applications and understanding how they work,
            are tested, and are secured.
          </p>
        </section>

        <section id="experience" className="section">
          <h3 className="section-title">Experience</h3>

          <div className="entry">
            <p className="entry-when">2026 — Present</p>
            <div>
              <h4>Freelance / Self-Directed Projects</h4>
              <p>
                Building web applications to practice server-side programming,
                database management, and secure coding.
              </p>
            </div>
          </div>

          <div className="entry">
            <p className="entry-when">2024</p>
            <div>
              <h4>Coursework — Web Development</h4>
              <p>
                Studied front-end fundamentals and learned to build dynamic
                websites using PHP and MySQL.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h3 className="section-title">Projects</h3>

          <div className="project">
            <h4>Hotel Inquiries and Reservation</h4>
            <p>
              A Java-based hotel reservation application for viewing room types,
              checking reservation details, and managing booking inquiries.
            </p>
          </div>

          <div className="project">
            <h4>Awesome Todo App</h4>
            <p>
              A MERN stack application that allows users to create, view, update,
              and delete tasks.
            </p>
            <a
              href="https://awesometodo-3r7f.onrender.com"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Project →
            </a>
          </div>

          <div className="project">
            <h4>OSPF Network Topology</h4>
            <p>
              A Cisco Packet Tracer project demonstrating dynamic routing between
              multiple routers and LANs using OSPF.
            </p>
            <a
              href="https://github.com/emmanzz-tech/ospf1"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Code →
            </a>
          </div>
        </section>

        <section id="skills" className="section">
          <h3 className="section-title">Skills</h3>
          <ul className="skills-list">
            <li>HTML & CSS</li>
            <li>PHP</li>
            <li>Java</li>
            <li>Cisco Packet Tracer</li>
            <li>Git & GitHub</li>
            <li>UI/UX Design</li>
          </ul>
        </section>

        <section id="contact" className="section contact">
          <h3 className="section-title">Contact</h3>
          <p>
            I'm open to internships, junior roles, and freelance work.
            Feel free to contact me by email.
          </p>
          <a
            href="mailto:capilitanemmanuel14@gmail.com"
            className="contact-button"
          >
            Contact Me
          </a>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Emmanuel Frias Capilitan</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
