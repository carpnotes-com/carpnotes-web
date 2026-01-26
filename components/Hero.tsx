import Image from "next/image";
import Link from "next/link";
import StoreButtons from "./StoreButtons";
import HeroBackground from "../public/assets/Hero.jpg"
import PhoneLeft from "../public/assets/phone-left.png";
import PhoneRight from "../public/assets/phone-right.png";

export default function Hero() {
    return (
        <section>
            <Image
                src={HeroBackground}
                alt='Hero'
                className='w-full'
            />
            <div className="flex absolute inset-0 items-center mx-10">
                <div className='flex flex-col w-xl'>
                    <div className='text-white text-7xl'>
                        Every Catch Has a Story.
                    </div>
                    <div className='text-white text-lg my-6'>
                        Track your catches, share your stories, and connect with anglers like you — all in one place.
                    </div>
                    <StoreButtons/>
                </div>

                <div className='flex ml-auto px-12'>
                    <Image
                        src={PhoneRight}
                        alt='PhoneRight'
                        className='w-60 rounded-3xl -rotate-5'
                    />
                    <Image
                        src={PhoneRight}
                        alt='PhoneRight'
                        className='w-60 rounded-3xl rotate-5'
                    />
                </div>
            </div>
        </section>
    );
}
