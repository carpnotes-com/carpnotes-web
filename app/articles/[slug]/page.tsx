import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function ArticleDetailPage() {
    const recommendedArticles = [
        {
            image: "/assets/f157db25f0e6b1de4206bb937365df5de3b22bc1.png",
            title: "Chasing the Dawn: Why Early Mornings Catch the Best Carp",
            readTime: "10 min read",
            slug: "chasing-dawn"
        },
        {
            image: "/assets/422ed7c17fad2eefefee5a35d8127483a22e677b.png",
            title: "From Notes to Big Catches: How Logging Sessions Improves Your Fishing",
            readTime: "10 min read",
            slug: "logging-sessions"
        },
        {
            image: "/assets/ca0bc6891617a56390e000002fce084c1e716ed1.png",
            title: "5 Proven Bait Strategies Every Angler Should Know",
            readTime: "10 min read",
            slug: "bait-strategies"
        }
    ];

    return (
        <main className="bg-white">
            <Header />

            {/* Hero Section */}
            <section className="w-full h-[700px] relative">
                <div className="relative w-full h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0 rounded-bl-[62px] rounded-br-[62px] overflow-hidden">
                        <Image
                            src="/assets/99cdedb044b2585554ce80f7bcc310c374b45b55.png"
                            alt="Article hero"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-[rgba(16,74,84,0.6)]" />
                    </div>

                    {/* Content */}
                    <div
                        className="absolute bottom-0 left-0 right-0 backdrop-blur-md p-[80px] rounded-bl-[62px] rounded-br-[62px]"
                        style={{
                            backgroundImage: "linear-gradient(179.885deg, rgba(0, 0, 0, 0) 0.33606%, rgba(0, 0, 0, 0.4) 99.663%)"
                        }}
                    >
                        <div className="flex items-end justify-between w-full">
                            {/* Text & Badges */}
                            <div className="flex flex-col gap-[24px]">
                                {/* Badges */}
                                <div className="flex gap-[8px]">
                                    <div className="bg-[rgba(255,255,255,0.1)] rounded-[12px] px-[6px] py-[4px] flex items-center gap-[4px]">
                                        <Image
                                            src="/assets/b34f8013423404fc00107d84d6c3f8c752dd6713.svg"
                                            alt="Calendar"
                                            width={16}
                                            height={16}
                                            unoptimized
                                        />
                                        <span className="font-dmSans text-[12px] leading-[1.3] text-white">
                                            25 jun 2025
                                        </span>
                                    </div>
                                    <div className="bg-[rgba(255,255,255,0.1)] rounded-[12px] px-[6px] py-[4px] flex items-center gap-[4px]">
                                        <Image
                                            src="/assets/ec817c4f10ab6ddfc7b769dae1838c6183e25e9f.svg"
                                            alt="Time"
                                            width={16}
                                            height={16}
                                            unoptimized
                                        />
                                        <span className="font-dmSans text-[12px] leading-[1.3] text-white">
                                            10 min read
                                        </span>
                                    </div>
                                </div>

                                {/* Title & Description */}
                                <div className="flex flex-col gap-[16px]">
                                    <h1 className="font-dmSans font-medium text-[44px] leading-[1.1] tracking-[-0.88px] text-white w-[860px]">
                                        From Notes to Big Catches: How Logging Sessions Improves Your Fishing
                                    </h1>
                                    <p className="font-dmSans text-[22px] leading-[1.3] text-[#e9ebea] w-[683px]">
                                        Discover how tracking conditions, baits, and patterns turns every fishing trip into valuable insights for bigger catches.
                                    </p>
                                </div>
                            </div>

                            {/* Share Section */}
                            <div className="flex flex-col gap-[8px] items-start">
                                <p className="font-dmSans text-[12px] leading-[1.3] text-white">
                                    Share:
                                </p>
                                <div className="flex gap-[8px]">
                                    <button className="w-[32px] h-[32px] relative overflow-hidden">
                                        <Image
                                            src="/assets/64d5c53006965f50e036f236ea7b967b87e181ee.svg"
                                            alt="TikTok"
                                            width={32}
                                            height={32}
                                            unoptimized
                                        />
                                    </button>
                                    <button className="w-[32px] h-[32px] relative overflow-hidden">
                                        <Image
                                            src="/assets/487484606dd3331f44ca0bde94934def5d6e4d15.svg"
                                            alt="Instagram"
                                            width={32}
                                            height={32}
                                            unoptimized
                                        />
                                    </button>
                                    <button className="w-[32px] h-[32px] relative overflow-hidden">
                                        <Image
                                            src="/assets/d51550a5d6e8a9c48fa99e8fd122267613b8b4f8.svg"
                                            alt="Facebook"
                                            width={32}
                                            height={32}
                                            unoptimized
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="max-w-[1280px] mx-auto px-[60px] py-[80px] pb-[120px]">
                <div className="flex flex-col gap-[40px] items-center">
                    {/* Text Block 1 */}
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[16px] w-[762px]">
                            <h2 className="font-dmSans font-medium text-[32px] leading-[1.3] text-[#1f1f1f]">
                                Why Logging Matters
                            </h2>
                            <p className="font-dmSans text-[18px] leading-[1.4] text-[#545454]">
                                Fishing is more than casting a line and waiting for a bite. Every trip holds valuable insights: the weather, water temperature, bait choice, time of day, and even small details like wind direction. Logging these factors transforms random outings into a learning process, helping anglers see patterns that might otherwise go unnoticed.
                            </p>
                        </div>

                        <div className="flex flex-col gap-[16px] w-[762px]">
                            <h2 className="font-dmSans font-medium text-[32px] leading-[1.3] text-[#1f1f1f]">
                                Spotting Patterns in the Chaos
                            </h2>
                            <p className="font-dmSans text-[18px] leading-[1.4] text-[#545454]">
                                When you write down your observations after each session, you begin to connect the dots. Maybe carp bite more actively at dawn when the water is calm, or perhaps a certain bait works best in cloudy weather. Over time, these notes become a personal guidebook, turning experience into knowledge that leads to smarter decisions and bigger catches.
                            </p>
                        </div>

                        <div className="flex flex-col gap-[16px] w-[762px]">
                            <h2 className="font-dmSans font-medium text-[32px] leading-[1.3] text-[#1f1f1f]">
                                Building Consistency
                            </h2>
                            <p className="font-dmSans text-[18px] leading-[1.4] text-[#545454]">
                                Catching fish often comes down to consistency. By reviewing past sessions, anglers can repeat what worked and avoid mistakes. Logging allows you to refine your tactics: adjusting rigs, testing new baits, and perfecting your timing. Instead of guessing, you rely on proven data from your own experience.
                            </p>
                        </div>
                    </div>

                    {/* Text Block 2 */}
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[16px] w-[762px]">
                            <h2 className="font-dmSans font-medium text-[32px] leading-[1.3] text-[#1f1f1f]">
                                Sharing and Learning Together
                            </h2>
                            <p className="font-dmSans text-[18px] leading-[1.4] text-[#545454]">
                                Notes are not just personal — they can strengthen the fishing community. Sharing logs, insights, and success stories with fellow anglers helps everyone grow. What works for one lake may inspire someone else at another. Together, anglers build a pool of collective knowledge that pushes the sport forward.
                            </p>
                        </div>

                        <div className="flex flex-col gap-[16px] w-[762px]">
                            <h2 className="font-dmSans font-medium text-[32px] leading-[1.3] text-[#1f1f1f]">
                                The Role of Digital Tools
                            </h2>
                            <p className="font-dmSans text-[18px] leading-[1.4] text-[#545454]">
                                While paper notebooks have their charm, digital tools like Carp Notes make logging easier, smarter, and more accessible. With just a few taps, you can record conditions, upload photos, and track results over time. Having all your data in one place ensures no valuable detail gets lost.
                            </p>
                        </div>

                        <div className="flex flex-col gap-[16px] w-[762px]">
                            <h2 className="font-dmSans font-medium text-[32px] leading-[1.3] text-[#1f1f1f]">
                                Final Thoughts
                            </h2>
                            <p className="font-dmSans text-[18px] leading-[1.4] text-[#545454]">
                                Fishing is a lifelong journey of learning. Logging your sessions is the bridge between casual outings and consistent success. By turning every trip into knowledge, you will find yourself not just fishing more often — but fishing better. And that is how notes lead to big catches.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recommended Articles */}
            <section className="bg-[#0b3c43] px-[60px] py-[80px] rounded-tl-[62px] rounded-tr-[62px]">
                <div className="max-w-[1280px] mx-auto">
                    <h2 className="font-dmSans font-medium text-[32px] leading-[1.3] text-white mb-[40px]">
                        Recommended for You
                    </h2>

                    <div className="flex gap-[32px] h-[534px]">
                        {recommendedArticles.map((article, index) => (
                            <div key={index} className="flex-1">
                                <ArticleCard
                                    image={article.image}
                                    topic={article.title}
                                    timeToRead={article.readTime}
                                    
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
