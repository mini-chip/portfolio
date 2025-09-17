"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

const skills = [
  { name: "React", level: 90, category: "Frontend", description: "컴포넌트 기반 UI 라이브러리로 2년 이상 사용" },
  { name: "TypeScript", level: 85, category: "Language", description: "타입 안정성을 위한 JavaScript 상위집합" },
  { name: "Next.js", level: 80, category: "Framework", description: "React 기반 풀스택 프레임워크" },
  { name: "Tailwind CSS", level: 95, category: "Styling", description: "유틸리티 우선 CSS 프레임워크" },
  { name: "JavaScript", level: 90, category: "Language", description: "웹 개발의 핵심 프로그래밍 언어" },
  { name: "HTML/CSS", level: 95, category: "Frontend", description: "웹 페이지 구조와 스타일링" },
  { name: "Node.js", level: 70, category: "Backend", description: "JavaScript 런타임 환경" },
  { name: "Git", level: 85, category: "Tools", description: "버전 관리 시스템" },
]

const categories = ["Frontend", "Language", "Framework", "Styling", "Backend", "Tools"]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars
          setTimeout(() => {
            const animated: Record<string, number> = {}
            skills.forEach((skill) => {
              animated[skill.name] = skill.level
            })
            setAnimatedSkills(animated)
          }, 500)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category)
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            기술 <span className="text-primary">스택</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const categorySkills = getSkillsByCategory(category)
              if (categorySkills.length === 0) return null

              return (
                <Card key={category} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {categorySkills.map((skill) => (
                      <HoverCard key={skill.name}>
                        <HoverCardTrigger asChild>
                          <div className="cursor-pointer">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium hover:text-primary transition-colors">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">{animatedSkills[skill.name] || 0}%</span>
                            </div>
                            <Progress value={animatedSkills[skill.name] || 0} className="h-2" />
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold">{skill.name}</h4>
                            <p className="text-sm text-muted-foreground">{skill.description}</p>
                            <div className="flex items-center pt-2">
                              <span className="text-xs text-muted-foreground">숙련도: </span>
                              <span className="text-xs font-medium ml-1">{skill.level}%</span>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
