import Image from "next/image";
import Link from "next/link";
import FooterAnimation from "./FooterAnimation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[color:var(--border)] bg-[color:var(--background)] text-[color:var(--foreground)] px-4 py-12 sm:px-6 lg:px-8">
      <FooterAnimation>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* What I Do */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">What I Do</h3>
            <p className="text-sm text-[color:var(--muted-foreground)] leading-relaxed">
              I build fast, scalable web applications using React, Next.js, and
              TypeScript — focused on performance, clean architecture, and
              real-world usability.
            </p>

            <p className="mt-3 text-xs text-[color:var(--muted-foreground)]">
              2+ years experience • Production-ready projects •
              Performance-focused
            </p>
          </div>

          {/* Key Work */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Key Work</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://luman-hotel.vercel.app"
                  className="hover:text-indigo-500 transition-colors"
                >
                  Luman Hotel Booking System
                </Link>
              </li>
              <li>
                <Link
                  href="https://myazstore.shop"
                  className="hover:text-indigo-500 transition-colors"
                >
                  MyAZStore E-commerce Platform
                </Link>
              </li>
              <li>
                <Link href="https://luman-studio.vercel.app">Luman Studio</Link>
              </li>
              <li>
                <Link href="/projects">More</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <p className="text-xs text-[color:var(--muted-foreground)] mb-2">
              Check my work & reach out
            </p>

            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/md-faizanahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mdfaizandahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Start a Conversation</h3>

            <p className="text-sm mb-2">
              <a
                href="mailto:md.faizan.ahmad.web@gmail.com"
                className="hover:text-indigo-500 transition-colors"
              >
                md.faizan.ahmad.web@gmail.com
              </a>
            </p>

            <p className="text-sm">
              <a
                href="https://wa.me/917563092029"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                WhatsApp (Fastest)
              </a>
            </p>

            <div className="mt-4 text-xs text-[color:var(--muted-foreground)]">
              Based in India
              <div className="relative h-4 w-6 overflow-hidden rounded-sm border border-gray-200 shadow-sm">
                {" "}
                <Image
                  src="/indiaflag.png"
                  alt="India Flag"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
                />{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-[color:var(--border)] pt-8 text-center text-sm text-[color:var(--muted-foreground)]">
          © {currentYear} Md Faizan Ahmad.
        </div>
      </FooterAnimation>
    </footer>
  );
};

export default Footer;
