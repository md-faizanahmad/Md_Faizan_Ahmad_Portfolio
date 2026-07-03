"use client";

const ProjectSkeleton = () => (
  <div className="w-100 max-w-sm border border-neutral-200 bg-white overflow-hidden transition-colors duration-300 dark:border-neutral-800 dark:bg-black">
    {/* Mimics the exact image area height */}
    <div className="relative h-66 w-100 bg-neutral-100 dark:bg-neutral-900 animate-pulse flex flex-col justify-end p-4">
      {/* Bottom Area Layout mirroring Title and Action Buttons */}
      <div className="flex items-center justify-between w-full">
        {/* Title Placeholder */}
        <div className="h-4 w-1/3 bg-neutral-200 dark:bg-neutral-800 rounded-sm" />

        {/* Action Button Placeholders */}
        <div className="flex gap-2">
          <div className="h-7 w-16 bg-neutral-200 dark:bg-neutral-800 rounded-sm" />
          <div className="h-7 w-14 bg-neutral-200 dark:bg-neutral-800 rounded-sm" />
        </div>
      </div>
    </div>
  </div>
);

export default ProjectSkeleton;
