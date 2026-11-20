import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesListSkeleton } from "@/components/skeletons/ServicesListSkeleton";

export default function Loading() {
  return (
    <main>
      <Navbar />
      <ServicesListSkeleton />
      <Footer />
    </main>
  );
}