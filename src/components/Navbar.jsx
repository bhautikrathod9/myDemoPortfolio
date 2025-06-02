import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // For desktop, always show navbar
      if (window.innerWidth >= 768) {
        setIsScrolled(currentScrollY > 10);
        setVisible(true);
        return;
      }

      // Mobile behavior
      setIsScrolled(currentScrollY > 10);
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      // Update active nav item based on scroll position
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

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 border-b"
          : "py-4 border-b border-transparent",
        !visible && "transform -translate-y-full"
      )}
      style={{
        background: getBackgroundColor(),
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        borderColor: isScrolled ? (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)') : 'transparent',
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-center max-w-7xl">
        {/* Centered Navigation */}
        <div className="flex items-center gap-1 sm:gap-4 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-3 py-2 rounded-lg transition-all duration-300",
                "text-foreground/80 hover:text-primary",
                activeItem.toLowerCase() === item.name.toLowerCase() 
                  ? "text-primary font-medium" 
                  : ""
              )}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
              {activeItem.toLowerCase() === item.name.toLowerCase() && (
                <>
                  <span className="absolute inset-0 bg-primary/10 rounded-lg" />
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 bg-primary -translate-x-1/2" />
                </>
              )}
              <span className="absolute inset-0 rounded-lg hover:bg-primary/5 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Theme Toggle - positioned absolutely on larger screens */}
        <div className="absolute right-4 md:right-8">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};