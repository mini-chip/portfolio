"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { ExternalLink, Github, Star, Info, X } from "lucide-react";
import { useState } from "react";

const projects = {
  ko: [
    {
      title: "Helpie",
      description:
        "전 세계 해외 생활자들이 서로의 경험과 정보를 나누며, 더 쉽고 따뜻하게 정착할 수 있도록 돕는 글로벌 커뮤니티 플랫폼입니다.",
      achievements: [
        "아토믹 디자인 패턴 기반 코드 구조화",
        "모바일 반응형 CSS 구현",
        "로그인/비로그인 상태별 조건부 뷰"
      ],
      tech: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Tanstack Query",
        "Zustand",
        "WebSocket"
      ],
      image: "/helpie.png",
      demoUrl: "https://helpie-main.vercel.app/",
      githubUrl: "https://github.com/Helpie-Team/helpie-frontend"
    },
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
      demoUrl: "https://datastudydemo.vercel.app/",
      githubUrl: "https://github.com/mini-chip/datamanim-migration-copy"
    },
    {
      title: "INDEX",
      description:
        "사용자가 책을 읽으며 느낀 감정을 중심으로 기록하고 공유할 수 있는 감정 기반 독서 기록 서비스입니다.",
      achievements: [
        "사용자 감정 데이터 시각화 구현",
        "무한 스크롤 및 QueryClient 무효화",
        "일반/인증 API 인스턴스 분리"
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
      githubUrl: "https://github.com/mini-chip/QuickQuestion"
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
      githubUrl: "https://github.com/mini-chip/Mogazoa"
    }
  ],
  en: [
    {
      title: "Helpie",
      description:
        "A global community platform helping overseas residents share experiences and information for easier, warmer settlement worldwide.",
      achievements: [
        "Code structuring based on atomic design pattern",
        "Mobile responsive CSS implementation",
        "Conditional views by login/logout status"
      ],
      tech: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Tanstack Query",
        "Zustand",
        "WebSocket"
      ],
      image: "/helpie.png",
      demoUrl: "https://helpie-main.vercel.app/",
      githubUrl: "https://github.com/Helpie-Team/helpie-frontend"
    },
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
      demoUrl: "https://datastudydemo.vercel.app/",
      githubUrl: "https://github.com/mini-chip/datamanim-migration-copy"
    },
    {
      title: "INDEX",
      description:
        "Emotion-based reading record service where users can record and share emotions while reading books.",
      achievements: [
        "User emotion data visualization implementation",
        "Infinite scroll and QueryClient invalidation",
        "Separation of general/authenticated API instances"
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
      githubUrl: "https://github.com/mini-chip/QuickQuestion"
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
      githubUrl: "https://github.com/mini-chip/Mogazoa"
    }
  ]
};

interface ProjectsProps {
  language: "ko" | "en";
}

export function Projects({ language }: ProjectsProps) {
  const [isTestAccountModalOpen, setIsTestAccountModalOpen] = useState(false);

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

                  {project.achievements && (
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <strong>
                          {language === "ko" ? "주요 성과" : "Key Achievements"}
                        </strong>
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-muted-foreground flex items-start gap-1"
                          >
                            <span className="text-teal-500 mt-0.5">•</span>
                            <strong>{achievement}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

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

                  <div className="flex gap-2 flex-col">
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

                    {project.title === "INDEX" && (
                      <Dialog
                        open={isTestAccountModalOpen}
                        onOpenChange={setIsTestAccountModalOpen}
                      >
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full border-blue-400 text-blue-600 hover:bg-blue-500 hover:text-white bg-transparent text-xs"
                          >
                            <Info className="mr-1 h-3 w-3" />
                            {language === "ko"
                              ? "테스트 계정 정보"
                              : "Test Account Info"}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white">
                          <button
                            onClick={() => setIsTestAccountModalOpen(false)}
                            className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full z-50"
                          >
                            <X className="h-4 w-4 text-black" />
                          </button>
                          <DialogHeader>
                            <DialogTitle className="text-gray-900">
                              {language === "ko"
                                ? "INDEX 테스트 계정"
                                : "INDEX Test Account"}
                            </DialogTitle>
                            <DialogDescription className="text-gray-600">
                              {language === "ko"
                                ? "⚠️ 현재 서버가 종료된 상태입니다. 깃허브 동영상으로 프로젝트를 확인해주세요."
                                : "⚠️ Server is currently down. Please check the project via GitHub video demo."}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                              <p className="text-sm text-yellow-800">
                                {language === "ko"
                                  ? "🔗 깃허브 레포지토리에서 프로젝트 시연 영상을 확인할 수 있습니다."
                                  : "🔗 You can view the project demo video in the GitHub repository."}
                              </p>
                            </div>
                            <div className="space-y-2 opacity-50">
                              <h4 className="text-sm font-medium text-gray-700">
                                {language === "ko"
                                  ? "이전 테스트 계정 정보 (서버 종료):"
                                  : "Previous Test Account Info (Server Down):"}
                              </h4>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-700 min-w-[80px]">
                                  {language === "ko" ? "이메일:" : "Email:"}
                                </span>
                                <code className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-800 flex-1">
                                  kimmin5209@naver.com
                                </code>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-700 min-w-[80px]">
                                  {language === "ko"
                                    ? "비밀번호:"
                                    : "Password:"}
                                </span>
                                <code className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-800 flex-1">
                                  Test@0708
                                </code>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
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
