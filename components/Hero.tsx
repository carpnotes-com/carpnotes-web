import Image from "next/image";
import StoreButtons from "./StoreButtons";

export default function Hero() {
    return (
        <section>
            <Image
                src={'/assets/Hero.jpg'}
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
                        src={'/assets/phone-right.png'}
                        alt='PhoneRight'
                        className='w-60 rounded-3xl -rotate-5'
                    />
                    <Image
                        src={'/assets/phone-right.png'}
                        alt='PhoneRight'
                        className='w-60 rounded-3xl rotate-5'
                    />
                </div>
            </div>
        </section>
    );
}
