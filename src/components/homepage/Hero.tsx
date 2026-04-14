import Image from "next/image";
import StoreButtons from "@/src/components/page-components/StoreButtons";
import HeroBackground from "@/public/assets/hero.jpg";
import PhoneLeft from "@/public/assets/phone-left.png";
import PhoneRight from "@/public/assets/phone-right.png";

interface PageProps {
    heroDict: {
        primaryHeader: string,
        secondaryHeader: string,
    }
};

export default function Hero({ heroDict }: PageProps) {
    return (
        <section className="
        overflow-hidden
        ">

            {/* Background mobile / dekstop */}
            <div className="
            flex bg-linear-to-r from-teal-600 to-teal-950 bg-cover max-w-full 
            md:bg-[url('/assets/hero.jpg')] md:min-h-screen
            "
            >

                {/* Content */}
                <div className="
                flex flex-col-reverse mx-6 mt-15 w-full
                md:items-center md:flex-row md:mx-10 md:mt-0
                ">
                    {/* Headers with store buttons */}
                    <div className="
                    flex flex-col w-full gap-4 mt-5 mb-12
                    md:w-lg md:mt-0 md:mb-0
                    ">

                        {/* Primary header */}
                        <div className="
                        text-white text-4xl text-center
                        md:text-7xl md:text-left
                        ">
                            {heroDict.primaryHeader}
                        </div>

                        {/* Secondary header */}
                        <div className="
                        text-white text-lg text-center
                        md:text-left
                        ">
                            {heroDict.secondaryHeader}
                        </div>

                        {/* Store buttons */}
                        <StoreButtons />
                    </div>

                    {/* Phone images */}
                    <div className="
                    flex ml-auto mt-10
                    md:mt-0
                    ">

                        {/* Left phone */}
                        <div>
                            <Image
                                src={PhoneLeft}
                                alt="PhoneRight"
                                className="
                                rounded-xl -rotate-5 mt-10 shadow-xl
                                md:w-60 md:rounded-3xl
                                "
                            />
                        </div>

                        {/* Right phone */}
                        <div>
                            <Image
                                src={PhoneRight}
                                alt="PhoneRight"
                                className="
                                rounded-xl rotate-5 mb-10 shadow-xl
                                md:w-60 md:rounded-3xl
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
