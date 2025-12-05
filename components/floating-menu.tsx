"use client";

import { MessageCircle, Home, Briefcase, Award, X, Menu } from "lucide-react";
import { useState } from "react";

interface FloatingMenuProps {
  language: "ko" | "en";
}

export function FloatingMenu({ language }: FloatingMenuProps) {
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);

  const scrollToCommentForm = () => {
    const commentForm = document.querySelector("#comment-form");
    if (commentForm) {
      commentForm.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setIsFloatingMenuOpen(false);
  };

  const navigateToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsFloatingMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsFloatingMenuOpen(false);
  };

  const menuItems = [
    {
      icon: Home,
      label: language === "ko" ? "홈" : "Home",
      action: scrollToTop,
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Award,
      label: language === "ko" ? "경험" : "Experience",
      action: () => navigateToSection("#experience"),
      color: "bg-orange-500 hover:bg-orange-600"
    },
    {
      icon: Briefcase,
      label: language === "ko" ? "프로젝트" : "Projects",
      action: () => navigateToSection("#projects"),
      color: "bg-purple-500 hover:bg-purple-600"
    },

    {
      icon: MessageCircle,
      label: language === "ko" ? "댓글" : "Comments",
      action: scrollToCommentForm,
      color: "bg-teal-500 hover:bg-teal-600"
    }
  ];

  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50">
      <div
        className={`absolute bottom-20 right-0 flex flex-col gap-3 transition-all duration-300 ${
          isFloatingMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className={`${item.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 pr-4 pl-3 py-3 group active:scale-95`}
            style={{
              transitionDelay: isFloatingMenuOpen ? `${index * 50}ms` : "0ms"
            }}
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-medium whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}
        className={`w-14 h-14 ${
          isFloatingMenuOpen
            ? "bg-red-500 hover:bg-red-600"
            : " bg-teal-500  hover:from-teal-600 hover:to-blue-600"
        } text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group active:scale-95`}
        aria-label={language === "ko" ? "메뉴" : "Menu"}
      >
        {isFloatingMenuOpen ? (
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        )}
        {!isFloatingMenuOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></span>
        )}
      </button>
    </div>
  );
}
