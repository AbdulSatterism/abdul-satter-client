import AboutMe from "@/components/about/AboutMe";
import Banner from "@/components/banner/Banner";
import LoadingBanner from "@/components/Loading/LoadingBanner";
import LoadingProject from "@/components/Loading/LoadingProject";
import LoadingSkill from "@/components/Loading/LoadingSkill";
import Contact from "@/components/ui/Contact";
import EducationQualification from "@/components/ui/EducationQualification";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import { developerInfo } from "@/services/developerInfo";
import { getAllSkills } from "@/services/skills";
import { Suspense } from "react";

export default async function HomePage() {
  const { data: devInfo } = await developerInfo();
  const { data: skills } = await getAllSkills();

  return (
    <div className="bg-[#01051b] text-gray-400 ">
      <Suspense fallback={<LoadingBanner />}>
        <Banner devInfo={devInfo} />
      </Suspense>
      <Suspense fallback={<LoadingSkill />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingProject />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<LoadingBanner />}>
        <AboutMe skills={skills} />
      </Suspense>
      <EducationQualification />
      <Contact />
    </div>
  );
}
