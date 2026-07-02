import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Project Not Found</h1>

      <p className="text-muted-foreground">
        The project you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link href="/projects" className="rounded-md border px-4 py-2">
        Back to Projects
      </Link>
    </div>
  );
}
