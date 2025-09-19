import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = {
  ko: [
    {
      title: "우주 탐험 앱",
      description: "React와 Three.js를 사용하여 만든 인터랙티브한 3D 우주 탐험 웹 애플리케이션입니다.",
      tech: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
      image: "/space-exploration-app-with-3d-planets-and-stars.jpg",
    },
    {
      title: "포트폴리오 웹사이트",
      description: "Next.js와 Framer Motion을 활용한 반응형 포트폴리오 웹사이트입니다.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      image: "/modern-portfolio-website-with-cosmic-theme.jpg",
    },
    {
      title: "날씨 대시보드",
      description: "실시간 날씨 정보를 제공하는 대시보드 애플리케이션입니다.",
      tech: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
      image: "/weather-dashboard-with-charts-and-cosmic-design.jpg",
    },
  ],
  en: [
    {
      title: "Space Explorer App",
      description: "Interactive 3D space exploration web application built with React and Three.js.",
      tech: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
      image: "/space-exploration-app-with-3d-planets-and-stars.jpg",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website using Next.js and Framer Motion.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      image: "/modern-portfolio-website-with-cosmic-theme.jpg",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information dashboard application.",
      tech: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
      image: "/weather-dashboard-with-charts-and-cosmic-design.jpg",
    },
  ],
}

interface ProjectsProps {
  language: "ko" | "en"
}

export function Projects({ language }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            ✦ {language === "ko" ? "프로젝트" : "Projects"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects[language].map((project, index) => (
              <Card
                key={project.title}
                className="float bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 text-primary">{project.title}</CardTitle>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {language === "ko" ? "코드" : "Code"}
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
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
  )
}
