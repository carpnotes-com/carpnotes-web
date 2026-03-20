import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/carp-notes-logo.svg";
import LanguageSwitch from "@/src/components/page-components/LanguageSwitch";
import { Locale } from "@/src/lib/dictionaries";

interface ComponentProps {
    headerDict: {
        home: string,
        blog: string,
        contactUs: string,
    },
    locale: Locale,
};

export default async function CallToAction({ headerDict, locale }: ComponentProps) {
    return (
        <header className="bg-[#0b3c43] md:px-[60px] py-[15px] flex items-center">
            <Link
                href="/"
                className="flex items-center"
            >
                <Image
                    src={Logo}
                    width={50}
                    height={50}
                    alt="Logo"
                />
                <span className="px-2 text-amber-100">CARP NOTES</span>
            </Link>
            <nav className="flex font-sans ml-auto gap-5">
                <Link
                    href={`/${locale}`}
                    className="hover:underline">
                    {headerDict.home}
                </Link>
                <Link
                    href={`/${locale}/articles`}
                    className="hover:underline">
                    {headerDict.blog}
                </Link>
                <Link
                    href={`/${locale}/contact-us`}
                    className="hover:underline">
                    {headerDict.contactUs}
                </Link>
            </nav>

            <LanguageSwitch
            additionalStyles="ml-6"
            />
        </header>
    );
}
