import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSkeleton } from "@/components/skeletons/AboutSkeleton";

export default function Loading() {
  return (
    <main>
      <Navbar />
      <AboutSkeleton />
      <Footer />
    </main>
  );
}