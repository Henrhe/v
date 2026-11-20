import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomeSkeleton } from "@/components/skeletons/HomeSkeleton";

export default function Loading() {
  return (
    <main className="relative">
      <Navbar />
      <HomeSkeleton />
      <Footer />
    </main>
  );
}