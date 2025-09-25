import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Users, GraduationCap, Code } from "lucide-react";

const experiences = {
  ko: [
    {
      title: "Datamanim 마이그레이션 프로젝트",
      role: "프론트엔드 개발자 (외주)",
      period: "2025.08 - 2025.09",
      type: "work",
      description: "Jupyter Notebook 기반 서비스를 Next.js로 완전 마이그레이션",
      highlights: [
        "ADP 자격증 시험 준비 서비스",
        "성능 최적화 및 사용자 경험 개선"
      ],
      tech: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Tanstack Query",
        "Zustand"
      ]
    },
    {
      title: "SWYP 프로젝트 - INDEX",
      role: "프론트엔드 개발자",
      period: "2025.07 - 2025.09",
      type: "project",
      description: "감정 기반 독서 기록 서비스 개발",
      highlights: [
        "사용자 감정 데이터 시각화",
        "반응형 웹 디자인 구현",
        "실시간 데이터 동기화"
      ],
      tech: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Tanstack Query",
        "Zustand"
      ]
    },
    {
      title: "코드잇 스프린트 프론트엔드 트랙",
      role: "수료생",
      period: "2023.10 - 2024.04",
      type: "education",
      description: "실무 중심의 프론트엔드 개발 부트캠프",
      highlights: [
        "QuickQuestion - 날씨 테마 익명 문답 서비스",
        "Mogazoa - 종합 리뷰 플랫폼",
        "React/Next.js 기반 실전 프로젝트 수행",
        "팀 프로젝트를 통한 협업 경험",
        "현업 개발자 멘토링"
      ],
      tech: ["React", "Next.js", "TypeScript", "JavaScript", "Git"]
    },

    {
      title: "경남대학교 졸업",
      role: "학사 학위 취득",
      period: "2017-2021",
      type: "education",
      description: "컴퓨터공학과 졸업",
      highlights: [
        "프로그래밍 기초 및 알고리즘 학습",
        "데이터베이스 및 소프트웨어 공학",
        "팀 프로젝트 경험"
      ],
      tech: ["Java", "Javascript", "C", "Python", "SQL"]
    }
  ],
  en: [
    {
      title: "Datamanim Migration Project",
      role: "Frontend Developer (Freelance)",
      period: "2025.08 - 2025.09",
      type: "work",
      description: "Complete migration from Jupyter Notebook to Next.js",
      highlights: [
        "ADP certification exam preparation service",
        "Performance optimization and UX improvement"
      ],
      tech: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Tanstack Query",
        "Zustand"
      ]
    },
    {
      title: "SWYP Project - INDEX",
      role: "Frontend Developer",
      period: "2025.07 - 2025.09",
      type: "project",
      description: "Emotion-based reading record service development",
      highlights: [
        "User emotion data visualization",
        "Responsive web design implementation",
        "Real-time data synchronization"
      ],
      tech: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Tanstack Query",
        "Zustand"
      ]
    },
    {
      title: "Codeit Sprint Frontend Track",
      role: "Graduate",
      period: "2023.10 - 2024.04",
      type: "education",
      description: "Practical frontend development bootcamp",
      highlights: [
        "React/Next.js based real-world projects",
        "Team collaboration experience",
        "Professional developer mentoring"
      ],
      tech: ["React", "Next.js", "TypeScript", "JavaScript", "Git"]
    },
    {
      title: "Kyungnam University Graduation",
      role: "Bachelor's Degree",
      period: "2017-2021",
      type: "education",
      description: "Computer Engineering major",
      highlights: [
        "Programming fundamentals and algorithms",
        "Database and software engineering",
        "Team project experience"
      ],
      tech: ["Java", "Javascript", "C", "Python", "SQL"]
    }
  ]
};

interface ExperienceProps {
  language: "ko" | "en";
}

export function Experience({ language }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            ✦ {language === "ko" ? "경험" : "Experience"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences[language].map((exp, index) => (
              <Card
                key={exp.title}
                className="float bg-white backdrop-blur-sm border-border hover:border-teal-400 transition-all duration-300 h-fit"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col gap-2">
                    <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
                      {exp.type === "education" && (
                        <GraduationCap className="w-5 h-5" />
                      )}
                      {exp.type === "work" && <Briefcase className="w-5 h-5" />}
                      {exp.type === "project" && <Code className="w-5 h-5" />}
                      <span className="line-clamp-1">{exp.title}</span>
                    </CardTitle>
                    {exp.role && (
                      <p className="text-teal-600 font-medium text-sm">
                        {exp.role}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {exp.description && (
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  <div className="mb-3">
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4" />
                      {language === "ko" ? "주요 성과" : "Key Achievements"}
                    </h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      {exp.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-teal-500 mt-1 text-xs">•</span>
                          <span className="line-clamp-2">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.tech && exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {exp.tech.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-teal-100 text-teal-700 border border-teal-200 text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {exp.tech.length > 4 && (
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-600 border border-gray-200 text-xs px-2 py-1"
                        >
                          +{exp.tech.length - 4}
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
