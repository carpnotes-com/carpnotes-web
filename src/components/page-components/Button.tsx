import Link from "next/link";
import Image from "next/image";
import ArrowArticle from "@/public/assets/arrow-articles.svg";

interface ButtonProps {
    href: string,
    text: string,
    additionalStyles?: string,
};

export default function Button({ href, text, additionalStyles }: ButtonProps) {
    return (
        <Link href={href} className={`
        flex ${additionalStyles}
        `}>
            <button className="
            bg-[rgba(245,223,190,0.1)] border border-[#dcc49f] rounded-2xl px-3 py-1.5 flex items-center justify-center gap-2.5 w-full hover:bg-[rgba(245,223,190,0.2)] transition-colors
            ">

                {/* Text */}
                <span className="
                font-dmSans font-medium text-[18px] text-[#dbbb88]
                ">
                    {text}
                </span>

                {/* Arrow image */}
                <Image
                    src={ArrowArticle}
                    alt="Go To The Article"
                    width={16}
                    height={16}
                    unoptimized
                />
            </button>
        </Link>
    );
};