import Banner from "@/components/banner/Banner";

// import Circle from "@/components/ui/Circle";
import Loading from "@/components/ui/Loading";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
// import { getAllSkills } from "@/services/skills";
import { Suspense } from "react";

export default function HomePage() {
  // const { data: skills } = await getAllSkills();
  return (
    <div className="bg-gray-950 text-gray-400 ">
      <Banner />

      {/* <Circle
        skills={skills}
        developerImage="https://i.ibb.co.com/TBtXNzC/my-Image-removebg-preview-1.png"
      /> */}
      <Suspense fallback={<Loading />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
    </div>
  );
}
