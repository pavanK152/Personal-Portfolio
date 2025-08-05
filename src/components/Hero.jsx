import { motion, stagger } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // For Prism-based styles
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

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>👋Hello, I'm</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            PavanKalyan
          </motion.h1>
          <motion.h2 className="hero-subtitle">
            {" "}
            I'm a Full Stack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Currently, I love to work on web application using technologies like
            React, Tailwind, Node JS,Express and MongoDb.
          </motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/pavanK152" target="_blank">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pavan-kalyan-korada-293810221/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30,41,59,0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 20,
              }}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "PavanK152",
  origin: "🌍 Srikakulam, India – fueled by coffee and competitive code battles",
  role: "Full Stack Web Developer & Competitive Programmer",
  stack: {
    languages: ["C", "C++", "Python", "JavaScript", "SQL", "Java"],
    frameworks: ["Nodejs" "Express.js", "Tailwind CSS", "Bootstrap"]
  },
 traits: [
  "passionate about building web apps",
  "eager to learn new technologies",
  "writes clean and simple code",
  "understands basics of frontend and backend",
  "loves solving coding problems",
  "interested in real-world project building",
  "comfortable with Git and version control",
  "believes in continuous improvement"
]
,
  missionStatement:
    "Crafting efficient full-stack apps and turning bugs into learning moments. Also chasing ACs on Codeforces.",
  availability: "Available for full-time software developer roles",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                Currently Working On something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
