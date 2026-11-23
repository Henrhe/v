import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectDetailSkeleton } from "@/components/skeletons/ProjectDetailSkeleton";

export default function Loading() {
  return (
    <main>
      <Navbar />
      <ProjectDetailSkeleton />
      <Footer />
    </main>
  );
}