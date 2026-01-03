import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ArticleCard from "../../../components/ArticleCard";

export default function ArticlesPage() {
    const featuredArticle = {
        image: "http://localhost:3845/assets/07d3cdfdaffa9938f3cb511e5fb804857fc13ac8.png",
        title: "From Notes to Big Catches: How Logging Sessions Improves Your Fishing",
        description: "Track your catches, share your stories, and connect with anglers like you — all in one place.",
        date: "25 jun 2025",
        readTime: "10 min read"
    };

    const articles = [
        {
            image: "http://localhost:3845/assets/10ac25e6b6242c21737fe9e48fd3583a26bff702.png",
            title: "Chasing the Dawn: Why Early Mornings Catch the Best Carp",
            readTime: "10 min read",
            slug: "chasing-dawn"
        },
        {
            image: "http://localhost:3845/assets/abc252f9d5f81d96c7eaaa1163dca5f08015a8e1.png",
            title: "5 Proven Bait Strategies Every Angler Should Know",
            readTime: "10 min read",
            slug: "bait-strategies"
        },
        {
            image: "http://localhost:3845/assets/f157db25f0e6b1de4206bb937365df5de3b22bc1.png",
            title: "Chasing the Dawn: Why Early Mornings Catch the Best Carp",
            readTime: "10 min read",
            slug: "chasing-dawn"
        },
        {
            image: "http://localhost:3845/assets/422ed7c17fad2eefefee5a35d8127483a22e677b.png",
            title: "From Notes to Big Catches: How Logging Sessions Improves Your Fishing",
            readTime: "10 min read",
            slug: "logging-sessions"
        },
        {
            image: "http://localhost:3845/assets/ca0bc6891617a56390e000002fce084c1e716ed1.png",
            title: "5 Proven Bait Strategies Every Angler Should Know",
            readTime: "10 min read",
            slug: "bait-strategies"
        },
        {
            image: "http://localhost:3845/assets/a681db1a9ed6d6a10eab867c5b7c66b660bbd426.png",
            title: "Chasing the Dawn: Why Early Mornings Catch the Best Carp",
            readTime: "10 min read",
            slug: "chasing-dawn"
        },
        {
            image: "http://localhost:3845/assets/ce93da8d2963f4b1f487430b25d4cdc3329bf9c3.png",
            title: "From Notes to Big Catches: How Logging Sessions Improves Your Fishing",
            readTime: "10 min read",
            slug: "logging-sessions"
        },
        {
            image: "http://localhost:3845/assets/2fc2f7e8154db70c2df70d8928db05f4a13918ce.png",
            title: "5 Proven Bait Strategies Every Angler Should Know",
            readTime: "10 min read",
            slug: "bait-strategies"
        }
    ];

    return (
        <main className="bg-white">
            <Header />

            {/* Featured Article Hero */}
            <section className="flex flex-col items-center pb-[219px] pt-0">
                {/* Background accent strip */}
                <div className="bg-[#f5dfbe] h-[299px] w-full mb-[-219px]" />

                {/* Featured card */}
                <div className="relative w-[1160px] mb-[-219px] z-10">
                    <div className="relative h-[490px] rounded-[16px] overflow-hidden">
                        {/* Background image */}
                        <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-[rgba(16,74,84,0.6)]" />

                        {/* Content */}
                        <div
                            className="absolute bottom-0 left-0 right-0 backdrop-blur-md p-[60px] rounded-[16px]"
                            style={{
                                backgroundImage: "linear-gradient(179.864deg, rgba(0, 0, 0, 0) 0.33606%, rgba(0, 0, 0, 0.4) 99.663%)"
                            }}
                        >
                            <div className="flex flex-col gap-[32px]">
                                {/* Badges */}
                                <div className="flex gap-[8px]">
                                    <div className="bg-[rgba(255,255,255,0.1)] rounded-[12px] px-[6px] py-[4px] flex items-center gap-[4px]">
                                        <Image
                                            src="http://localhost:3845/assets/b34f8013423404fc00107d84d6c3f8c752dd6713.svg"
                                            alt="Calendar"
                                            width={16}
                                            height={16}
                                            unoptimized
                                        />
                                        <span className="font-dmSans text-[12px] leading-[1.3] text-white">
                                            {featuredArticle.date}
                                        </span>
                                    </div>
                                    <div className="bg-[rgba(255,255,255,0.1)] rounded-[12px] px-[6px] py-[4px] flex items-center gap-[4px]">
                                        <Image
                                            src="http://localhost:3845/assets/ec817c4f10ab6ddfc7b769dae1838c6183e25e9f.svg"
                                            alt="Time"
                                            width={16}
                                            height={16}
                                            unoptimized
                                        />
                                        <span className="font-dmSans text-[12px] leading-[1.3] text-white">
                                            {featuredArticle.readTime}
                                        </span>
                                    </div>
                                </div>

                                {/* Title & Description */}
                                <div className="flex flex-col gap-[16px]">
                                    <h1 className="font-dmSans font-medium text-[44px] leading-[1.1] tracking-[-0.88px] text-white w-[860px]">
                                        {featuredArticle.title}
                                    </h1>
                                    <p className="font-dmSans text-[22px] leading-[1.3] text-[#e9ebea] w-[683px]">
                                        {featuredArticle.description}
                                    </p>
                                </div>

                                {/* Read Article Button */}
                                <button className="bg-[rgba(245,223,190,0.1)] border border-[#dcc49f] rounded-[16px] px-[12px] py-[6px] flex items-center gap-[10px] w-fit hover:bg-[rgba(245,223,190,0.2)] transition-colors">
                                    <span className="font-dmSans font-medium text-[18px] text-[#dbbb88]">
                                        Read Article
                                    </span>
                                    <Image
                                        src="http://localhost:3845/assets/0536ba37faa2ec86154077d8dd35a195ed1da107.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                        unoptimized
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="max-w-[1280px] mx-auto px-[60px] py-[120px] pt-[20px]">
                <h2 className="font-dmSans font-medium text-[44px] leading-[1.1] tracking-[-0.88px] text-[#1f1f1f] mb-[40px] w-[805px]">
                    Tips, Stories & Insights for Every Angler
                </h2>

                {/* Cards Container */}
                <div className="flex flex-col gap-[32px] mb-[40px]">
                    {/* Row 1: 2 cards (wider left) */}
                    <div className="flex gap-[32px] h-[534px]">
                        <div className="flex-1">
                            <ArticleCard
                                image={articles[0].image}
                                title={articles[0].title}
                                readTime={articles[0].readTime}
                                href={`/articles/${articles[0].slug}`}
                            />
                        </div>
                        <div className="w-[365.33px]">
                            <ArticleCard
                                image={articles[1].image}
                                title={articles[1].title}
                                readTime={articles[1].readTime}
                                href={`/articles/${articles[1].slug}`}
                            />
                        </div>
                    </div>

                    {/* Row 2: 3 equal cards */}
                    <div className="flex gap-[32px] h-[534px]">
                        <div className="flex-1">
                            <ArticleCard
                                image={articles[2].image}
                                title={articles[2].title}
                                readTime={articles[2].readTime}
                                href={`/articles/${articles[2].slug}`}
                            />
                        </div>
                        <div className="flex-1">
                            <ArticleCard
                                image={articles[3].image}
                                title={articles[3].title}
                                readTime={articles[3].readTime}
                                href={`/articles/${articles[3].slug}`}
                            />
                        </div>
                        <div className="flex-1">
                            <ArticleCard
                                image={articles[4].image}
                                title={articles[4].title}
                                readTime={articles[4].readTime}
                                href={`/articles/${articles[4].slug}`}
                            />
                        </div>
                    </div>

                    {/* Row 3: 3 equal cards */}
                    <div className="flex gap-[32px] h-[534px]">
                        <div className="flex-1">
                            <ArticleCard
                                image={articles[5].image}
                                title={articles[5].title}
                                readTime={articles[5].readTime}
                                href={`/articles/${articles[5].slug}`}
                            />
                        </div>
                        <div className="flex-1">
                            <ArticleCard
                                image={articles[6].image}
                                title={articles[6].title}
                                readTime={articles[6].readTime}
                                href={`/articles/${articles[6].slug}`}
                            />
                        </div>
                        <div className="flex-1">
                            <ArticleCard
                                image={articles[7].image}
                                title={articles[7].title}
                                readTime={articles[7].readTime}
                                href={`/articles/${articles[7].slug}`}
                            />
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex gap-[21px] items-center justify-center">
                    {/* Previous Button */}
                    <button className="flex gap-[6px] items-center px-[16px] py-[6px]">
                        <Image
                            src="http://localhost:3845/assets/413a5294f7f093a01763fa73e872feb73e1c150d.svg"
                            alt=""
                            width={24}
                            height={24}
                            unoptimized
                        />
                        <span className="font-dmSans text-[16px] leading-[1.2] text-[#5e6d7a]">
                            Previous
                        </span>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex gap-[11px] items-center">
                        <div className="bg-white border border-[#5e6d7a] rounded-[4px] px-[16px] py-[6px]">
                            <span className="font-dmSans text-[16px] leading-[1.2] text-[#1f1f1f]">1</span>
                        </div>
                        <div className="px-[16px] py-[6px]">
                            <span className="font-dmSans text-[16px] leading-[1.2] text-[#1f1f1f]">2</span>
                        </div>
                        <div className="px-[16px] py-[6px]">
                            <span className="font-dmSans text-[16px] leading-[1.2] text-[#1f1f1f]">3</span>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button className="flex gap-[6px] items-center px-[16px] py-[6px]">
                        <span className="font-dmSans text-[16px] leading-[1.2] text-[#5e6d7a]">
                            Next
                        </span>
                        <Image
                            src="http://localhost:3845/assets/351b2289d97dc80d9ee3b87c4e4b99c18ad5f5c7.svg"
                            alt=""
                            width={24}
                            height={24}
                            unoptimized
                        />
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
