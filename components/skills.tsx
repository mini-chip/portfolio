import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "프론트엔드",
    icon: Code,
    skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "백엔드",
    icon: Database,
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    title: "도구 & 기타",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Photoshop"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">✦ 스킬</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.title}
                  className="float bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 flex justify-center">
                      <IconComponent className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
