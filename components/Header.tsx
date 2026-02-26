import Image from "next/image"
import Link from "next/link";
import Logo from "../public/assets/logo.png"

export default function Header() {
    return (
        <section className="bg-[#0b3c43] md:px-[60px] py-[15px] flex items-center">
            <div className="flex items-center">
                <Image
                src={Logo}
                width={50}
                height={50}
                alt="Logo"
                />
                <Link
                href="/"
                className="px-2 text-amber-100">
                    CARP NOTES
                </Link>
            </div>
            <div className="flex ml-auto">
                <Link
                href="/"
                className="hover:underline mr-4">
                    Home
                </Link>
                <Link
                href="/articles"
                className="hover:underline mr-4">
                    Blog
                </Link>
                <Link
                href="/contact_us"
                className="hover:underline mr-4">
                    Contact us
                </Link>
            </div>
        </section>
    );
}
