import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      ></motion.h2>
      My Projects
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/notes.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>SIMPLE NOTES</h3>
          <p>
            Simple Notes is a web-based note-taking application built using
            React.js. It provides users with a clean and intuitive interface to
            create and organize their notes efficiently. The application is
            designed to be responsive, ensuring seamless user experience across
            various devices. Users can share and collaborate on notes with
            friends or colleagues in real-time, enhancing productivity.
          </p>
          <div className="project-tech">
            <span>React JS</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/suby.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>SUBY</h3>
          <p>
            Developed a Multi-vendor restaurant application for browsing food
            items from 30+ restaurants and filtering by region.Created a vendor
            portal for managing and adding firms and products, with real-time
            updates visible to customers with JWT authentication. Enhanced
            security using JWT tokens for login and authentication in the vendor
            dashboard and Foodie application.
          </p>
          <div className="project-tech">
            <span>React JS</span>
            <span>NODE JS</span>
            <span>EXPRESS JS</span>
            <span>MongoDB</span>
            <span>JWT</span>
            <span>CSS</span>
            <span>GitHub Link</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
