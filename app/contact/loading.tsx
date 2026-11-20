import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSkeleton } from "@/components/skeletons/ContactSkeleton";

export default function Loading() {
  return (
    <main>
      <Navbar />
      <ContactSkeleton />
      <Footer />
    </main>
  );
}