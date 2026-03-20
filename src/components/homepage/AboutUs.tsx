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
        <section className="flex items-center min-h-screen">
            <div className="mx-10 flex">
                <div className="w-2/5 mr-auto">
                    <Title
                        text={aboutUsDict.primaryHeader}
                        style="mb-8 text-black"
                    />

                    <div className="text-xl text-black">
                        {aboutUsDict.description}
                    </div>
                </div>

                <div className="flex flex-col items-center text-black">
                    <Image
                        src={Founders}
                        alt="Founders"
                        className="mb-2"
                    />

                    {aboutUsDict.aboutAuthors}
                </div>
            </div>
        </section>
    );
}
