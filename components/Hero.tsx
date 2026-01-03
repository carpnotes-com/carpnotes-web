import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-[779px]">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <Image
                    src="http://localhost:3845/assets/717b9474d0985b5396fa5a97a6ea540bfe231276.png"
                    alt="Carp fishing background"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-[rgba(11,59,66,0.4)]" />
            </div>

            {/* Blur overlay */}
            <div className="absolute inset-0 backdrop-blur-[3px] bg-[rgba(0,0,0,0.05)]" />

            {/* Content */}
            <div className="relative z-10 px-[60px] pt-[233.5px] flex gap-[110px] items-start max-w-[1280px] mx-auto">
                {/* Text and buttons */}
                <div className="flex flex-col gap-[24px] w-[465px]">
                    <div className="flex flex-col gap-[16px] text-white w-[400px]">
                        <h1 className="font-dmSans font-medium text-[70px] leading-[1.1] tracking-[-1.4px]">
                            Every Catch Has a Story.
                        </h1>
                        <p className="font-dmSans text-[22px] leading-[1.3]">
                            Track your catches, share your stories, and connect with anglers like you — all in one place.
                        </p>
                    </div>

                    {/* Download buttons */}
                    <div className="flex gap-[9px]">
                        <button className="bg-black border border-[#a6a6a6] h-[40px] w-[120px] rounded-[6px] flex items-center justify-center overflow-hidden hover:bg-gray-900 transition-colors">
                            <div className="flex items-center gap-[7px]">
                                <Image
                                    src="http://localhost:3845/assets/83eae7f898981e79d40f4e44ef351c383f04ad32.svg"
                                    alt="Google Play"
                                    width={21}
                                    height={24}
                                    unoptimized
                                />
                                <Image
                                    src="http://localhost:3845/assets/c8b0f6e083444110d2cc7b09fa9ccd01b640564f.svg"
                                    alt="Get it on Google Play"
                                    width={74}
                                    height={27}
                                    unoptimized
                                />
                            </div>
                        </button>

                        <button className="bg-black border border-[#a6a6a6] h-[40px] w-[120px] rounded-[6px] flex items-center justify-center overflow-hidden hover:bg-gray-900 transition-colors">
                            <div className="flex items-center gap-[7px]">
                                <Image
                                    src="http://localhost:3845/assets/97af1996fad0727665db0ec642ec764f88a96eb7.svg"
                                    alt="Apple"
                                    width={20}
                                    height={24}
                                    unoptimized
                                />
                                <Image
                                    src="http://localhost:3845/assets/a5274f78f92d5b0892f8de31f1c38eda9789f564.svg"
                                    alt="Download on the App Store"
                                    width={78}
                                    height={25}
                                    unoptimized
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Phone screenshots */}
                <div className="relative w-[474.5px] h-[510.45px] mt-[81px]">
                    {/* Left phone (Social Feed) */}
                    <div className="absolute left-0 top-[54.46px] w-[264.8px] h-[456px]">
                        <div className="rotate-[-9deg] origin-center">
                            <div className="bg-white border-4 border-white rounded-[8px] shadow-[0px_40px_80px_0px_rgba(0,0,0,0.04),0px_20px_40px_0px_rgba(0,0,0,0.12)] w-[200px] h-[430px] overflow-hidden">
                                <Image
                                    src="http://localhost:3845/assets/c5690bc3075193409b04f248b9c10f43760e2c27.png"
                                    alt="Social Feed"
                                    width={202}
                                    height={739}
                                    className="object-cover object-center"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right phone (Sessions list) */}
                    <div className="absolute right-0 top-0 w-[257.9px] h-[453.65px]">
                        <div className="rotate-[8deg] origin-center">
                            <div className="bg-white border-4 border-white rounded-[8px] shadow-[0px_40px_80px_0px_rgba(0,0,0,0.04),0px_20px_40px_0px_rgba(0,0,0,0.12)] w-[200px] h-[430px] overflow-hidden">
                                <Image
                                    src="http://localhost:3845/assets/7a4f95d2ed92984abeec3505d2dc54349dcb8904.png"
                                    alt="Sessions list"
                                    width={209}
                                    height={442}
                                    className="object-cover object-center"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
