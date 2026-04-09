import Link from "next/link"
import ReadTime from "@/src/components/article-card/ReadTime"

interface ArticleCardProps {    
    image: string,
    readTime: string,
    cardDict: {
        timeToReadText: string,
    },
    title: string,
    href: string,
}

export default function ArticleCard({ image, readTime, cardDict, title, href }: ArticleCardProps) {
    return (
        <Link href={href} className="
        relative w-full
        ">

            {/* Background image */}
            <div
                className={`
                    bg-cover bg-center rounded-xl flex flex-col h-full
                    `}
                style={{ backgroundImage: `url(${image})` }}
            >
            </div>

            {/* Blur */}
            <div
                className="
                absolute inset-0 backdrop-blur mask-[linear-gradient(to_top,black_10%,transparent_50%)] rounded-br-xl rounded-bl-xl
                "
                style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)" }}
            >
            </div>

            {/* Read time and title */}
            <div className="
            absolute flex flex-col bottom-0 pl-4 pb-14
            ">
                <div className="
                flex flex-col
                ">

                    {/* Read time */}
                    <ReadTime
                    timeToReadText={cardDict.timeToReadText}
                    additionalStyles="mr-auto"
                    readTime={readTime}
                    />

                    {/* Title */}
                    <div className="
                    font-sans text-2xl text-white font-light mt-2
                    ">
                        {title}
                    </div>
                </div>
            </div>
        </Link>
    )
}
