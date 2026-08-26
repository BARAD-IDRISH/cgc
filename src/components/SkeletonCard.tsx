"use client";

export default function SkeletonCard() {
  return (
    <div className="glass-card rounded-xl p-6 border border-gold-accent/10 space-y-4 animate-pulse relative overflow-hidden">
      {/* Shimmer sweep effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      {/* Icon skeleton */}
      <div className="w-10 h-10 rounded-lg bg-gold-accent/10 border border-gold-accent/15" />

      {/* Title skeleton */}
      <div className="h-5 bg-white/10 rounded-md w-2/3" />

      {/* Text lines */}
      <div className="space-y-2 pt-2">
        <div className="h-3 bg-white/5 rounded w-full" />
        <div className="h-3 bg-white/5 rounded w-4/5" />
        <div className="h-3 bg-white/5 rounded w-3/4" />
      </div>

      {/* Footer link skeleton */}
      <div className="pt-4 border-t border-white/5 flex justify-between items-center">
        <div className="h-3 bg-gold-accent/20 rounded w-1/3" />
        <div className="w-4 h-4 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
