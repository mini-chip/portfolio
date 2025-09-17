"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            저에 대해 <span className="text-primary">알아보세요</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                안녕하세요! 저는 사용자 중심의 웹 경험을 만드는 것에 열정을 가진 프론트엔드 개발자입니다. 깔끔한 코드와
                아름다운 디자인을 통해 사용자가 직관적으로 사용할 수 있는 인터페이스를 구현합니다.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                React, TypeScript, Next.js를 주로 사용하며, 최신 웹 기술 트렌드를 지속적으로 학습하고 프로젝트에
                적용하는 것을 좋아합니다.
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">년 경험</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">완료 프로젝트</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">만족도</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">깔끔한 코드</h3>
                  </div>
                  <p className="text-muted-foreground">유지보수가 쉽고 확장 가능한 코드를 작성합니다</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Palette className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">UI/UX 디자인</h3>
                  </div>
                  <p className="text-muted-foreground">사용자 경험을 고려한 직관적인 인터페이스를 설계합니다</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">성능 최적화</h3>
                  </div>
                  <p className="text-muted-foreground">빠르고 효율적인 웹 애플리케이션을 구현합니다</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
