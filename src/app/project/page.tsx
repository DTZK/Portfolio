import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"My Resume"} description={"Showcasing my Resume on a site"}/>
      <p>I have some text here</p>
      <Image width={200*2} height={300*2} src="/resume.png" alt="Project" />
      <p>I have an image above that you can see.</p>
      <Link className="button" href="/">Go back</Link>
    </main>
  );
}
