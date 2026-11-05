import Image from "next/image";
import {
  DigitalDost,
  DDBlogHero,
  projectMeta,
  projectSections,
} from "./digital-dost.config";

export default function DigitalDostAbout() {
  const {
    about,
    whyBuilt,
    firstProject,
    features,
    techStack,
    development,
    closing,
  } = projectSections;

  return (
    <main className="min-h-screen bg-white px-5 py-20 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="mx-auto w-full max-w-5xl">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-green-100 dark:border-green-900/30 dark:from-gray-900 dark:via-gray-950 dark:to-green-950/30">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-300/20 blur-3xl dark:bg-green-500/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-green-200/30 blur-3xl dark:bg-green-500/10" />

          {/* Top-left Logo */}
          <div className="absolute left-5 top-5 z-20 sm:left-8 sm:top-8 lg:left-0 lg:top-2">
            <div className="flex h-14 w-45 items-center justify-center p-2  dark:border-gray-700 dark:bg-gray-900">
              <Image
                src={DigitalDost}
                alt="Digital Dost logo"
                width={56}
                height={56}
                sizes="56px"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative grid items-center gap-6 px-5 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-28 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:pb-10 lg:pt-10">
            {/* App Image - First on Mobile, Right on Desktop */}
            <div className="relative order-1 flex min-h-[220px] items-center justify-center sm:min-h-[300px] lg:order-2 lg:min-h-[380px]">
              <Image
                src={DDBlogHero}
                alt="Digital Dost mobile application preview"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto max-h-[420px] w-full object-contain"
              />
            </div>

            {/* Project Information */}
            <header className="relative order-2 flex flex-col items-start lg:order-1">
              <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                {projectMeta.category}
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {projectMeta.title}
              </h1>

              <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                {projectMeta.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {projectMeta.technologies.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-green-200 bg-white/70 px-3 py-1.5 text-xs font-medium dark:border-green-900 dark:bg-gray-900/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </header>
          </div>
        </section>

        {/* About */}
        <section className="py-10">
          <h2 className="text-xl font-bold">{about.title}</h2>

          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400"
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Why I Built It */}
        <section className="border-y border-gray-200 py-10 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <whyBuilt.icon size={22} className="text-green-600" />
            <h2 className="text-xl font-bold">{whyBuilt.title}</h2>
          </div>

          {whyBuilt.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400"
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* First Mobile Project */}
        <section className="py-10">
          <div className="flex items-center gap-3">
            <firstProject.icon size={22} className="text-green-600" />
            <h2 className="text-xl font-bold">{firstProject.title}</h2>
          </div>

          {firstProject.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400"
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Features */}
        <section className="border-y border-gray-200 py-10 dark:border-gray-800">
          <h2 className="text-xl font-bold">{features.title}</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.items.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-100 p-5 dark:border-gray-800"
              >
                <Icon size={22} className="text-green-600" />
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-10">
          <div className="flex items-center gap-3">
            <techStack.icon size={22} className="text-green-600" />
            <h2 className="text-xl font-bold">{techStack.title}</h2>
          </div>

          <div className="mt-6 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {techStack.items.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-center"
              >
                <h3 className="text-sm font-semibold">{tech.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Development Highlights */}
        <section className="border-y border-gray-200 py-10 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <development.icon size={22} className="text-green-600" />
            <h2 className="text-xl font-bold">{development.title}</h2>
          </div>

          <ul className="mt-5 space-y-3">
            {development.items.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-6 text-gray-600 dark:text-gray-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        {/* Closing */}
        <section className="py-10">
          <h2 className="text-xl font-bold">{closing.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            {closing.description}
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          Designed and developed by {projectMeta.author}.
        </footer>
      </div>
    </main>
  );
}
