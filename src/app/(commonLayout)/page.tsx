import Banner from "@/components/banner/Banner";
import Loading from "@/components/ui/Loading";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="bg-gray-950 text-gray-400">
      <Banner />
      <Suspense fallback={<Loading />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
    </div>
  );
}
