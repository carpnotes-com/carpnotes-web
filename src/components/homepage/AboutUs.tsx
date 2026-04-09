import Title from "@/src/components/page-components/Title";
import Image from "next/image";
import Founders from "@/public/assets/founders.png";

interface PageProps {
    aboutUsDict: {
        primaryHeader: string,
        aboutAuthors: string,
        description: string,
    },
};

export default async function AboutUs({ aboutUsDict }: PageProps) {
    return (
        <section className="
        flex items-center min-h-screen
        ">

            {/* Content */}
            <div className="
            mx-6 py-23 flex flex-col gap-8
            md:mx-10 md:flex-row
            ">
                {/* Header with description */}
                <div className="
                mr-auto
                md:w-1/3
                ">

                    {/* Header */}
                    <Title
                        text={aboutUsDict.primaryHeader}
                        additionalStyles="
                        mb-8 text-black
                        "
                    />

                    {/* Description */}
                    <div className="
                    text-xl text-black
                    ">
                        {aboutUsDict.description}
                    </div>
                </div>

                {/* Image with subtext */}
                <div className="
                flex flex-col-reverse items-center text-black
                md:flex-col
                ">

                    {/* Founders image */}
                    <Image
                        src={Founders}
                        alt="Founders"
                        className="
                        mt-2
                        md:mb-2
                        "
                    />

                    {/* Subtext */}
                    {aboutUsDict.aboutAuthors}
                </div>
            </div>
        </section>
    );
}
