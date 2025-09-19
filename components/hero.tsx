"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Github, Mail, Rocket } from "lucide-react";

const heroTexts = {
  ko: {
    greeting: "안녕하세요, 저는",
    name: "김민희",
    suffix: "입니다",
    description:
      "우주처럼 무한한 가능성을 가진 웹 개발자로서, 창의적이고 혁신적인 디지털 경험을 만들어갑니다.",
    githubBtn: "GitHub 보기",
    contactBtn: "연락하기",
  },
  en: {
    greeting: "Hello, I'm",
    name: "Minhee Kim",
    suffix: "",
    description:
      "A web developer with infinite possibilities like the universe, creating creative and innovative digital experiences.",
    githubBtn: "View GitHub",
    contactBtn: "Contact Me",
  },
};

interface HeroProps {
  language: "ko" | "en"
}

export function Hero({ language }: HeroProps) {
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
          <div className="mb-8 float">
            <Avatar className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-accent glow">
              <AvatarFallback className="bg-transparent text-6xl">
                <Rocket className="w-16 h-16 text-primary-foreground" />
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            {heroTexts[language].greeting}{" "}
            <span className="text-primary glow">
              {heroTexts[language].name}
            </span>
            {heroTexts[language].suffix && ` ${heroTexts[language].suffix}`}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            {heroTexts[language].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="glow bg-primary hover:bg-primary/90">
              <Github className="mr-2 h-5 w-5" />
              {heroTexts[language].githubBtn}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              {heroTexts[language].contactBtn}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
