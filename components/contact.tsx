import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">✦ 연락처</h2>

          <Card className="float bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4 text-primary">함께 우주를 탐험해요!</h3>
                <p className="text-xl text-muted-foreground text-pretty">
                  새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락주세요.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button size="lg" className="glow bg-primary hover:bg-primary/90 h-16">
                  <Mail className="mr-2 h-5 w-5" />
                  이메일
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-16 bg-transparent"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-16 bg-transparent"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-16 bg-transparent"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  카카오톡
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-muted-foreground">
            <p>© 2024 Portfolio. Made with ❤️ and ✨</p>
          </div>
        </div>
      </div>
    </section>
  )
}
