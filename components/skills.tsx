import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database } from "lucide-react";

const skillCategories = {
  ko: [
    {
      title: "프론트엔드",
      icon: Code,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Tanstack Query",
        "Zustand",
        "SASS",
        "Styled-Components",
      ],
    },
    {
      title: "백엔드 & 도구",
      icon: Database,
      skills: ["Supabase", "Git", "Vercel", "Figma", "Notion"],
    },
  ],
  en: [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Tanstack Query",
        "Zustand",
        "SASS",
        "Styled-Components",
      ],
    },
    {
      title: "Backend & Tools",
      icon: Database,
      skills: ["Supabase", "Git", "Vercel", "Figma", "Notion"],
    },
  ],
};

interface SkillsProps {
  language: "ko" | "en";
}

export function Skills({ language }: SkillsProps) {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            ✦ {language === "ko" ? "스킬" : "Skills"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillCategories[language].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={category.title}
                  className="float bg-white backdrop-blur-sm border-border hover:border-teal-400 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 flex justify-center">
                      <IconComponent className="w-12 h-12 text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-white text-black border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
