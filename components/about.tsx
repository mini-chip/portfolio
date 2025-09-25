import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  language: "ko" | "en";
}

export function About({ language }: AboutProps) {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            ✦ {language === "ko" ? "소개" : "About"}
          </h2>

          <Card className="float bg-white backdrop-blur-sm border-border hover:border-teal-400 transition-all duration-300">
            <CardContent>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                {language === "ko" ? (
                  <>
                    <p className="text-lg">
                      안녕하세요! 저는 프론트엔드 개발자로서{" "}
                      <strong className="text-gray-800">
                        사용자 경험에 집중해 사용자들이 편리하고 기분 좋은 경험을
                        느낄 수 있도록 노력
                      </strong>
                      하고 있습니다.
                    </p>

                    <p className="text-lg">
                      <span className="text-teal-600 font-semibold text-xl">
                        '어떤 문제를 해결할 수 있을까?'
                      </span>
                      {" "}라는 질문을 항상 마음에 새기며, 창의적이고 혁신적인 솔루션을
                      찾기 위해 끊임없이 도전하고 있습니다.
                    </p>

                    <p className="text-lg text-gray-600 italic">
                      앞으로도 수많은 도전을 통해 한 분야에만 국한되지 않고 여러
                      기술 스택을 습득해 끊임없이 성장하는 개발자가 되겠습니다.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg">
                      Hello! I am a frontend developer who{" "}
                      <strong className="text-gray-800">
                        focuses on user experience, striving to provide users with
                        convenient and pleasant experiences
                      </strong>
                      .
                    </p>

                    <p className="text-lg">
                      <span className="text-teal-600 font-semibold text-xl">
                        'What problems can I solve?'
                      </span>
                      {" "}I always keep this question in mind and constantly challenge
                      myself to find creative and innovative solutions.
                    </p>

                    <p className="text-lg text-gray-600 italic">
                      I will continue to grow as a developer who learns various
                      technology stacks through countless challenges, not limiting
                      myself to just one field.
                    </p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
