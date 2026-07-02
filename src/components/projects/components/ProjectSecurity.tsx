import { Shield } from "lucide-react";

interface ProjectSecurityProps {
  security: string[];
}

export default function ProjectSecurity({ security }: ProjectSecurityProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Security Features</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Authentication, authorization, and security practices implemented in
          the application.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {security.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-xl border bg-card p-5"
          >
            <div className="mt-1">
              <Shield size={18} className="text-green-500" />
            </div>

            <p className="text-sm leading-6">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
