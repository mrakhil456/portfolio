import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaCode} from 'react-icons/fa';


const skills = [
  { icon: <FaHtml5 />, title: 'HTML', description: 'Semantic markup, accessibility, SEO optimization' },
  { icon: <FaCss3Alt />, title: 'CSS', description: 'Flexbox, Grid, animations, responsive design' },
  { icon: <FaJs />, title: 'JavaScript', description: 'ES6+, DOM manipulation, async programming' },
  { icon: <FaReact />, title: 'React', description: 'Hooks, Context API, Redux, Next.js' },
  { icon: <FaCode />, title: 'C++', description: 'OOPs, Functions, Basic Memory Management' },
  { icon: <FaPython />, title: 'Python', description: 'OOPs, Functional Programming, Standard Library' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;