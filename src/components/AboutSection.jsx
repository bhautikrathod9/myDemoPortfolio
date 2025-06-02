import { Briefcase, Code, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="py-24 px-4 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} // Set once to false
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} // Set once to false
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About <span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h3
              className="text-2xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }} // Set once to false
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Aspiring Full-Stack Developer & Problem Solver
            </motion.h3>

            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }} // Set once to false
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              As an intermediate web developer, I build responsive and efficient applications 
              across both frontend and backend. My toolkit includes modern frameworks and a 
              growing expertise in system design.
            </motion.p>

            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }} // Set once to false
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Currently deepening my Data Structures and Algorithms knowledge to write 
              optimized code and tackle technical challenges with confidence. Every project 
              is an opportunity to level up my skills.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <motion.a
                href="#contact"
                className="cosmic-button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} // Set once to false
                transition={{ duration: 0.5, delay: 1 }}
              >
                Get In Touch
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/15kXBArhApjdJM4AEIcqXorr9_yXnMZhx/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} // Set once to false
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Download CV
              </motion.a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              className="gradient-border p-6 card-hover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }} // Set once to false
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive web applications with modern frameworks like React and Node.js,
                    while continuously improving my backend architecture skills.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="gradient-border p-6 card-hover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }} // Set once to false
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Actively strengthening my DSA knowledge to write optimized algorithms
                    and solve complex coding challenges efficiently.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="gradient-border p-6 card-hover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }} // Set once to false
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Fast Learning</h4>
                  <p className="text-muted-foreground">
                    Quickly adapting to new technologies and frameworks to stay current
                    in the ever-evolving web development landscape.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
