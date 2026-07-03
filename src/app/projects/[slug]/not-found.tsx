import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-white p-4 font-mono text-black transition-colors duration-300 dark:bg-black dark:text-white sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl border border-black/10 dark:border-white/10 bg-neutral-50/50 dark:bg-neutral-900/30 backdrop-blur-sm p-4 sm:p-6 md:p-8">
        {/* IDE/Terminal Header */}
        <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-6 text-xs text-neutral-400 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-black dark:bg-white animate-pulse" />
            <span>Stack_Trace.log</span>
          </div>
          <span className="hidden sm:inline">ERR_PROJECT_NOT_FOUND</span>
        </div>

        {/* Developer Concept Body */}
        <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
          <p className="text-neutral-400">
            <span className="text-black dark:text-white font-bold">404</span>{" "}
            Exception thrown in{" "}
            <code className="bg-neutral-100 dark:bg-neutral-900 px-1.5 py-0.5 rounded">
              app/projects/[slug]/page.tsx
            </code>
          </p>

          <div className="border-l-2 border-black dark:border-white pl-4 my-6 space-y-1 bg-neutral-50 dark:bg-neutral-900/50 py-2 pr-2 overflow-x-auto">
            <p className="text-neutral-400 select-none">
              <span className="inline-block w-4">1</span>{" "}
              <span className="text-neutral-500">const</span> project ={" "}
              <span className="text-neutral-500">await</span> getProject(slug);
            </p>
            <p className="font-bold text-black dark:text-white select-none">
              <span className="inline-block w-4 text-neutral-400 font-normal">
                2
              </span>{" "}
              <span className="text-neutral-500">if</span> (!project) &#123;
            </p>
            <p className="bg-black/5 dark:bg-white/10 font-bold text-black dark:text-white">
              <span className="inline-block w-4 text-neutral-400 font-normal select-none">
                3
              </span>{" "}
              <span className="text-neutral-500">throw</span>{" "}
              <span className="text-neutral-500">new</span>{" "}
              <span className="underline decoration-wavy decoration-neutral-400">
                NotFoundError
              </span>
              (&quot;Project missing&quot;);
            </p>
            <p className="text-neutral-400 select-none">
              <span className="inline-block w-4">4</span> &#125;
            </p>
          </div>

          <p className="text-neutral-500 max-w-prose">
            The compilation structural routing failed because the pointer
            reference returned{" "}
            <code className="text-black dark:text-white font-bold">null</code>.
            The layout architecture remains intact.
          </p>
        </div>

        {/* Terminal Action Button */}
        <div className="mt-8 border-t border-black/10 dark:border-white/10 pt-6">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white active:scale-95 w-full sm:w-auto justify-center"
          >
            <span>cd ../projects</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
