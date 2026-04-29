import Image from "next/image";
import Link from "next/link";
import FooterAnimation from "./FooterAnimation";
import { footerConfig } from "./footer.config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[color:var(--border)] bg-[color:var(--background)] px-4 py-12 text-[color:var(--foreground)] sm:px-6 lg:px-8">
      <FooterAnimation>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              {footerConfig.brand.name}
            </h3>

            <p className="mb-3 text-sm text-[color:var(--muted-foreground)]">
              {footerConfig.brand.title}
            </p>

            <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
              {footerConfig.brand.description}
            </p>

            <p className="mt-4 text-xs text-[color:var(--muted-foreground)]">
              {footerConfig.brand.stats}
            </p>
          </div>

          {/* Work */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Key Work</h3>

            <ul className="space-y-2 text-sm">
              {footerConfig.featuredWork.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-indigo-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Explore</h3>

            <ul className="space-y-2 text-sm">
              {footerConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-indigo-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {footerConfig.socials.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-indigo-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Let’s Connect</h3>

            <a
              href={`mailto:${footerConfig.contact.email}`}
              className="block text-sm transition-colors hover:text-indigo-500"
            >
              {footerConfig.contact.email}
            </a>

            <a
              href={footerConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-sm transition-colors hover:text-green-500"
            >
              WhatsApp
            </a>

            <div className="mt-5 flex items-center gap-2 text-xs text-[color:var(--muted-foreground)]">
              <span>{footerConfig.contact.location}</span>

              <div className="relative h-4 w-6 overflow-hidden rounded-sm border border-gray-300">
                <Image
                  src="/indiaflag.png"
                  alt="India Flag"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-[color:var(--border)] pt-8 text-center text-sm text-[color:var(--muted-foreground)]">
          © {currentYear} {footerConfig.brand.name}. {footerConfig.bottomText}
        </div>
      </FooterAnimation>
    </footer>
  );
};

export default Footer;
