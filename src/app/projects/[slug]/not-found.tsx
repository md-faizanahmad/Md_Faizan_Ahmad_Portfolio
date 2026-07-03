import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col justify-between bg-white p-4 font-mono text-xs text-black transition-colors duration-300 dark:bg-black dark:text-white sm:p-6 md:p-8">
      {/* Top Meta Status */}
      <div className="flex flex-col gap-1 border-b border-neutral-200 pb-4 dark:border-neutral-800 sm:flex-row sm:items-center sm:justify-between">
        <div>[process] runtime_exception_handler</div>
        <div className="text-neutral-400 dark:text-neutral-500">
          STATUS_CODE: 404_NOT_FOUND
        </div>
      </div>

      {/* Main Raw Code Block */}
      <div className="my-auto max-w-3xl py-8 sm:py-12">
        <div className="space-y-4">
          <div>
            <span className="text-neutral-400 dark:text-neutral-500">
              &gt;{" "}
            </span>
            <span className="font-bold">
              Error: Project matching the requested parameters could not be
              resolved.
            </span>
          </div>

          <div className="overflow-x-auto bg-neutral-50 p-4 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-900">
            <p className="text-neutral-400 dark:text-neutral-500"></p>
            <pre className="mt-2 whitespace-pre text-[11px] sm:text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
              {`try {
  const project = await database.select('*').from('projects').where({ slug });
  if (!project) throw new Error("ERR_NULL_POINTER");
} catch (err) {
  // Redirecting client layer back to safe application root...
}`}
            </pre>
          </div>

          <p className="max-w-xl text-neutral-500 leading-relaxed dark:text-neutral-400">
            The database returned an empty array for this slug. The build system
            is functional, but the requested asset path does not point to a
            valid project file.
          </p>
        </div>
      </div>

      {/* Action / Return Line */}
      <div className="border-t border-neutral-200 pt-4 dark:border-neutral-800">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 border border-black px-4 py-2 text-xs font-medium uppercase tracking-wider bg-black text-white hover:bg-transparent hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-150 active:scale-95"
        >
          $ cd ../projects
        </Link>
      </div>
    </div>
  );
}
