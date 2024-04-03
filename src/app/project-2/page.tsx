import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Project 2"} description={"Let's see some more stuff about my second project..."}/>
      <Link className="button" href="/">Go back</Link>
      <Link className="button" href = "https://github.com/DTZK?tab=repositories">Github projects</Link>
      <Image width = {140*2} height = {100*2} src="/github-mark.png" alt = "Project" />
      <p>I have an image above that you can see.</p>
    </main>
  );
}
