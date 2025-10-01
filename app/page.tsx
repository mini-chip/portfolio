"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";
import { StarField } from "@/components/star-field";
import { Experience } from "@/components/experience";
import { Comment } from "@/components/comment";
export default function Home() {
  const [language, setLanguage] = useState<"ko" | "en">("ko");

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <StarField />
      <Navigation language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Experience language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Comment language={language} />
        <Contact />
      </main>
    </div>
  );
}
