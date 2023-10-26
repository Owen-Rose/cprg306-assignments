import Image from "next/image";
import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">week 2</Link>
      <br />
      <Link href="/week3">week 3</Link>
      <br />
      <Link href="/week4">week 4</Link>
      <br />
      <Link href="/week5">week 5</Link>
      <br />
      <Link href="/week6">week 6</Link>
      <br />
      <Link href="/week7">week 7</Link>
      <br />
      <Link href="/week8">week 8</Link>
    </main>
    
  );
}
