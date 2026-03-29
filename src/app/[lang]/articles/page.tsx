import Image from "next/image";
import Link from "next/link";
import ReadTime from "@/src/components/article-card/ReadTime";
import DateOfPost from "@/src/components/article-card/DateOfPost";
import Button from "@/src/components/page-components/Button";
import ArticleCard from "@/src/components/article-card/ArticleCard";
import ArrowLeft from "@/public/assets/arrow-left.svg";
import ArrowRight from "@/public/assets/arrow-right.svg";
import { getArticles, getCountArticles, getFeaturedArticle } from "@/src/lib/actions";
import { formatToDate } from "@/src/lib/formatFunctions";
import { Locale } from "@/src/lib/dictionaries";
import { getDictionary } from "@/src/lib/dictionaries";

type paramsType = Promise<{ lang: Locale }>;
type searchParamsType = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ArticlesPage(
    { params, searchParams }:
        { params: paramsType, searchParams: searchParamsType }
) {
    const { lang } = await params;
    const { page } = await searchParams;

    const localeDictionary = await getDictionary(lang);

    const currentPageNumber = Number(page) || 1;
    const pageSize = 8;

    const from = (currentPageNumber - 1) * pageSize;
    const to = from + pageSize - 1

    const { articles } = await getArticles(lang, pageSize, from, to);
    const { countArticles } = await getCountArticles();
    const { featuredArticle } = await getFeaturedArticle(lang);

    const featuredArticleFormattedDate = await formatToDate(lang, featuredArticle.date);

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
                                    alt={featuredArticle.article_localization.title}
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
                                            timeToReadText={localeDictionary.card.timeToReadText}
                                            readTime={featuredArticle.read_time}
                                        />
                                    </div>

                                    {/* Title & Description */}
                                    <div className="flex flex-col gap-[16px]">
                                        <h1 className="font-dmSans font-medium text-[44px] leading-[1.1] tracking-[-0.88px] text-white w-[860px]">
                                            {featuredArticle.article_localization.title}
                                        </h1>
                                        <p className="font-dmSans text-[22px] leading-[1.3] text-[#e9ebea] w-[683px]">
                                            {featuredArticle.article_localization.description}
                                        </p>
                                    </div>

                                    {/* Read Article Button */}
                                    <Button
                                        href={`articles/${featuredArticle.slug}`}
                                        text={localeDictionary.articles.featuredArticle.readArticleButton}
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
                    {localeDictionary.articles.cardsConatiner.primaryHeader}
                </h2>

                {/* Cards Container */}
                <div className="flex flex-col gap-[32px] mb-[40px]">
                    {articles ? (
                        <>
                            <div className="flex justify-around gap-[32px] h-[534px]">
                                {articles.slice(0, 2).map((article: any, index: number) => (
                                    <div className={`${!isFirstArticleAppeared && index == 0 ? `flex-1` : `w-[365.33px]`}`} key={article.id}>
                                        <ArticleCard
                                            image={article.image_url}
                                            title={article.article_localization.title}
                                            readTime={article.read_time}
                                            cardDict={localeDictionary.card}
                                            href={`/${lang}/articles/${article.slug}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-around gap-[32px] h-[534px]">
                                {articles.slice(2, 5).map((article: any) => (
                                    <div className="flex-1" key={article.id}>
                                        <ArticleCard
                                            image={article.image_url}
                                            title={article.article_localization.title}
                                            readTime={article.read_time}
                                            cardDict={localeDictionary.card}
                                            href={`/${lang}/articles/${article.slug}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-around gap-[32px] h-[534px]">
                                {articles.slice(5, 8).map((article: any) => (
                                    <div className="flex-1" key={article.id}>
                                        <ArticleCard
                                            image={article.image_url}
                                            title={article.article_localization.title}
                                            readTime={article.read_time}
                                            cardDict={localeDictionary.card}
                                            href={`/${lang}/articles/${article.slug}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="flex justify-center text-black text-xl h-screen">
                            <p>{localeDictionary.articles.cardsConatiner.noArticles}</p>
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
                                {localeDictionary.articles.paginationElements.previous}
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
                                {localeDictionary.articles.paginationElements.next}
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
