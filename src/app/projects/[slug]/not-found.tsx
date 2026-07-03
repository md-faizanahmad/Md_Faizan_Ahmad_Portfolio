import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col items-center justify-center p-4 text-center bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="flex w-full max-w-md flex-col items-center justify-center gap-6 sm:gap-8 px-4">
        {/* Minimalist Monochrome SVG Icon */}
        <div className="relative flex h-24 w-24 items-center justify-center md:h-32 md:w-32">
          <svg
            className="h-full w-full stroke-current opacity-80"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </div>

        {/* Text Content with Fluid Sizing */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl uppercase">
            Project Not Found
          </h1>
          <p className="max-w-[30ch] text-sm text-neutral-500 dark:text-neutral-400 sm:text-base md:text-lg mx-auto">
            The project you&apos;re looking for does not exist or has been
            moved.
          </p>
        </div>

        {/* Minimal Stark Button with Adaptive Hover/Active States */}
        <Link
          href="/projects"
          className="group relative inline-flex items-center justify-center border border-black dark:border-white px-6 py-3 text-xs sm:text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black active:scale-95 w-full sm:w-auto"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
