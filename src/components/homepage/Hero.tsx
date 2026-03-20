import Image from "next/image";
import StoreButtons from "@/src/components/page-components/StoreButtons";
import HeroBackground from "@/public/assets/hero.jpg"
import PhoneLeft from "@/public/assets/phone-left.png";
import PhoneRight from "@/public/assets/phone-right.png";

interface PageProps {
    heroDict: {
        primaryHeader: string,
        secondaryHeader: string,
    },
};

export default function Hero({ heroDict }: PageProps) {
    return (
        <section>
            <div
                className="flex bg-cover min-h-screen"
                style={{ backgroundImage: `url(${HeroBackground.src})` }}
            >
                <div className="flex items-center mx-10 w-full">
                    <div className='flex flex-col w-xl'>
                        <div className='text-white text-7xl'>
                            {heroDict.primaryHeader}
                        </div>
                        <div className='text-white text-lg my-6'>
                            {heroDict.secondaryHeader}
                        </div>
                        <StoreButtons />
                    </div>

                    <div className='flex ml-auto'>
                        <Image
                            src={PhoneLeft}
                            alt='PhoneRight'
                            className='w-60 rounded-3xl -rotate-5 mt-10'
                        />
                        <Image
                            src={PhoneRight}
                            alt='PhoneRight'
                            className='w-60 rounded-3xl rotate-5 mb-10 shadow-xl'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
