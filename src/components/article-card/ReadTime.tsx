import Image from "next/image";
import Watch from "@/public/assets/watch.svg";

interface ReadTimeProps {
    timeToReadText: string
    readTime: string,
    additionalStyles?: string,
};

export default function ReadTime({ timeToReadText, readTime, additionalStyles }: ReadTimeProps) {
    return (
        <div className={`
        font-extralight font-sans text-[11px] text-white bg-white/15 rounded-full p-1.5 flex items-center backdrop-blur-sm ${additionalStyles}
        md:text-sm
        `}>
            
            {/* Watches image */}
            <Image
                src={Watch}
                alt="Picture"
                width={16}
                className="
                mr-1
                "
            />

            {/* Read time with text */}
            {readTime} {timeToReadText}
        </div>
    );
};