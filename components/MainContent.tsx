import ProfileSection from "./ProfileSection";
import ProjectsSection from "./ProjectsSection";

function MainContent() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <ProfileSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

export default MainContent;
