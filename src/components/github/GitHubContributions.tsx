"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export default function GitHubContributions() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchContributions = async () => {
      try {
        const response = await fetch("/api/github/contributions", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }

        const result: ContributionData = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError(true);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    fetchContributions();

    return () => controller.abort();
  }, []);

  const formatDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const firstDay = data?.weeks[0]?.contributionDays[0];
  const lastWeek = data?.weeks[data.weeks.length - 1];
  const lastDay = lastWeek?.contributionDays.at(-1);

  return (
    <section className="mx-auto w-full max-w-full p-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            GitHub Contributions
          </h2>
          <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
            My coding activity
          </p>
        </div>

        <Link
          href="https://github.com/md-faizanahmad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
        >
          <Github size={19} />
        </Link>
      </div>

      {/* Contribution Graph */}
      <div className="border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950 sm:p-4">
        {isLoading ? (
          <div className="flex h-24 items-center justify-center text-xs text-neutral-500">
            Loading contributions...
          </div>
        ) : error || !data ? (
          <div className="py-6 text-center text-xs text-neutral-500">
            Unable to load GitHub contributions.
          </div>
        ) : (
          <>
            {/* Total */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                {data.totalContributions.toLocaleString()} contributions
                <span className="ml-1 font-normal text-neutral-500">
                  in the last year
                </span>
              </p>

              <Link
                href="https://github.com/md-faizanahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                View profile
                <ExternalLink size={11} />
              </Link>
            </div>

            {/* Graph */}
            <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-[2px]">
              {data.weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[2px]">
                  {week.contributionDays.map((day) => (
                    <div
                      key={day.date}
                      title={`${day.contributionCount} contributions on ${formatDate(day.date)}`}
                      aria-label={`${day.contributionCount} contributions on ${formatDate(day.date)}`}
                      className="aspect-square w-full rounded-[1px] transition-opacity hover:opacity-70"
                      style={{ backgroundColor: day.color }}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[10px] text-neutral-500">
                {firstDay && lastDay
                  ? `${formatDate(firstDay.date)} – ${formatDate(lastDay.date)}`
                  : "Last year"}
              </span>

              <div className="flex items-center gap-1">
                <span className="mr-0.5 text-[10px] text-neutral-500">
                  Less
                </span>

                {["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"].map(
                  (color) => (
                    <span
                      key={color}
                      className="h-2.5 w-2.5 rounded-[1px]"
                      style={{ backgroundColor: color }}
                    />
                  ),
                )}

                <span className="ml-0.5 text-[10px] text-neutral-500">
                  More
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
