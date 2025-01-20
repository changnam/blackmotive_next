import Announcement from "@/components/Announcement";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <>
        <Announcement/>
        <header className="flex items-center justify-between p-4 bg-gray-800">
            <h1 className="text-2xl font-bold text-white">Next.js</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/product">Product</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}