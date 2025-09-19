import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            ✦ About
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="float bg-white backdrop-blur-sm border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                  <Star className="w-6 h-6" />
                  About Me
                </CardTitle>
                <Separator className="bg-primary/20" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Hello! I'm a passionate web developer. I value user experience and enjoy writing clean, efficient code.
                </p>
              </CardContent>
            </Card>

            <Card
              className="float bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                  <Rocket className="w-6 h-6" />
                  Development Philosophy
                </CardTitle>
                <Separator className="bg-primary/20" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I approach development with the motto "infinite possibilities like the universe."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
