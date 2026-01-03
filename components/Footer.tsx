import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#1c96a8] to-[#0b3b42] w-full">
            {/* CTA Section */}
            <div className="flex gap-[110px] items-center px-[60px] pt-[140px] pb-[92px] max-w-[1280px] mx-auto">
                {/* Text and buttons */}
                <div className="flex flex-col gap-[24px] w-[465px]">
                    <h2 className="font-dmSans font-medium text-[44px] leading-[1.1] tracking-[-0.88px] text-white">
                        Log Your Sessions. Improve Your Skills. Download Today.
                    </h2>

                    {/* Download buttons */}
                    <div className="flex gap-[9px]">
                        <button className="bg-black border border-[#a6a6a6] h-[40px] w-[120px] rounded-[6px] flex items-center justify-center overflow-hidden hover:bg-gray-900 transition-colors">
                            <div className="flex items-center gap-[7px]">
                                <Image
                                    src="/assets/83eae7f898981e79d40f4e44ef351c383f04ad32.svg"
                                    alt="Google Play"
                                    width={21}
                                    height={24}
                                    unoptimized
                                />
                                <Image
                                    src="/assets/c8b0f6e083444110d2cc7b09fa9ccd01b640564f.svg"
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
                                    src="/assets/97af1996fad0727665db0ec642ec764f88a96eb7.svg"
                                    alt="Apple"
                                    width={20}
                                    height={24}
                                    unoptimized
                                />
                                <Image
                                    src="/assets/a5274f78f92d5b0892f8de31f1c38eda9789f564.svg"
                                    alt="Download on the App Store"
                                    width={78}
                                    height={25}
                                    unoptimized
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 relative aspect-[1536/1024]">
                    <Image
                        src="/assets/ec44a27702fba673fc9fc5ec826dda56efc190b1.png"
                        alt="Carp fishing"
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
            </div>

            {/* Footer bottom */}
            <div className="bg-[rgba(0,0,0,0.1)] border-t border-[rgba(255,255,255,0.1)]">
                <div className="flex items-center justify-between px-[60px] py-[32px] max-w-[1280px] mx-auto">
                    <p className="font-dmSans font-medium text-[14px] text-white">
                        © 2025 CarpNotes
                    </p>

                    {/* Social icons */}
                    <div className="flex gap-[8px]">
                        <a href="#" className="w-[24px] h-[24px] hover:opacity-80 transition-opacity">
                            <Image
                                src="/assets/9e3fa180f3610ed1580709557a9650b325afd256.svg"
                                alt="TikTok"
                                width={24}
                                height={24}
                                unoptimized
                            />
                        </a>
                        <a href="#" className="w-[24px] h-[24px] hover:opacity-80 transition-opacity">
                            <Image
                                src="/assets/64d5c53006965f50e036f236ea7b967b87e181ee.svg"
                                alt="Instagram"
                                width={24}
                                height={24}
                                unoptimized
                            />
                        </a>
                        <a href="#" className="w-[24px] h-[24px] hover:opacity-80 transition-opacity">
                            <Image
                                src="/assets/487484606dd3331f44ca0bde94934def5d6e4d15.svg"
                                alt="Facebook"
                                width={24}
                                height={24}
                                unoptimized
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
