import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleCard from "../../components/ArticleCard";
import { getArticles, getFeaturedArticle } from "../../server/database-functions";

export default async function ArticlesPage() {
    const { articles, errorArticles } = await getArticles(8);
    const { featuredArticle, errorFeaturedArticle } = await getFeaturedArticle();

    return (
        <main className="bg-white">
            <Header />
            {featuredArticle && (
                <>
                    {/* Featured Article Hero */}
                    <section className="flex flex-col items-center pb-[219px] pt-0">
                        {/* Background accent strip */}
                        <div className="bg-[#f5dfbe] h-[299px] w-full mb-[-219px]" />
                        {/* Featured card */}
                        <div className="relative w-[1160px] mb-[-219px] z-10">
                            <div className="relative h-[490px] rounded-[16px] overflow-hidden">
                                {/* Background image */}
                                <Image
                                    src={featuredArticle.image_url}
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
                                                <span className="font-dmSans text-[12px] leading-[1.3] text-white">
                                                    {featuredArticle.date}
                                                </span> 
                                            </div>
                                            <div className="bg-[rgba(255,255,255,0.1)] rounded-[12px] px-[6px] py-[4px] flex items-center gap-[4px]">
                                                <Image
                                                    src="/assets/watch.png"
                                                    alt="Time"
                                                    width={16}
                                                    height={16}
                                                    unoptimized
                                                />
                                                <span className="font-dmSans text-[12px] leading-[1.3] text-white">
                                                    {featuredArticle.read_time} min to read
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
                                        <Link href={featuredArticle.slug}>
                                            <button className="bg-[rgba(245,223,190,0.1)] border border-[#dcc49f] rounded-[16px] px-[12px] py-[6px] flex items-center gap-[10px] w-fit hover:bg-[rgba(245,223,190,0.2)] transition-colors">
                                                <span className="font-dmSans font-medium text-[18px] text-[#dbbb88]">
                                                        Read Article
                                                </span>
                                                <Image
                                                    src="/assets/arrow.png"
                                                    alt=""
                                                    width={16}
                                                    height={16}
                                                    unoptimized
                                                />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Articles Grid */}
            <section className="max-w-[1280px] mx-auto px-[60px] py-[120px] pt-[20px]">
                <h2 className="font-dmSans font-medium text-[44px] leading-[1.1] tracking-[-0.88px] text-[#1f1f1f] mb-[40px] w-[805px]">
                    Tips, Stories & Insights for Every Angler
                </h2>

                {/* Cards Container */}
                <div className="flex flex-col gap-[32px] mb-[40px]">
                    {articles.length > 0 ? (
                        <>
                            {/* Row 1: 2 cards (wider left) */}
                            <div className="flex gap-[32px] h-[534px]">
                                <div className="flex-1">
                                    <ArticleCard
                                        image={articles[0].image_url}
                                        title={articles[0].title}
                                        readTime={articles[0].read_time}
                                        href={`/articles/${articles[0].slug}`}
                                    />
                                </div>
                                <div className="w-[365.33px]">
                                    <ArticleCard
                                        image={articles[1].image_url}
                                        title={articles[1].title}
                                        readTime={articles[1].read_time}
                                        href={`/articles/${articles[1].slug}`}
                                    />
                                </div>
                            </div>

                            {/* Row 2: 3 equal cards */}
                            <div className="flex gap-[32px] h-[534px]">
                                {articles?.slice(1, 4).map((article) => (
                                    <div className="flex-1" key={article.id}>
                                        <ArticleCard
                                            image={article.image_url}
                                            title={article.title}
                                            readTime={article.read_time}
                                            href={`/articles/${article.slug}`}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Row 3: 3 equal cards */}
                            <div className="flex gap-[32px] h-[534px]">
                                {articles?.slice(4, 7).map((article) => (
                                    <div className="flex-1" key={article.id}>
                                        <ArticleCard
                                            image={article.image_url}
                                            title={article.title}
                                            readTime={article.read_time}
                                            href={`/articles/${article.slug}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="flex justify-center text-black text-xl h-screen">
                            <p>No articles for now.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex gap-[21px] items-center justify-center">
                    {/* Previous Button */}
                    <button className="flex gap-[6px] items-center px-[16px] py-[6px]">
                        <Image
                            src="/assets/arrow-left.png"
                            alt=""
                            width={8}
                            height={8}
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
                            src="/assets/arrow-right.png"
                            alt=""
                            width={8}
                            height={8}
                            unoptimized
                        />
                    </button>
                </div>
            </section>
            <Footer />
        </main>
    );
}
