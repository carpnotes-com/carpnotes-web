import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import ReadTime from "@/components/ReadTime"

interface ArticleCardProps {
    image: string,
    readTime: string,
    title: string,
    href: string,
    additional_styles?: string,
}

export default function ArticleCard({
    image,
    readTime,
    title,
    href,
    additional_styles,
}: ArticleCardProps) {
    return (
        <Link href={href} className="relative">
            <div
                className={`bg-cover bg-center  rounded-xl flex flex-col h-[100%] ${additional_styles}`}
                style={{ backgroundImage: `url(${image})` }}
            >
            </div>
            <div
                className="absolute inset-0 backdrop-blur mask-[linear-gradient(to_top,black_10%,transparent_50%)] rounded-br-xl rounded-bl-xl"
                style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)" }}
            >
            </div>
            <div className="absolute flex flex-col bottom-0 pl-4 pb-14">
                <div className="flex flex-col h-28">
                    <ReadTime
                    additionalStyles="mr-auto"
                    readTime={readTime}
                    />
                    <div className="font-sans text-2xl text-white font-light mt-2">
                        {title}
                    </div>
                </div>
            </div>
        </Link>
    )
}
