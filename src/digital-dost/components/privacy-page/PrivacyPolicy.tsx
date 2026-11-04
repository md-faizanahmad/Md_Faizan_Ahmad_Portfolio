import Image from "next/image";
import DigitalDost from "@/digital-dost/images/dd.png";
const sections = [
  {
    title: "1. Information We Collect",
    content:
      "Digital Dost does not collect, request, or transmit any personal information from users. No account registration or login is required to use the application.",
  },
  {
    title: "2. Data Storage",
    content:
      "All app data, including saved bookmarks, is stored locally on the user's device. Digital Dost does not have a backend, server, or cloud database to store user information.",
  },
  {
    title: "3. Third-Party Services",
    content:
      "Digital Dost does not use advertising, analytics, or third-party tracking services. Our educational content and images are created by us, including images generated using AI tools.",
  },
  {
    title: "4. Data Security",
    content:
      "Since user information is not collected or transmitted to our servers, we do not maintain a server-side user database. Locally stored data remains on the user's device.",
  },
  {
    title: "5. Data Deletion",
    content:
      "Users can remove locally stored app data by clearing Digital Dost's data through Android settings or uninstalling the application.",
  },
  {
    title: "6. Children's Privacy",
    content:
      "Digital Dost does not knowingly collect personal information from children or any other users.",
  },
  {
    title: "7. Policy Updates",
    content:
      "We may update this Privacy Policy when necessary. Any changes will be published on this page with an updated revision date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-5 pt-25 pb-10 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="mx-auto max-w-3xl">
        {/* App Information */}
        <header className="border-b border-gray-200 pb-6 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Image
              src={DigitalDost}
              alt="Digital Dost logo"
              width={78}
              height={78}
              sizes="64px"
              className="h-16 w-16 rounded-lg object-contain"
            />

            <div>
              <h1 className="text-xl font-bold">Digital Dost</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Learn. Create. Grow.
              </p>
            </div>
          </div>

          <h2 className="mt-8 text-2xl font-bold">Privacy Policy</h2>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Last updated: November 4, 2026
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
            Digital Dost is an educational mobile application developed by MD
            Faizan Ahmad to help users learn digital skills through tutorials
            and guides.
          </p>

          <div className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <p>
              <strong className="text-gray-900 dark:text-white">
                Developer:
              </strong>{" "}
              Md Faizan Ahmad
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">
                Website:
              </strong>{" "}
              <a
                href="https://mdfaizanahmad.in"
                className="text-green-700 hover:underline dark:text-green-400"
              >
                mdfaizanahmad.in
              </a>
            </p>
          </div>
        </header>

        {/* Policy Sections */}
        <article className="space-y-7 py-8 text-sm leading-7 text-gray-600 dark:text-gray-300">
          {sections.map((section) => (
            <section key={section.title}>
              <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <p>{section.content}</p>
            </section>
          ))}

          {/* Contact */}
          <section>
            <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
              8. Contact Us
            </h3>

            <p>
              If you have any questions about this Privacy Policy, contact the
              developer:
            </p>

            <div className="mt-3 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <p className="font-semibold text-gray-900 dark:text-white">
                MD Faizan Ahmad
              </p>

              <a
                href="https://mdfaizanahmad.in"
                className="text-green-700 hover:underline dark:text-green-400"
              >
                mdfaizanahmad.in
              </a>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Email: md.faizan.ahmad.web@gmail.com
              </p>
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-5 text-center text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
          © {new Date().getFullYear()} Digital Dost. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
