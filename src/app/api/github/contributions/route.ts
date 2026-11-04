import { NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com/graphql";

const CONTRIBUTIONS_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    return NextResponse.json(
      { error: "GitHub configuration is missing." },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(GITHUB_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: { username },
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const result = await response.json();

    if (result.errors?.length || !result.data?.user) {
      throw new Error("Unable to retrieve GitHub contributions.");
    }

    const calendar =
      result.data.user.contributionsCollection.contributionCalendar;

    return NextResponse.json({
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
    });
  } catch (error) {
    console.error("GitHub contributions error:", error);

    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions." },
      { status: 502 },
    );
  }
}
