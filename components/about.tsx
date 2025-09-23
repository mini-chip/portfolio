import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            ✦ 소개
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="float bg-white backdrop-blur-sm border-border hover:border-teal-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gray-800">
                  <Star className="w-6 h-6" />
                  저에 대해
                </CardTitle>
                <Separator className="bg-teal-200" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  안녕하세요! 저는 웹 개발에 열정을 가진 개발자입니다. 사용자
                  경험을 중시하며, 깔끔하고 효율적인 코드를 작성하는 것을
                  좋아합니다. 새로운 기술을 배우고 적용하는 것에 즐거움을
                  느끼며, 팀과 협업하여 더 나은 결과물을 만들어내는 것을 목표로
                  합니다.
                </p>
              </CardContent>
            </Card>

            <Card
              className="float bg-white backdrop-blur-sm border-border hover:border-teal-400 transition-all duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gray-800">
                  <Rocket className="w-6 h-6" />
                  개발 철학
                </CardTitle>
                <Separator className="bg-teal-200" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "우주처럼 무한한 가능성"이라는 모토로 개발에 임합니다. 사용자
                  중심의 디자인과 성능 최적화를 통해 더 나은 웹 경험을
                  제공하고자 합니다. 지속적인 학습과 성장을 통해 변화하는 기술
                  트렌드에 발맞춰 나가고 있습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
