import Image from "next/image";
import Title from "@/src/components/page-components/Title";
import StoreButtons from "@/src/components/page-components/StoreButtons";
import Fish from "@/public/assets/contact-form-fish.svg";

interface PageProps {
    callToActionDict: {
        primaryHeader: string,
    },
};

export default async function CallToAction({ callToActionDict }: PageProps) {
    return (
        // Backgorund mobile / desktop
        <section className="
        bg-linear-to-r from-[#1C96A8] to-[#0B3B42] flex items-center py-23
        md:py-0 md:min-h-screen
        ">
            
            {/* Content */}
            <div className="
            mx-6 flex flex-col-reverse
            md:flex-row md:mx-10 md:items-center
            ">
                {/* Header with store buttons */}
                <div className="
                md:w-1/3
                ">

                    {/* Header */}
                    <Title
                        text={callToActionDict.primaryHeader}
                        additionalStyles="text-white my-4 md:my-0 md:mb-8"
                    />

                    {/* Store buttons */}
                    <StoreButtons />
                </div>

                {/* Fish image */}
                <Image
                    src={Fish}
                    alt="Fish"
                    className="w-3/6 md:ml-auto"
                />
            </div>
        </section>
    );
}
