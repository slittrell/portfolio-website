import { ExperienceSection } from "../../components/resume/ExperienceSection";
import { EducationSection } from "../../components/resume/EducationSection";
import { ResumeHeader } from "../../components/resume/ResumeHeader";
import { TechSection } from "../../components/resume/TechSection";

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-16">
      <ResumeHeader />
      <ExperienceSection />
      <TechSection />
      <EducationSection />
    </div>
  );
}
