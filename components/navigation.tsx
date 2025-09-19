"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = {
  ko: [
    { name: "홈", href: "#home" },
    { name: "소개", href: "#about" },
    { name: "프로젝트", href: "#projects" },
    { name: "스킬", href: "#skills" },
    { name: "연락처", href: "#contact" },
  ],
  en: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],
};

interface NavigationProps {
  language: "ko" | "en"
  setLanguage: (language: "ko" | "en") => void
}

export function Navigation({ language, setLanguage }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems[language].map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [language]);

  const toggleLanguage = () => {
    console.log("Current language:", language);
    const newLang = language === "ko" ? "en" : "ko";
    console.log("Switching to:", newLang);
    setLanguage(newLang);
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary glow">
            ✦ Portfolio
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-1">
              {navItems[language].map((item) => (
                <Button
                  key={item.name}
                  variant={
                    activeSection === item.href.slice(1) ? "default" : "ghost"
                  }
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "glow bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {item.name}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="text-xs px-3 py-1 border-primary/30 hover:border-primary transition-all duration-300"
            >
              {language === "ko" ? "ENGLISH" : "한국어"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
