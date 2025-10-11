// "use client";

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

// const socialLinks = [
//   {
//     name: "GitHub",
//     url: "https://github.com/iamfaizandev",
//     icon: <Github size={24} className="text-gray-900 hover:text-gray-700" />,
//     color: "text-gray-900", // GitHub dark gray
//     animation: {
//       type: "bounce",
//       y: -15,
//       duration: 0.5,
//       ease: "elastic.out(1, 0.5)",
//     },
//   },
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/in/mdfaizandahmad/",
//     icon: <Linkedin size={24} className="text-blue-700 hover:text-blue-500" />,
//     color: "text-blue-700", // LinkedIn blue
//     animation: {
//       type: "spin",
//       rotate: 360,
//       duration: 0.6,
//       ease: "power2.out",
//     },
//   },
//   {
//     name: "Email",
//     url: "mailto:md.faizan.ahmad.web@gmail.com",
//     icon: <Mail size={24} className="text-gray-500 hover:text-gray-400" />,
//     color: "text-gray-500", // Neutral gray for email
//     animation: {
//       type: "pulse",
//       scale: 1.15, // Single value for scale
//       duration: 0.5,
//       ease: "power3.inOut",
//     },
//   },
//   {
//     name: "WhatsApp",
//     url: "https://wa.me/+917563092029",
//     icon: (
//       <MessageCircle
//         size={24}
//         className="text-green-500 hover:text-green-400"
//       />
//     ),
//     color: "text-green-500", // WhatsApp green
//     animation: {
//       type: "slide",
//       x: 15,
//       duration: 0.5,
//       ease: "back.out(1.5)",
//     },
//   },
// ];

// export default function Links() {
//   const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

//   useEffect(() => {
//     // Animate social link icons
//     linkRefs.current.forEach((link, index) => {
//       if (link) {
//         const { type, duration, ease, ...props } = socialLinks[index].animation;
//         gsap.fromTo(
//           link,
//           { opacity: 0, ...props },
//           {
//             opacity: 1,
//             ...(type === "bounce" ? { y: 0 } : {}),
//             ...(type === "spin" ? { rotate: 0 } : {}),
//             ...(type === "pulse" ? { scale: 1 } : {}),
//             ...(type === "slide" ? { x: 0 } : {}),
//             duration,
//             ease,
//             delay: index * 0.1,
//             scrollTrigger: {
//               trigger: link,
//               start: "top 90%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );

//         // Add pulse effect for Email icon
//         if (type === "pulse") {
//           gsap.to(link, {
//             scale: 1.15,
//             duration: 0.5,
//             ease: "power3.inOut",
//             repeat: -1,
//             yoyo: true,
//             scrollTrigger: {
//               trigger: link,
//               start: "top 90%",
//               end: "bottom 20%",
//               toggleActions: "play pause resume pause",
//             },
//           });
//         }
//       }
//     });

//     // Cleanup ScrollTrigger on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="flex items-center justify-center mt-10 backdrop-blur-lg bg-gray-100 w-min m-auto gap-4 sm:gap-6">
//       {socialLinks.map((link, index) => (
//         <motion.a
//           key={link.name}
//           href={link.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           ref={(el: HTMLAnchorElement | null) => {
//             linkRefs.current[index] = el;
//           }}
//           className={`p-2 rounded-full hover:bg-gray-200/30 transition-all duration-300 ${link.color}`}
//           whileHover={{
//             scale: 1.2,
//             transition: { duration: 0.3 },
//           }}
//           title={link.name}
//         >
//           {link.icon}
//         </motion.a>
//       ))}
//     </div>
//   );
// }
