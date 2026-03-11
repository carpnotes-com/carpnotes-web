import Image from "next/image";
import Link from "next/link";
import ReadTime from "@/components/ReadTime";
import DateOfPost from "@/components/DateOfPost";
import Button from "@/components/Button";
import ArticleCard from "@/components/ArticleCard";
import ArrowLeft from "@/public/assets/arrow-left.svg";
import ArrowRight from "@/public/assets/arrow-right.svg";
import { getArticles, getCountArticles, getFeaturedArticle } from "@/server/database-functions";
import { formatToDate } from "@/server/backend-functions";

type searchParamsType = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ArticlesPage({ searchParams }: { searchParams: searchParamsType }) {
    const params = await searchParams;
    const currentPageNumber = Number(params.page) || 1;
    const pageSize = 8;

    const from = (currentPageNumber - 1) * pageSize;
    const to = from + pageSize - 1

    const { articles } = await getArticles(pageSize, from, to);
    const { countArticles } = await getCountArticles();
    const { featuredArticle } = await getFeaturedArticle();

    const featuredArticleFormattedDate = formatToDate(featuredArticle.date);

    const endPageNumber = Math.ceil(countArticles / pageSize);

    var isFirstArticleAppeared = false;

    return (
        <main>
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
                                    className="absolute bottom-0 left-0 right-0 rounded-[16px] backdrop-blur mask-[linear-gradient(to_top,black_30%,transparent_100%)] h-full"
                                    style={{
                                        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)"
                                    }}
                                >
                                </div>
                                <div className="absolute flex flex-col gap-[32px] bottom-0 p-12">
                                    {/* Badges */}
                                    <div className="flex gap-[8px]">
                                        <DateOfPost
                                            date={featuredArticleFormattedDate}
                                        />
                                        <ReadTime
                                            readTime={featuredArticle.read_time}
                                        />
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
                                    <Button
                                        href={`articles/${featuredArticle.slug}`}
                                        text="Read Article"
                                        additionalStyles="mr-auto"
                                    />
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
                    {articles ? (
                        <>
                            <div className="flex justify-around gap-[32px] h-[534px]">
                                {articles.slice(0, 2).map((article, index) => (
                                    <div className={`${!isFirstArticleAppeared && index == 0 ? `flex-1` : `w-[365.33px]`}`} key={article.id}>
                                        <ArticleCard
                                            image={article.image_url}
                                            title={article.title}
                                            readTime={article.read_time}
                                            href={`/articles/${article.slug}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-around gap-[32px] h-[534px]">
                                {articles.slice(2, 5).map((article) => (
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
                            <div className="flex justify-around gap-[32px] h-[534px]">
                                {articles.slice(5, 8).map((article) => (
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
                    <button className={`flex gap-[6px] px-[16px] py-[6px] ${currentPageNumber == 1 && `invisible`}`}>
                        <Link href={`articles?page=${currentPageNumber - 1}`} className="flex items-center">
                            <Image
                                src={ArrowLeft}
                                alt="Previous Page"
                                width={8}
                                height={8}
                                unoptimized
                            />
                            <span className="font-dmSans text-[16px] leading-[1.2] text-[#5e6d7a] pl-1">
                                Previous
                            </span>
                        </Link>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex gap-[11px] items-center">
                        <div className={`px-[16px] py-[6px] ${currentPageNumber == 1 && `invisible`}`}>
                            <span className="font-dmSans text-[16px] leading-[1.2] text-[#1f1f1f]">{currentPageNumber - 1}</span>
                        </div>
                        <div className="bg-white border border-[#5e6d7a] rounded-[4px] px-[16px] py-[6px]">
                            <span className="font-dmSans text-[16px] leading-[1.2] text-[#1f1f1f]">{currentPageNumber}</span>
                        </div>
                        <div className={`px-[16px] py-[6px] ${currentPageNumber == endPageNumber && `invisible`}`}>
                            <span className="font-dmSans text-[16px] leading-[1.2] text-[#1f1f1f]">{currentPageNumber + 1}</span>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button className={`flex gap-[6px] items-center px-[16px] py-[6px] ${currentPageNumber == endPageNumber && `invisible`}`}>
                        <Link href={`articles?page=${currentPageNumber + 1}`} className="flex items-center">
                            <span className="font-dmSans text-[16px] leading-[1.2] text-[#5e6d7a] pr-1">
                                Next
                            </span>
                            <Image
                                src={ArrowRight}
                                alt="Next Page"
                                width={8}
                                height={8}
                                unoptimized
                            />
                        </Link>
                    </button>
                </div>
            </section>
        </main>
    );
}
