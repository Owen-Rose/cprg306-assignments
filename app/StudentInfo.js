import Link from "next/link";

export default function StudentInfo() {
    const gitHub = 'https://github.com/Owen-Rose'
    return (
        <div>
            <p>Owen Rose</p>
            <p>CPRG 306 E</p>
            <Link href={gitHub}>GitHub Repository</Link>
        </div>
    );
}