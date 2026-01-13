import Image from "next/image";
import Link from "next/link";
import FooterAnimation from "./FooterAnimation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[color:var(--border)] bg-[color:var(--background)] text-[color:var(--foreground)] px-4 py-12 sm:px-6 lg:px-8">
      <FooterAnimation>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section - SEO Rich Text */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Me</h3>
            <p className="text-sm text-[color:var(--muted-foreground)] leading-relaxed">
              Frontend Developer based in Hyderabad, India. Specializing in
              React.js and modern web technologies to build high-performance
              applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="transition-colors hover:text-indigo-500"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-indigo-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-indigo-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/md-faizanahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-indigo-500"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mdfaizandahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-indigo-500"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917563092029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-indigo-500"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Get in Touch</h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:md.faizan.ahmad.web@gmail.com"
                className="underline underline-offset-4 hover:text-indigo-500"
                rel="noopener noreferrer"
              >
                md.faizan.ahmad.web@gmail.com
              </a>
            </p>

            {/* Flag implementation: Fixed size icon */}
            <div className="mt-4 flex items-center gap-2 text-sm text-[color:var(--muted-foreground)]">
              <span>Based in: India</span>
              <div className="relative h-4 w-6 overflow-hidden rounded-sm border border-gray-200 shadow-sm">
                <Image
                  src="/indiaflag.png"
                  alt="India Flag"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[color:var(--border)] pt-8 text-center text-sm text-[color:var(--muted-foreground)]">
          &copy; {currentYear} Md Faizan Ahmad. Built with Next.js & Tailwind.
        </div>
      </FooterAnimation>
    </footer>
  );
};

export default Footer;
