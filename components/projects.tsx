import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = {
  ko: [
    {
      title: "Datamanim",
      description:
        "최대 2,000명의 동시 접속자를 가진 ADP 자격증 시험 준비 웹 서비스를 Jupyter Notebook에서 Next.js로 마이그레이션한 외주 프로젝트입니다.",
      achievements: [
        "Lighthouse 성능 점수 39 → 72로 84% 개선",
        "LCP 시간 11.0s → 3.9s로 65% 단축",
        "CLS 점수 0.31 → 0.02로 최적화"
      ],
      tech: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Tanstack Query",
        "Zustand"
      ],
      image: "/datamanim_main.png",
      demoUrl:
        "https://datamanim-migration-copy-bscy62902-minhees-projects-3eff1d38.vercel.app/",
      githubUrl: "https://github.com/mini-chip/datamanim-migration-copy"
    },
    {
      title: "INDEX",
      description:
        "사용자가 책을 읽으며 느낀 감정을 중심으로 기록하고 공유할 수 있는 감정 기반 독서 기록 서비스입니다.",
      achievements: [
        "사용자 감정 데이터 시각화 구현",
        "반응형 웹 디자인 적용",
        "실시간 데이터 동기화 기능 개발"
      ],
      tech: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Tanstack Query",
        "Zustand"
      ],
      image: "/INDEX_main.jpg",
      demoUrl: "https://index-pi-nine-40.vercel.app/",
      githubUrl: "https://github.com/SWYP-index/swyp-frontend"
    },
    {
      title: "WED",
      description: "날씨 정보를 기반으로 한 웹 애플리케이션입니다.",
      achievements: [
        "OpenWeather API 연동",
        "반응형 디자인 구현",
        "실시간 날씨 정보 표시"
      ],
      tech: ["Next.js", "Tailwind CSS", "Typescript", "Axios", "Vercel"],
      image: "/wed_main.png",
      demoUrl:
        "https://wed-arsy-7edxc34ub-minhees-projects-3eff1d38.vercel.app/",
      githubUrl: "https://github.com/mini-chip/wed"
    },
    {
      title: "QuickQuestion(QQ)",
      description: "날씨에 따라 다양한 테마를 가진 익명 문답 서비스입니다.",
      achievements: [
        "날씨 기반 테마 자동 변경 시스템",
        "익명 질문/답변 기능 구현",
        "Storybook을 활용한 컴포넌트 문서화"
      ],
      tech: [
        "Next.js",
        "SASS",
        "OpenWeather API",
        "TypeScript",
        "Storybook",
        "REST API",
        "TanstackQuery",
        "React-Hook-Form"
      ],
      image: "/QQ_main.png",
      demoUrl: "https://quick-question-weather.vercel.app/",
      githubUrl: "https://github.com/Important-is-Great-Youths/QuickQuestion"
    },
    {
      title: "Mogazoa",
      description:
        "다양한 분야의 상품을 리뷰할 수 있는 종합 리뷰 플랫폼입니다.",
      achievements: [
        "10개 카테고리 상품 리뷰 시스템",
        "사용자 리뷰 평점 및 랭킹 기능",
        "반응형 UI/UX 디자인 적용"
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Style-Components",
        "React-Hook-Form",
        "REST API"
      ],
      image: "/mogazoa_main.png",
      demoUrl: "https://mogazoa.vercel.app/",
      githubUrl: "https://github.com/5-1-Mogazoa/Mogazoa"
    }
  ],
  en: [
    {
      title: "Datamanim",
      description:
        "Freelance project migrating ADP certification exam preparation web service from Jupyter Notebook to Next.js, handling up to 2,000 concurrent users.",
      achievements: [
        "Improved Lighthouse performance score 39 → 72 (84% boost)",
        "Reduced LCP time 11.0s → 3.9s (65% improvement)",
        "Optimized CLS score 0.31 → 0.02"
      ],
      tech: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Tanstack Query",
        "Zustand"
      ],
      image: "/datamanim_main.png",
      demoUrl:
        "https://datamanim-migration-copy-bscy62902-minhees-projects-3eff1d38.vercel.app/",
      githubUrl: "https://github.com/mini-chip/datamanim-migration-copy"
    },
    {
      title: "INDEX",
      description:
        "Emotion-based reading record service where users can record and share emotions while reading books.",
      achievements: [
        "User emotion data visualization implementation",
        "Responsive web design application",
        "Real-time data synchronization development"
      ],
      tech: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Tanstack Query",
        "Zustand"
      ],
      image: "/INDEX_main.jpg",
      demoUrl: "https://index-pi-nine-40.vercel.app/",
      githubUrl: "https://github.com/SWYP-index/swyp-frontend"
    },
    {
      title: "WED",
      description: "Weather information web application built with Next.js.",
      achievements: [
        "OpenWeather API integration",
        "Responsive design implementation",
        "Real-time weather information display"
      ],
      tech: ["Next.js", "Tailwind CSS", "Typescript", "Axios", "Vercel"],
      image: "/wed_main.png",
      demoUrl:
        "https://wed-arsy-7edxc34ub-minhees-projects-3eff1d38.vercel.app/",
      githubUrl: "https://github.com/mini-chip/wed"
    },
    {
      title: "QuickQuestion(QQ)",
      description:
        "Anonymous Q&A service with various themes according to weather conditions.",
      achievements: [
        "Weather-based automatic theme switching system",
        "Anonymous Q&A functionality implementation",
        "Component documentation with Storybook"
      ],
      tech: [
        "Next.js",
        "SASS",
        "OpenWeather API",
        "TypeScript",
        "Storybook",
        "REST API",
        "TanstackQuery",
        "React-Hook-Form"
      ],
      image: "/QQ_main.png",
      demoUrl: "https://quick-question-weather.vercel.app/",
      githubUrl: "https://github.com/Important-is-Great-Youths/QuickQuestion"
    },
    {
      title: "Mogazoa",
      description:
        "Comprehensive review platform for products across various categories.",
      achievements: [
        "10-category product review system",
        "User review rating and ranking features",
        "Responsive UI/UX design implementation"
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Style-Components",
        "React-Hook-Form",
        "REST API"
      ],
      image: "/mogazoa_main.png",
      demoUrl: "https://mogazoa.vercel.app/",
      githubUrl: "https://github.com/5-1-Mogazoa/Mogazoa"
    }
  ]
};

interface ProjectsProps {
  language: "ko" | "en";
}

export function Projects({ language }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            ✦ {language === "ko" ? "프로젝트" : "Projects"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects[language].map((project, index) => (
              <Card
                key={project.title}
                className="float bg-white backdrop-blur-sm border-border hover:border-teal-400 transition-all duration-300 group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex flex-col h-full">
                  <CardTitle className="text-lg mb-2 text-gray-800">
                    {project.title}
                  </CardTitle>

                  <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* 주요 성과 */}
                  {project.achievements && (
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <strong>{language === "ko" ? "주요 성과" : "Key Achievements"}</strong>
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                            <span className="text-teal-500 mt-0.5">•</span>
                            <strong>{achievement}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 기술 스택 */}
                  <div className="mb-3 mt-auto">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-teal-100 text-teal-700 border border-teal-200 text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-teal-400 text-teal-600 hover:bg-teal-500 hover:text-white bg-transparent flex-1 text-xs"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-1 h-3 w-3" />
                      {language === "ko" ? "코드" : "Code"}
                    </Button>
                    <Button
                      size="sm"
                      className="bg-teal-500 hover:bg-teal-600 flex-1 text-xs"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      {language === "ko" ? "데모" : "Demo"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
