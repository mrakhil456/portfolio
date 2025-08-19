import { motion } from 'framer-motion';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import './styles/Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce businesses with analytics, product management, and order tracking built with React and Node.js.',
    image: project1,
    github: 'https://github.com/username/ecommerce-dashboard',
    demo: 'https://ecommerce-demo.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team features, and deadline tracking using MERN stack.',
    image: project2,
    github: 'https://github.com/username/task-manager',
    demo: 'https://taskmanager-demo.com'
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