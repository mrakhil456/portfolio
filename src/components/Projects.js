import { motion } from 'framer-motion';
import project1 from '../assets/images/Project1.png';
import project2 from '../assets/images/Project2.png';
import project3 from '../assets/images/Project3.png';
import project4 from '../assets/images/Project4.png';
 

const projects = [
  {
    id: 1,
    title: 'Textutil Website',
    description: ' Textutils built with React primarily to do various operations on regular typed text. It is a utility that allows you to manipulate your text in various ways.',
    image: project1,
    github: ' https://github.com/mrakhil456/Textutil',
    demo: ' https://textutil-blond.vercel.app/'
  },
  {
    id: 2,
    title: 'NGO Website',
    description: ' A website for a non-profit organization that provides information about their mission, projects, and how to get involved.',
    image: project2,
    github: 'https://github.com/mrakhil456/NGO-Website',
    demo: 'https://ngo-home-page-self.vercel.app/'
  },
  {
    id: 3,
    title: 'Basic Calculator',
    description: 'A simple and interactive calculator built using HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, multiplication, and division.',
    image: project3,
    github: 'https://github.com/mrakhil456/Basic-Calculator',
    demo: 'https://basic-calculator-steel-omega.vercel.app/'
  },
  {
    id: 4,
    title: 'E-commerce Website',
    description: 'This is a fully responsive and interactive e-commerce website designed and developed using HTML, CSS, and JavaScript. It features a user-friendly interface, product listings, and a shopping cart functionality.',
    image: project4,
    github: 'https://github.com/mrakhil456/E-Commerce-Website',
    demo: 'https://shoptyc.vercel.app/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
                  <a href={project.demo} className="btn btn-outline" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;