'use client';

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/carp-notes-logo.svg";
import LanguageSwitch from "@/src/components/page-components/LanguageSwitch";
import { Locale } from "@/src/lib/dictionaries";
import { useState, useEffect, useRef } from "react";

interface ComponentProps {
    headerDict: {
        home: string,
        blog: string,
        contactUs: string,
    },
    locale: Locale,
};

export default function Header({ headerDict, locale }: ComponentProps) {
    // Header hides when user scrolls down and shows itself when user scrolls up
    const [isDown, setIsDown] = useState(false);
    const lastYOffset = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentYOffset = window.scrollY;

            if (currentYOffset > lastYOffset.current) {
                setIsDown(true);
            } else {
                setIsDown(false);
            };
            
            lastYOffset.current = currentYOffset;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (    
        <header className={`
        bg-[#0B3B42]/90 px-4 py-3.75 flex items-center fixed w-full backdrop-blur-md top-0 z-1 transition-transform ${isDown ? '-translate-y-full' : 'translate-y-0'}
        md:px-15
        `}>

            {/* CarpNotes logo and name */}
            <Link
                href={`/${locale}`}
                className="
                flex items-center
                "
            >

                {/* CarpNotes logo */}
                <Image
                    src={Logo}
                    width={50}
                    height={50}
                    alt="Logo"
                />

                {/* Name */}
                <span className="
                px-2 text-amber-100
                ">
                    CARP NOTES
                </span>
            </Link>

            {/* Navigation button (only for desktop) */}
            <nav className="
            font-sans ml-auto gap-5 hidden
            md:flex
            ">

                {/* Home button */}
                <Link
                    href={`/${locale}`}
                    className="
                    hover:underline
                    ">
                    {headerDict.home}
                </Link>

                {/* Blog button */}
                <Link
                    href={`/${locale}/articles`}
                    className="
                    hover:underline
                    ">
                    {headerDict.blog}
                </Link>

                {/* Contact us button */}
                <Link
                    href={`/${locale}/contact-us`}
                    className="
                    hover:underline
                    ">
                    {headerDict.contactUs}
                </Link>
            </nav>

            {/* Language switch */}
            <LanguageSwitch
                additionalStyles="
                ml-auto
                md:ml-6
                "
            />
        </header>
    );
};
