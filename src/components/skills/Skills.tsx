import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

// Define the Skill type
interface Skill {
  name: string;
  url: string;
}

const skills: Skill[] = [
  { url: "/icons/reactjs.png", name: "React Js" },
  { url: "/icons/reactmui.png", name: "React MUi" },
  { url: "/icons/tailwind.png", name: "Tailwind" },
  { url: "/icons/nextjs.png", name: "Next Js" },
  { url: "/icons/html.png", name: "Html" },
  { url: "/icons/css.png", name: "CSS" },
  { url: "/icons/js.png", name: "JS" },
  { url: "/icons/bootstrap.png", name: "Bootstrap" },
  { url: "/icons/nodejs.png", name: "Node Js" },
  { url: "/icons/mongodb.png", name: "Mongodb" },
  { url: "/icons/github.png", name: "Github&Git" },
  { url: "/icons/api.png", name: "API" },
  { url: "/icons/firebase.png", name: "Firebase" },
];

const SkillsTicker: React.FC = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const tickerWidth = ticker.scrollWidth / 2;

    // Duplicate skills for seamless loop
    const tickerContent = ticker.children[0].cloneNode(true);
    ticker.appendChild(tickerContent);

    // GSAP animation for infinite scroll
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(ticker, {
      x: -tickerWidth,
      duration: 20,
      ease: "linear",
      onUpdate: () => {
        if (Math.abs(gsap.getProperty(ticker, "x") as number) >= tickerWidth) {
          gsap.set(ticker, { x: 0 });
        }
      },
    });

    // Pause on hover
    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.resume();

    ticker.addEventListener("mouseenter", handleMouseEnter);
    ticker.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      tl.kill();
      ticker.removeEventListener("mouseenter", handleMouseEnter);
      ticker.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="overflow-hidden py-4 md:py-6 lg:py-8 mt-15">
      <motion.div
        ref={tickerRef}
        className="flex"
        initial={{ x: 0 }}
        animate={controls}
      >
        <div className="flex space-x-2  sm:space-x-4 md:space-x-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center me-3  justify-center cursor-pointer px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg  hover:shadow-lg transition-all duration-300 min-w-[80px] sm:min-w-[100px] md:min-w-[120px]"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="object-contain "
                src={skill.url}
                alt={skill.name}
                width={40}
                height={40}
                sizes="(max-width: 640px) 30px, (max-width: 768px) 40px, 50px"
                priority={index < 6} // Prioritize loading for first few images
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsTicker;
