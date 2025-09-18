export function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom delay-200 hover:scale-105 hover:shadow-primary/10 border border-border hover:border-primary/30">
            <div className="text-3xl mb-4 transition-all duration-300">💻</div>
            <h4 className="font-bold text-card-foreground mb-3 text-xl hover:text-primary transition-colors duration-300">
              Frontend
            </h4>
            <p className="text-muted-foreground hover:text-card-foreground transition-colors duration-300">
              React, Next.js, TypeScript
            </p>
          </div>
          <div className="p-8 bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom delay-400 hover:scale-105 hover:shadow-primary/10 border border-border hover:border-primary/30">
            <div className="text-3xl mb-4 transition-all duration-300">🎨</div>
            <h4 className="font-bold text-card-foreground mb-3 text-xl hover:text-primary transition-colors duration-300">
              Design
            </h4>
            <p className="text-muted-foreground hover:text-card-foreground transition-colors duration-300">
              UI/UX, Figma, Tailwind CSS
            </p>
          </div>
          <div className="p-8 bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom delay-600 hover:scale-105 hover:shadow-primary/10 border border-border hover:border-primary/30">
            <div className="text-3xl mb-4 transition-all duration-300">⚡</div>
            <h4 className="font-bold text-card-foreground mb-3 text-xl hover:text-primary transition-colors duration-300">
              Backend
            </h4>
            <p className="text-muted-foreground hover:text-card-foreground transition-colors duration-300">
              Node.js, Python, Database
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
