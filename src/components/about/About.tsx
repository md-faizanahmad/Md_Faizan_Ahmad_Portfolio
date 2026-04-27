import Link from "next/link";
import Image from "next/image";
import TechnicalSkills from "../skills/Skills";
import AboutAnimations from "./AboutAnimations"; // Import the client wrapper

const About = () => {
  const paragraphs = [
    {
      text: (
        <>
          I’m a Frontend Developer passionate about building responsive, modern
          web applications. I specialize in React.js, Bootstrap, HTML, CSS,
          Tailwind CSS, and Node.js, API.
        </>
      ),
    },
    {
      text: (
        <>
          Through training at{" "}
          <a
            href="https://www.nareshit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Naresh IT, Hyderabad
          </a>
          , I’ve developed real-world apps with responsive UIs, RESTful APIs,
          MongoDB/Firebase databases, and dynamic features.
        </>
      ),
    },
    {
      text: (
        <>
          I combine technical skills with a user-focused mindset, ensuring
          interfaces are functional, engaging, and accessible. I’m actively
          seeking opportunities to contribute clean code, innovative thinking,
          and design-focused development.
        </>
      ),
    },
  ];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-[color:var(--background)]">
      <div className="mx-auto max-w-4xl">
        {/* Header - Still animated but simple motion is fine here */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 mt-10 mb-4">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Hi, I’m Md Faizan Ahmad
            </h1>
            <p className="mt-4 text-xl text-[color:var(--muted-foreground)]">
              Frontend Developer | React.js, JavaScript, Tailwind
            </p>
          </div>

          <div className="relative h-32 w-32 sm:h-40 sm:w-40 shrink-0">
            <Image
              src="/profile-pic.png"
              alt="Md Faizan Ahmad"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="rounded-full object-cover border-4 border-indigo-600/20 shadow-xl"
            />
          </div>
        </div>

        <h2 className="mt-12 mb-8 text-3xl font-bold">About Me</h2>

        <div className="space-y-6 text-lg leading-relaxed">
          {paragraphs.map((text, index) => (
            <AboutAnimations key={index} index={index}>
              <p>{text.text}</p>
            </AboutAnimations>
          ))}
        </div>

        <TechnicalSkills />

        <div className="mt-12">
          <Link
            href="mailto:md.faizan.ahmad.web@gmail.com"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full"
          >
            Let’s Connect
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
