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
        <section className="bg-gradient-to-r from-teal-500 to-teal-950 flex items-center min-h-screen">
            <div className="mx-10 flex items-center">
                <div className="w-1/3 mr-auto">
                    <Title
                        text={callToActionDict.primaryHeader}
                        style="text-white mb-2"
                    />
                    <StoreButtons />
                </div>

                <Image
                    src={Fish}
                    alt="Fish"
                    className="w-2xl"
                />
            </div>
        </section>
    );
}
