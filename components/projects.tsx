import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = {
  ko: [
    {
      title: "Datamanim",
      description:
        "최대 2000명 접속자를 가진 ADP자격증 시험 준비 웹 서비스로서, 처음으로 외주를 받아 jupyter notebook -> Next.js로 마이그레이션한 프로젝트입니다.",
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
        "INDEX는 사용자가 책을 읽으며 느낀 감정을 중심으로 기록하고 공유할 수 있는 감정 기반 독서 기록 서비스입니다. 단순히 책을 저장하는 데 그치지 않고, 읽는 과정에서의 감정과 생각을 함께 남길 수 있도록 설계되었습니다.",
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
      description: "Next.js를 이용한 날씨 예보를 이용해 ",
      tech: ["Next.js", "Tailwind CSS", "Typescript", "Axios", "Vercel"],
      image: "/wed_main.png",
      demoUrl:
        "https://wed-arsy-7edxc34ub-minhees-projects-3eff1d38.vercel.app/",
      githubUrl: "https://github.com/mini-chip/wed"
    },
    {
      title: "QuickQuestion(QQ)",
      description: "날씨에 따라 다양한 테마를 가진 익명 문답 서비스입니다.",
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
        "음악, 식당, 영화, 강의, 여행지, 전자기기, 호텔, 와인, 옷, 앱 등 다양한 분야의 상품을 리뷰하는 플랫폼입니다.",
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
        "ADP certification exam preparation web service with up to 2,000 concurrent users. First freelance project migrating from Jupyter Notebook to Next.js.",
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
        "INDEX is an emotion-based reading record service where users can record and share the emotions they feel while reading books. It's designed to allow users to record their emotions and thoughts during the reading process, not just store books.",
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
      description: "Weather forecast application using Next.js",
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
        "A platform for reviewing products across various categories including music, restaurants, movies, lectures, travel destinations, electronics, hotels, wine, clothing, and apps.",
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
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 text-gray-800">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-teal-100 text-teal-700 border border-teal-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-teal-400 text-teal-600 hover:bg-teal-500 hover:text-white bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {language === "ko" ? "코드" : "Code"}
                    </Button>
                    <Button
                      size="sm"
                      className="bg-teal-500 hover:bg-teal-600"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
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
