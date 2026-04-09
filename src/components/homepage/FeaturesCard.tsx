import Image, { StaticImageData } from "next/image";

interface FeaturesCardProps {
    image: StaticImageData;
    title: string;
    subdescription: string;
    description: string;
}

export default function FeaturesCard({
    image,
    title,
    subdescription,
    description,
}: FeaturesCardProps) {
    return (
        <div className="
        w-full
        ">

            {/* Image */}
            <Image
                src={image}
                alt="Image"
                className="
                my-2 w-30 h-30
                "
            />

            {/* Title */}
            <div className="
            text-xl text-black font-semibold
            ">
                {title}
            </div>

            {/* Subdescription */}
            <span className="
            text-black
            ">
                {subdescription}
            </span>

            {/* Horizontal line */}
            <hr className="
            h-px bg-gray-400 border-0 my-2
            "/>

            {/* Description */}
            <div className="
            text-black
            ">
                {description}
            </div>
        </div>
    );
}
