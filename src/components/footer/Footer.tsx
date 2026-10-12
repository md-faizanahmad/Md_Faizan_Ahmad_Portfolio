import Image from "next/image";
import Link from "next/link";
import FooterAnimation from "./FooterAnimation";
import { footerConfig } from "./footer.config";
import { Email, WhatsApp, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const githubUrl = footerConfig.socials.find(
    (item) => item.name.toLowerCase() === "github",
  )?.href;

  const linkedInUrl = footerConfig.socials.find(
    (item) => item.name.toLowerCase() === "linkedin",
  )?.href;

  return (
    <footer
      className="
        relative
        border-t border-[color:var(--border)]
        bg-[color:var(--background)]
        px-4 py-12
        text-[color:var(--foreground)]
        sm:px-6
        lg:px-8
      "
    >
      <FooterAnimation>
        <div className="mx-auto max-w-6xl">
          {/* Main Footer */}
          <div
            className="
              grid
              grid-cols-1
              gap-10
              sm:grid-cols-2
              lg:grid-cols-[1.8fr_1fr_1fr]
              lg:gap-20
            "
          >
            {/* Brand */}
            <div className="max-w-md">
              <Link
                href="/"
                className="
                  inline-block
                  text-lg font-semibold
                  tracking-tight
                  transition-opacity
                  hover:opacity-70
                "
              >
                {footerConfig.brand.name}
              </Link>

              <p
                className="
                  mt-2
                  text-sm font-medium
                  text-[color:var(--foreground)]
                "
              >
                {footerConfig.brand.title}
              </p>

              <p
                className="
                  mt-3
                  max-w-sm
                  text-sm leading-6
                  text-[color:var(--muted-foreground)]
                "
              >
                {footerConfig.brand.description}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3
                className="
                  mb-4
                  text-xs font-semibold
                  uppercase tracking-wider
                  text-[color:var(--muted-foreground)]
                "
              >
                Explore
              </h3>

              <ul className="space-y-2.5 text-sm">
                {footerConfig.navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="
                        text-[color:var(--foreground)]
                        transition-colors
                        hover:text-sky-500
                        dark:hover:text-sky-400
                      "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="
                  mb-4
                  text-xs font-semibold
                  uppercase tracking-wider
                  text-[color:var(--muted-foreground)]
                "
              >
                Contact
              </h3>

              <div className="flex items-center gap-3">
                {/* Email */}
                <a
                  href={`mailto:${footerConfig.contact.email}`}
                  aria-label="Send email"
                  title="Email"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-[color:var(--border)]
                    text-[color:var(--muted-foreground)]
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:border-red-500
                    hover:text-red-500
                    dark:hover:text-red-400
                  "
                >
                  <Email fontSize="small" />
                </a>

                {/* WhatsApp */}
                <a
                  href={footerConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact on WhatsApp"
                  title="WhatsApp"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-[color:var(--border)]
                    text-[color:var(--muted-foreground)]
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:border-[#25D366]
                    hover:text-[#25D366]
                  "
                >
                  <WhatsApp fontSize="small" />
                </a>

                {/* GitHub */}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    title="GitHub"
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full
                      border border-[color:var(--border)]
                      text-[color:var(--muted-foreground)]
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:border-[#181717]
                      hover:text-[#181717]
                      dark:hover:border-white
                      dark:hover:text-white
                    "
                  >
                    <GitHub fontSize="small" />
                  </a>
                )}

                {/* LinkedIn */}
                {linkedInUrl && (
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    title="LinkedIn"
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full
                      border border-[color:var(--border)]
                      text-[color:var(--muted-foreground)]
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:border-[#0A66C2]
                      hover:text-[#0A66C2]
                    "
                  >
                    <LinkedIn fontSize="small" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="
              mt-12
              flex flex-col
              gap-3
              pt-6
              text-xs
              text-[color:var(--muted-foreground)]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p>
              © {currentYear} {footerConfig.brand.name}
            </p>

            <div
              className="
                mt-5
                flex items-center gap-2
                text-xs
                text-[color:var(--muted-foreground)]
              "
            >
              <span>{footerConfig.contact.location}</span>

              <div
                className="
                  relative h-3.5 w-5
                  overflow-hidden rounded-[2px]
                  border border-black/10
                  dark:border-white/10
                "
              >
                <Image
                  src="/indiaflag.png"
                  alt="India"
                  fill
                  sizes="20px"
                  className="object-cover"
                />
              </div>
            </div>

            {footerConfig.bottomText && <p>{footerConfig.bottomText}</p>}
          </div>
        </div>
      </FooterAnimation>
    </footer>
  );
};

export default Footer;
