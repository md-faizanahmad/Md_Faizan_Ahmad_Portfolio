// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image"; // Import Image
// import { useRef } from "react";
// import TechnicalSkills from "../skills/Skills";

// const About = () => {
//   const aboutRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: aboutRef,
//     offset: ["start end", "end start"],
//   });

//   const opacities = [
//     useTransform(scrollYProgress, [0, 0.2], [0, 1]),
//     useTransform(scrollYProgress, [0, 0.4], [0, 1]),
//     useTransform(scrollYProgress, [0, 0.6], [0, 1]),
//   ];

//   const yTransforms = [
//     useTransform(scrollYProgress, [0, 0.2], [20, 0]),
//     useTransform(scrollYProgress, [0, 0.4], [20, 0]),
//     useTransform(scrollYProgress, [0, 0.6], [20, 0]),
//   ];

//   const paragraphs = [
//     {
//       text: (
//         <>
//           I’m a Frontend Developer passionate about building responsive, modern
//           web applications. I specialize in React.js, Bootstrap, HTML, CSS,
//           Tailwind CSS, and Node.js, API.
//         </>
//       ),
//     },
//     {
//       text: (
//         <>
//           Through training at{" "}
//           <a
//             href="https://www.nareshit.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline underline-offset-4 hover:opacity-80"
//           >
//             Naresh IT, Hyderabad
//           </a>
//           , I’ve developed real-world apps with responsive UIs, RESTful APIs,
//           MongoDB/Firebase databases, and dynamic features.
//         </>
//       ),
//     },
//     {
//       text: (
//         <>
//           I combine technical skills with a user-focused mindset, ensuring
//           interfaces are functional, engaging, and accessible. I’m actively
//           seeking opportunities to contribute clean code, innovative thinking,
//           and design-focused development.
//         </>
//       ),
//     },
//   ];

//   return (
//     <section
//       ref={aboutRef}
//       className="px-4 py-20 sm:px-6 lg:px-8 bg-[color:var(--background)] text-[color:var(--foreground)]"
//     >
//       <div className="mx-auto max-w-4xl">
//         {/* Profile Image & Title Flex Container */}
//         <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 mt-10 mb-4">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-4xl font-bold sm:text-5xl">
//               Hi, I’m Md Faizan Ahmad
//             </h1>
//             <p className="mt-4 text-xl text-[color:var(--muted-foreground)]">
//               Frontend Developer | React.js, JavaScript, Tailwind | Open to
//               Hyderabad | Immediate Joiner
//             </p>
//           </motion.div>

//           {/* Profile Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="relative h-32 w-32 sm:h-40 sm:w-40 shrink-0"
//           >
//             <Image
//               src="/profile-pic.jpg" // Stored in public/profile-pic.jpg
//               alt="Md Faizan Ahmad"
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               className="rounded-full object-cover border-4  border-indigo-600/20 shadow-xl"
//               priority
//             />
//           </motion.div>
//         </div>

//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-12 mb-8 text-3xl font-bold sm:text-4xl"
//         >
//           About Me
//         </motion.h2>

//         <div className="space-y-6 text-lg leading-relaxed">
//           {paragraphs.map((para, index) => (
//             <motion.p
//               key={index}
//               style={{ opacity: opacities[index], y: yTransforms[index] }}
//               className="opacity-0"
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               {para.text}
//             </motion.p>
//           ))}
//         </div>

//         <TechnicalSkills />

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 1 }}
//           className="mt-12 text-left"
//         >
//           <Link
//             href="mailto:md.faizan.ahmad.web@gmail.com"
//             className="inline-block rounded-full px-8 py-3 font-semibold shadow-md transition-all bg-indigo-600 text-white hover:bg-indigo-500"
//           >
//             Let’s Connect
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
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
              src="/profile-pic.jpg"
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
