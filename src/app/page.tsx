import Heading from "@/components/Heading";
import styles from "./page.module.css";
import PortfolioEntryCardGroup from "@/components/PortfolioEntryCardGroup";

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading title={"My Portfolio"} description={" I am a student studying software development... I absolutely love Web Development! I created this website at a GDSC Event, which demonstrates my passion for all things tech."}/>
      <PortfolioEntryCardGroup entries={
        [
          {
            title: "My Resume",
            description: "This website is a portfolio of my work, and a demonstration of my skills.",
            image: "/react.webp",
            skills: ["React", "Next.js", "CSS", "HTML", "JavaScript"],
            href: "project",
          },
          {
            title: "My GitHub",
            description: "Implementing a Github link to showcase my past works",
            image: "/github-mark.png",
            skills: ["GitHub", "Git Commands", "HTML"],
            href: "project-2",
          },
          {
            title: "Work in Progress",
            description: "Description 3",
            image: "/selenium.png",
            skills: ["Skill 1", "Skill 2", "Skill 3"],
            href: "project-3",
          },
        ]
      } />
    </main>
  );
}
