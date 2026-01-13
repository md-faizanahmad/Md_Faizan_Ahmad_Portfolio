"use client";

const SkeletonCard = () => {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-zinc-900/50 border border-white/5 animate-pulse p-4">
      <div className="h-full w-full rounded-[1.5rem] bg-zinc-800/40" />
      <div className="absolute bottom-6 left-6 right-6 space-y-3">
        <div className="h-6 w-3/4 rounded bg-zinc-800/60" />
        <div className="h-4 w-1/2 rounded bg-zinc-800/40" />
      </div>
    </div>
  );
};

export default SkeletonCard;
