import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectsListSkeleton } from "@/components/skeletons/ProjectsListSkeleton";

export default function Loading() {
  return (
    <main>
      <Navbar />
      <ProjectsListSkeleton />
      <Footer />
    </main>
  );
}