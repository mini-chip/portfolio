"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-커머스 플랫폼",
    description: "React와 Next.js로 구축한 현대적인 온라인 쇼핑몰입니다. 반응형 디자인과 결제 시스템을 포함합니다.",
    image: "/ecommerce-website-mockup.png",
    tags: ["React", "Next.js", "TypeScript", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "할일 관리 앱",
    description: "드래그 앤 드롭 기능과 실시간 동기화를 지원하는 생산성 도구입니다.",
    image: "/todo-app-interface.png",
    tags: ["React", "Firebase", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "날씨 대시보드",
    description: "실시간 날씨 정보와 예보를 제공하는 인터랙티브 대시보드입니다.",
    image: "/weather-dashboard-ui.png",
    tags: ["Vue.js", "Chart.js", "OpenWeather API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "포트폴리오 웹사이트",
    description: "개발자를 위한 반응형 포트폴리오 템플릿입니다. 다크모드와 애니메이션을 지원합니다.",
    image: "/portfolio-website-design.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "블로그 플랫폼",
    description: "MDX를 지원하는 정적 블로그 생성기입니다. SEO 최적화와 빠른 로딩 속도를 제공합니다.",
    image: "/blog-platform-interface.jpg",
    tags: ["Gatsby", "GraphQL", "MDX"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "채팅 애플리케이션",
    description: "실시간 메시징과 파일 공유 기능을 제공하는 웹 채팅 앱입니다.",
    image: "/chat-application-ui.jpg",
    tags: ["React", "Socket.io", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            주요 <span className="text-primary">프로젝트</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </AspectRatio>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
