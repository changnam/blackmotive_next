import Announcement from "@/components/Announcement";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <>
        <Announcement/>
        <header className="flex items-center justify-between p-4 bg-gray-800">
            <nav>
                <ul className="flex space-x-4 text-white">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/catalog">Catalog</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}