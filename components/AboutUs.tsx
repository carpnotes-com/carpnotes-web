import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="bg-white px-[60px] py-[100px]">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex gap-[32px]">
                    {/* Text content */}
                    <div className="flex-1 flex flex-col gap-[32px] text-[#1f1f1f]">
                        <h2 className="font-dmSans font-medium text-[44px] leading-[1.1] tracking-[-0.88px] w-[546px]">
                            Where Our Journey Began
                        </h2>

                        <div className="font-dmSans text-[22px] leading-[1.3] w-[564px] space-y-[32px]">
                            <p>
                                The story began on May 16, 2009, with the first carp catch — a moment that sparked a passion for fishing. From quiet mornings to the thrill of a perfect catch, we have always seen fishing as a way of life.
                            </p>
                            <p>
                                Over time, we tracked patterns and shared stories, but no tool truly captured how anglers think and learn. That is why we built Carp Notes — an app made by anglers, for anglers.
                            </p>

                            <p>
                                We are a small team who values every cast and bite. Carp Notes helps log sessions, reflect, and catch smarter. This is just the beginning, and we are excited to grow with the fishing community.
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex flex-col gap-[12px] w-[465px]">
                        <div className="relative w-full h-[534px] rounded-[16px] overflow-hidden">
                            <Image
                                src="/assets/794ec8c2034714e83937b740b8e2634f55b08b23.png"
                                alt="Kostiantyn & Alex – Founders of CarpNote"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        <p className="font-dmSans text-[16px] leading-[1.4] text-[#1f1f1f] text-center">
                            Kostiantyn & Alex – Founder of CarpNote
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
