// "use client";

// import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { Moon, Sun } from "lucide-react";
// import gsap from "gsap";

// export default function DarkModeToggle() {
//   const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
//   const toggleRef = useRef(null);

//   useEffect(() => {
//     // Check initial theme preference (e.g., system or saved)
//     const savedTheme = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     const initialTheme = savedTheme ? savedTheme === "dark" : prefersDark;
//     setIsDarkMode(initialTheme);
//     document.documentElement.classList.toggle("dark", initialTheme);

//     // Fade animation for initial page load
//     gsap.fromTo(
//       document.documentElement,
//       { opacity: 0 },
//       { opacity: 1, duration: 0.5, ease: "power2.out" }
//     );
//   }, []);

//   const toggleTheme = () => {
//     const newMode = !isDarkMode;
//     setIsDarkMode(newMode);

//     // GSAP fade animation for theme switch
//     gsap.to(document.documentElement, {
//       opacity: 0,
//       duration: 0.3,
//       ease: "power2.in",
//       onComplete: () => {
//         document.documentElement.classList.toggle("dark", newMode);
//         localStorage.setItem("theme", newMode ? "dark" : "light");
//         gsap.to(document.documentElement, {
//           opacity: 1,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       },
//     });

//     // Animate toggle button
//     gsap.to(toggleRef.current, {
//       rotate: newMode ? 360 : -360,
//       scale: 1.2,
//       duration: 0.5,
//       ease: "elastic.out(1, 0.5)",
//       onComplete: () => {
//         gsap.to(toggleRef.current, { scale: 1, duration: 0.3 });
//       },
//     });
//   };

//   return (
//     <motion.button
//       ref={toggleRef}
//       onClick={toggleTheme}
//       className="p-2 cursor-pointer rounded-full bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 text-gray-900 dark:text-white"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
//       title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
//     >
//       {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
//     </motion.button>
//   );
// }
