import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Projects</h3>
          <p className="text-gray-600">최근 작업한 프로젝트들을 소개합니다</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="웹 애플리케이션"
            description="React와 Next.js로 구축한 현대적인 웹 앱"
            videoSrc="/placeholder.mp4?duration=5&theme=web-app"
          />
          <ProjectCard
            title="모바일 UI/UX"
            description="사용자 친화적인 모바일 인터페이스 디자인"
            videoSrc="/placeholder.mp4?duration=5&theme=mobile-ui"
          />
          <ProjectCard
            title="데이터 시각화"
            description="인터랙티브한 차트와 대시보드"
            videoSrc="/placeholder.mp4?duration=5&theme=data-viz"
          />
        </div>
      </div>
    </section>
  );
}
