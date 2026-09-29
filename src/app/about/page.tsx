import About from "@/components/about/About";
import TechnicalSkills from "@/components/skills/Skills";
export const metadata = {
  title: "About | Md Faizan Ahmad",
  description:
    "Learn more about Md Faizan Ahmad, a Frontend Developer specialized in React.js and modern web technologies.",

  alternates: {
    canonical: "https://mdfaizanahmad.in/about",
  },
};
export default function AboutPage() {
  return (
    <div>
      <About />
      <TechnicalSkills />
    </div>
  );
}
