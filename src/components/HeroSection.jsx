import { ArrowDown, MousePointerClick } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrollProgress(Math.min(scrollY / (windowHeight * 0.5), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-secondary/20 blur-3xl animate-float-medium" />
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full bg-accent/20 blur-3xl animate-float-fast" />
      </motion.div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.span variants={textVariants} transition={{ duration: 0.5 }}>
              Hi, I'm
            </motion.span>
            <motion.span 
              className="text-primary"
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {" "}Bhautik
            </motion.span>
            <motion.span
              className="text-gradient ml-2"
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {" "}Rathod
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I craft stellar web experiences using modern technologies. With strong expertise in both frontend and backend development, I build high-performance, scalable, and visually appealing applications. Additionally, I'm sharpening my Data Structures and Algorithms (DSA) skills to strengthen my problem-solving abilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-4"
          >
            <motion.a
              href="#projects"
              className="cosmic-button relative overflow-hidden group"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: isHovering ? 4 : 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <MousePointerClick size={18} />
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.span 
          className="text-sm text-muted-foreground mb-2"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
        <motion.div 
          className="h-10 w-px bg-primary mt-2"
          style={{ scaleY: scrollProgress }}
          initial={{ scaleY: 0 }}
        />
      </motion.div>
    </section>
  );
};
