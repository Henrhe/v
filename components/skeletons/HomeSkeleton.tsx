import { HeroSkeleton } from "./sections/HeroSkeleton";
import { TrustBarSkeleton } from "./sections/TrustBarSkeleton";
import { ServicesSkeleton } from "./sections/ServicesSkeleton";
import { FeaturedProjectsSkeleton } from "./sections/FeaturedProjectsSkeleton";
import { WhyChooseUsSkeleton } from "./sections/WhyChooseUsSkeleton";
import { StatsSkeleton } from "./sections/StatsSkeleton";
import { TestimonialsSkeleton } from "./sections/TestimonialsSkeleton";
import { CtaBandSkeleton } from "./sections/CtaBandSkeleton";

export function HomeSkeleton() {
  return (
    <>
      <HeroSkeleton />
      <TrustBarSkeleton />
      <ServicesSkeleton />
      <FeaturedProjectsSkeleton />
      <WhyChooseUsSkeleton />
      <StatsSkeleton />
      <TestimonialsSkeleton />
      <CtaBandSkeleton />
    </>
  );
}