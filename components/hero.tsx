"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Github, Mail, Rocket } from "lucide-react";

const heroTexts = {
  ko: {
    name: "김민희",
    description:
      "Next.js와 React를 활용하여 사용자 중심의 웹 서비스를 개발합니다. 2,000명이 사용하는 실제 서비스 개선 경험을 바탕으로, 성능 최적화와 사용자 경험 향상에 집중하는 프론트엔드 개발자입니다.",

    githubBtn: "GitHub",
    contactBtn: "연락하기",
    linkedinBtn: "LinkedIn",
  },
  en: {
    name: "Minhee Kim",
    description:
      "Frontend Developer specializing in Next.js and React. Experienced in optimizing services used by 2,000+ users, focusing on performance enhancement and exceptional user experiences.",
    githubBtn: "GitHub",
    contactBtn: "Contact Me",
    linkedinBtn: "LinkedIn",
  },
};

interface HeroProps {
  language: "ko" | "en";
}

export function Hero({ language }: HeroProps) {
  const [nameToggle, setNameToggle] = useState<"ko" | "en">("ko");

  useEffect(() => {
    const interval = setInterval(() => {
      setNameToggle((prev) => (prev === "ko" ? "en" : "ko"));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative z-10"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-gray-200 transition-all duration-300 ease-in-out">
              {heroTexts[nameToggle].name}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 text-pretty max-w-2xl mx-auto">
            {heroTexts[language].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="glow bg-teal-500 hover:bg-teal-600"
              onClick={() =>
                window.open("https://github.com/mini-chip", "_blank")
              }
            >
              <Github className="mr-2 h-5 w-5" />
              {heroTexts[language].githubBtn}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-white bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              {heroTexts[language].contactBtn}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-white bg-transparent"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/%EB%AF%BC%ED%9D%AC-%EA%B9%80-599b232a8/",
                  "_blank"
                )
              }
            >
              <Mail className="mr-2 h-5 w-5" />
              {heroTexts[language].linkedinBtn}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToAbout}
            className="animate-bounce hover:text-teal-400 border-2 border-solid "
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
