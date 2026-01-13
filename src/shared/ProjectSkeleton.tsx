"use client";

const ProjectSkeleton = () => (
  <div className="w-80 h-[400px] rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] overflow-hidden">
    <div className="relative h-56 w-full bg-[color:var(--border)]/40 animate-pulse" />
    <div className="p-5 space-y-4">
      <div className="h-6 w-3/4 bg-[color:var(--border)]/40 animate-pulse rounded" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-[color:var(--border)]/40 animate-pulse rounded" />
        <div className="h-4 w-5/6 bg-[color:var(--border)]/40 animate-pulse rounded" />
      </div>
    </div>
  </div>
);

export default ProjectSkeleton;
