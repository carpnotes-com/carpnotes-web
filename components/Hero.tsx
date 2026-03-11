import Image from "next/image";
import StoreButtons from "@/components/StoreButtons";
import HeroBackground from "@/public/assets/hero.jpg"
import PhoneLeft from "@/public/assets/phone-left.png";
import PhoneRight from "@/public/assets/phone-right.png";

export default function Hero() {
    return (
        <section>
            <div
                className="flex bg-cover min-h-screen"
                style={{ backgroundImage: `url(${HeroBackground.src})` }}
            >
                <div className="flex items-center mx-10 w-full">
                    <div className='flex flex-col w-xl'>
                        <div className='text-white text-7xl'>
                            Every Catch Has a Story.
                        </div>
                        <div className='text-white text-lg my-6'>
                            Track your catches, share your stories, and connect with anglers like you — all in one place.
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
