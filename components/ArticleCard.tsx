import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
    image: string;
    title: string;
    readTime?: string;
    href?: string;
}

export default function ArticleCard({ image, title, readTime = "10 min read", href = "/articles/example" }: ArticleCardProps) {
    return (
        <Link href={href} className="h-full w-full flex flex-col items-center justify-end overflow-hidden rounded-[16px] relative group cursor-pointer block">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-[16px]"
                    unoptimized
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] rounded-[16px]" />
            </div>

            {/* Content overlay */}
            <div
                className="relative z-10 backdrop-blur-md w-full h-[172px] p-[24px] flex flex-col gap-[13px]"
                style={{
                    backgroundImage:
                        "linear-gradient(179.817deg, rgba(0, 0, 0, 0) 0.33606%, rgba(0, 0, 0, 0.4) 99.663%)",
                }}
            >
                {/* Time badge */}
                <div className="bg-[rgba(255,255,255,0.1)] rounded-[12px] px-[6px] py-[4px] flex items-center gap-[4px] w-fit">
                    <Image
                        src="/assets/ec817c4f10ab6ddfc7b769dae1838c6183e25e9f.svg"
                        alt="Time"
                        width={16}
                        height={16}
                        unoptimized
                    />
                    <span className="font-dmSans text-[12px] leading-[1.3] text-white">
                        {readTime}
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-dmSans text-[22px] leading-[1.3] text-white">
                    {title}
                </h3>
            </div>
        </Link>
    );
}
