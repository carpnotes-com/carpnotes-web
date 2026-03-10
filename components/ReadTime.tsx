import Image from "next/image";
import Watch from "@/public/assets/watch.svg";

interface ReadTimeProps {
    readTime: string
    additionalStyles?: string
};

export default function ReadTime({ readTime, additionalStyles }: ReadTimeProps) {
    return (
        <div className={`font-extralight font-sans text-sm text-white bg-white/15 rounded-full p-1.5 flex items-center ${additionalStyles}`}>
            <Image
                src={Watch}
                alt="Picture"
                width={16}
                className="mr-1"
            />
            {readTime} min read
        </div>
    );
};