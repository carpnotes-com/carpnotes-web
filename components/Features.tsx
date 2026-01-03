import Image from "next/image";

export default function Features() {
    const features = [
        {
            icon: "http://localhost:3845/assets/a368edf543c717b14d5cc4a5291f984e5687efc7.svg",
            title: "Discover",
            subtitle: "Find your next perfect lake",
            description: "Explore thousands of lakes across Europe with detailed information, maps, facilities, and fishing rules to plan your best session."
        },
        {
            icon: "http://localhost:3845/assets/535b9231e42d6b634e8c55576d2226c857e2ec57.svg",
            title: "Log",
            subtitle: "Track your catches like a pro",
            description: "Easily log fish sizes, bait types, and conditions. Build your personal fishing history and learn from every session."
        },
        {
            icon: "http://localhost:3845/assets/350a2ad3eaeed323f32fc3610b77e47e645a9d77.svg",
            title: "Connect",
            subtitle: "Share your journey with other anglers",
            description: "Join a growing community of carp enthusiasts. Share catches, swap tips, and get inspired by real fishing stories."
        }
    ];

    return (
        <section className="bg-white px-4 py-[60px] md:px-[60px] md:py-[100px]">
            <div className="max-w-[1280px] mx-auto">
                {/* Header */}
                <div className="flex flex-col gap-4 text-[#1f1f1f] w-full md:w-[564px] mb-10 md:mb-[40px]">
                    <h2 className="font-dmSans font-medium text-[32px] leading-[1.1] tracking-[-0.64px] md:text-[44px] md:tracking-[-0.88px]">
                        Your Next-Level Carp Fishing Journey
                    </h2>
                    <p className="font-dmSans text-base leading-[1.3] md:text-[22px]">
                        A place where passion meets precision, and community meets the great outdoors.
                    </p>
                </div>

                {/* Feature cards */}
                <div className="flex flex-col gap-6 md:flex-row md:gap-[32px]">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col w-full md:w-[365px]">
                            {/* Icon */}
                            <div className="h-[76px] w-[110px] overflow-hidden mb-6 md:mb-[24px]">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={110}
                                    height={76}
                                    unoptimized
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-3 md:gap-[12px]">
                                <div className="flex flex-col gap-[6px] text-[#1f1f1f]">
                                    <h3 className="font-dmSans font-medium text-2xl leading-[1.3] md:text-[32px]">
                                        {feature.title}
                                    </h3>
                                    <p className="font-dmSans text-lg leading-[1.4] md:text-[18px]">
                                        {feature.subtitle}
                                    </p>
                                </div>

                                {/* Separator */}
                                <div className="h-[1px] w-full">
                                    <Image
                                        src="http://localhost:3845/assets/631701c97adb57f5be4c73ae3788978c1cf674be.svg"
                                        alt=""
                                        width={365}
                                        height={1}
                                        unoptimized
                                    />
                                </div>

                                <p className="font-dmSans text-base leading-[1.2] text-[#5e6d7a] md:text-[16px]">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
