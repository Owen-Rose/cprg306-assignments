import Link from "next/link";

export default function StudentInfo() {
    const gitHub = 'https://github.com/Owen-Rose'
    return (
        <div>
            <p>Name: Owen Rose</p>
            <p>Coyrse section: CPRG 306 E</p>
            <Link href={gitHub}>https://github.com</Link>
        </div>
    );
}