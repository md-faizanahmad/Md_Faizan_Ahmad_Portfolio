import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-white p-4 font-mono text-xs text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="w-full max-w-xl space-y-4">
        <div>
          <span className="text-neutral-400 dark:text-neutral-500">&gt; </span>
          <span className="font-bold">Error: 404_NOT_FOUND</span>
        </div>

        <div className="bg-neutral-50 p-4 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-900">
          <pre className="whitespace-pre text-[11px] sm:text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
            {`try {
  await fetchProject(slug);
} catch (err) {
  // project data payload is null
}`}
          </pre>
        </div>

        <div>
          <Link
            href="/projects"
            className="inline-block border border-black px-4 py-2 bg-black text-white hover:bg-transparent hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-150 active:scale-95"
          >
            $ cd ../projects
          </Link>
        </div>
      </div>
    </div>
  );
}
