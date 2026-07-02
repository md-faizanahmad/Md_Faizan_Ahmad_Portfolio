interface ProjectFeaturesProps {
  features: Record<string, string[]>;
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  const formatTitle = (title: string) => {
    const titles: Record<string, string> = {
      authentication: "Authentication & Security",
      catalog: "Product & Catalog Management",
      commerce: "Cart, Checkout & Payments",
      orders: "Orders & Post-Purchase",
      analytics: "Admin & Business Capabilities",
    };

    return titles[title] || title;
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Key Features</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Core features and business capabilities implemented in the project.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {Object.entries(features).map(([category, items]) => (
          <div key={category} className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">
              {formatTitle(category)}
            </h3>

            <ul className="space-y-3">
              {items.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-current opacity-70" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
