"use client";

const ProjectSkeleton = () => (
  <div
    className="
      w-[85vw] max-w-sm overflow-hidden
      rounded-xl
      border border-[color:var(--border)]
      bg-[color:var(--card)]
      shadow-sm
    "
  >
    {/* Image / Screenshot area */}
    <div
      className="
        relative aspect-[16/10]
        w-full
        animate-pulse
        bg-neutral-200
        dark:bg-neutral-800
      "
    >
      {/* Bottom gradient-like area */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex items-center justify-between gap-3">
          {/* Title */}
          <div className="h-4 w-1/3 rounded bg-neutral-300 dark:bg-neutral-700" />

          {/* Buttons */}
          <div className="flex gap-2">
            <div className="h-7 w-16 rounded-md bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-7 w-14 rounded-md bg-neutral-300 dark:bg-neutral-700" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectSkeleton;
