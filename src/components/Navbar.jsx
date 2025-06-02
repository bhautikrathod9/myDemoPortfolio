import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeItem, setActiveItem] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (window.innerWidth >= 768) {
        setIsScrolled(currentScrollY > 10);
        setVisible(true);
      } else {
        setIsScrolled(currentScrollY > 10);
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveItem(section.id.charAt(0).toUpperCase() + section.id.slice(1));
        }
      });
    };

    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();
    window.addEventListener("scroll", handleScroll);
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [lastScrollY]);

  const getBackgroundColor = () => {
    if (isDarkMode) {
      return isScrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent';
    }
    return isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent';
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", damping: 10, stiffness: 100 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3 }
    }),
    hover: { scale: 1.05 }
  };

  return (
    <AnimatePresence>
      <motion.nav
        className={cn(
          "fixed w-full z-50",
          isScrolled ? "py-2 border-b" : "py-4 border-b border-transparent"
        )}
        style={{
          background: getBackgroundColor(),
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
          borderColor: isScrolled ? (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)') : 'transparent',
        }}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={navVariants}
      >
        <div className="container mx-auto px-4 flex items-center justify-center max-w-7xl">
          <motion.div 
            className="flex items-center gap-1 sm:gap-4 md:gap-8"
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 rounded-lg",
                  "text-foreground/80 hover:text-primary",
                  activeItem.toLowerCase() === item.name.toLowerCase() 
                    ? "text-primary font-medium" 
                    : ""
                )}
                custom={i}
                variants={itemVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
                
                {activeItem.toLowerCase() === item.name.toLowerCase() && (
                  <motion.span 
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    layoutId="activeBg"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                
                {hoveredItem === item.name && (
                  <motion.span 
                    className="absolute inset-0 rounded-lg bg-primary/5"
                    layoutId="hoverBg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                
                <motion.span 
                  className="absolute bottom-0 left-1/2 h-0.5 w-4 bg-primary -translate-x-1/2"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: activeItem.toLowerCase() === item.name.toLowerCase() ? 1 : 0 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className="absolute right-4 md:right-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};