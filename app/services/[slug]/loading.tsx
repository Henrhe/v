import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesDetailSkeleton } from "@/components/skeletons/ServicesDetailSkeleton";

export default function Loading() {
  return (
    <main>
      <Navbar />
      <ServicesDetailSkeleton />
      <Footer />
    </main>
  );
}