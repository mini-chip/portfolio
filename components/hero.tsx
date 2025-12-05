"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";

const heroTexts = {
  ko: {
    name: "김민희",
    catchphrase: ["사용자", "중심의", "웹", "경험을", "만드는"],
    description: "",
    githubBtn: "GitHub",
    contactBtn: "연락하기",
    linkedinBtn: "LinkedIn"
  },
  en: {
    name: "Minhee Kim",
    catchphrase: ["Creating", "User-Centered", "Web", "Experiences"],
    description: "",
    githubBtn: "GitHub",
    contactBtn: "Contact Me",
    linkedinBtn: "LinkedIn"
  }
};

interface HeroProps {
  language: "ko" | "en";
}

export function Hero({ language }: HeroProps) {
  const [nameToggle, setNameToggle] = useState<"ko" | "en">("ko");
  const [typingText, setTypingText] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setNameToggle((prev) => (prev === "ko" ? "en" : "ko"));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const words = heroTexts[language].catchphrase;
    setTypingText([]);
    setIsTyping(true);

    let currentWords: string[] = [];

    words.forEach((word, index) => {
      setTimeout(() => {
        currentWords = [...currentWords, word];
        setTypingText([...currentWords]);

        if (index === words.length - 1) {
          setTimeout(() => {
            setIsTyping(false);
          }, 200);
        }
      }, index * 400);
    });

    return () => {
      currentWords = [];
    };
  }, [language]);

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
          <div className="mb-4">
            <p className="text-lg md:text-xl text-teal-300 mb-2 min-h-[1.5rem]">
              <span className="relative">
                {typingText.map((word, index) => (
                  <span
                    key={`${language}-${word}-${index}`}
                    className="inline-block mr-2 animate-[fadeIn_0.3s_ease-in-out_forwards]"
                  >
                    {word}
                  </span>
                ))}
                {isTyping && (
                  <span className="animate-pulse text-teal-400">|</span>
                )}
              </span>
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-gray-200 transition-all duration-300 ease-in-out relative">
              {heroTexts[nameToggle].name}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 transform scale-x-0 animate-[slideIn_1s_ease-in-out_1s_forwards]"></span>
            </span>
          </h1>

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
              onClick={() =>
                window.open("mailto:kimmin5209@gmail.com", "_blank")
              }
            >
              <Mail className="mr-2 h-5 w-5" />
              {heroTexts[language].contactBtn}
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
