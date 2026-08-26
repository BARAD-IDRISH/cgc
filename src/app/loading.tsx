import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="relative bg-navy-deep min-h-screen pb-20 pt-24">
      {/* Background Orbs */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-accent/5 filter blur-[120px] pointer-events-none" />

      {/* Banner Skeleton */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4 mb-16 animate-pulse">
        <div className="h-4 bg-gold-accent/20 rounded-full w-32 mx-auto" />
        <div className="h-10 bg-white/10 rounded-lg w-3/4 mx-auto" />
        <div className="h-4 bg-white/5 rounded-md w-1/2 mx-auto" />
      </div>

      {/* Shimmer Skeleton Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}
