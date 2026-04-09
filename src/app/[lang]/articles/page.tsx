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
import Title from "@/src/components/page-components/Title";

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
    const featuredArticle = await getFeaturedArticle(lang);

    const featuredArticleFormattedDate = featuredArticle ? await formatToDate(lang, featuredArticle.date) : null;

    const endPageNumber = Math.ceil(countArticles / pageSize);

    let isFirstArticleAppeared = false;

    return (
        <main>
            {/* Featured Article Hero */}
            <section className={`
            flex flex-col ${featuredArticle ? `items-center` : ``}
            `}>

                {/* Background accent strip */}
                <div className="
                bg-[#f5dfbe] h-74.75 w-full -mb-54.75
                "/>

                {featuredArticle ? (
                    <>
                        {/* Featured card */}
                        <div className="
                        relative w-full px-4
                        md:px-15
                        ">
                            <div className="
                            relative h-122.5 rounded-2xl overflow-hidden
                            ">

                                {/* Background image */}
                                <Image
                                    src={featuredArticle.image_url}
                                    alt={featuredArticle.article_localization.title}
                                    fill
                                    className="
                                    object-cover
                                    "
                                    unoptimized
                                />

                                {/* Dark overlay */}
                                <div className="
                                absolute inset-0 bg-[rgba(16,74,84,0.6)]
                                "/>

                                {/* Content */}
                                <div
                                    className="
                                    absolute bottom-0 left-0 right-0 rounded-2xl backdrop-blur mask-[linear-gradient(to_top,black_30%,transparent_100%)] h-full
                                    "
                                    style={{
                                        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)"
                                    }}
                                >
                                </div>
                                <div className="
                                absolute flex flex-col gap-8 bottom-0 p-7
                                md:p-12
                                ">

                                    {/* Badges */}
                                    <div className="
                                    flex gap-2
                                    ">
                                        <DateOfPost
                                            date={featuredArticleFormattedDate}
                                        />
                                        <ReadTime
                                            timeToReadText={localeDictionary.card.timeToReadText}
                                            readTime={featuredArticle.read_time}
                                        />
                                    </div>

                                    {/* Title & Description */}
                                    <div className="
                                    flex flex-col gap-4
                                    ">
                                        <Title
                                            text={featuredArticle.article_localization.title}
                                        />
                                        <p className="
                                        font-dmSans text-[22px] leading-[1.3] text-[#e9ebea] w-full hidden
                                        md:block
                                        ">
                                            {featuredArticle.article_localization.description}
                                        </p>
                                    </div>

                                    {/* Read Article Button */}
                                    <Button
                                        href={`articles/${featuredArticle.slug}`}
                                        text={localeDictionary.articles.featuredArticleContainer.featuredArticle.readArticleButton}
                                        additionalStyles="
                                        md:mr-auto
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Title
                            text={localeDictionary.articles.featuredArticleContainer.noFeaturedArticleHeader}
                            additionalStyles="
                            text-black mb-5 mx-4 w-3/5
                            md:mx-15
                            "
                        />
                    </>
                )}
            </section>

            {/* Articles Grid */}
            <section className="
            max-w-full px-4 pb-15
            md:px-15
            ">
                {featuredArticle && (
                    <Title
                        text={localeDictionary.articles.cardsConatiner.primaryHeader}
                        additionalStyles="
                        text-black pt-12 pb-7
                        "
                    />
                )}

                {/* Cards Container */}
                <div className="
                flex flex-col
                ">
                    {articles.length != 0 ? (
                        <>
                            <div className="
                            flex flex-col justify-around gap-8
                            md:flex-row
                            ">
                                {articles.slice(0, 2).map((article: any, index: number) => (
                                    <div className={`
                                    ${!isFirstArticleAppeared && index == 0 ? `h-140 md:flex-1` : `h-140 md:w-1/3`}`} key={article.id}
                                    >
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
                            <div className="
                            flex flex-col justify-around gap-8
                            md:flex-row
                            ">
                                {articles.slice(2, 5).map((article: any) => (
                                    <div className="
                                    h-140 mt-8
                                    md:flex-1
                                    " key={article.id}>
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
                            <div className="
                            flex flex-col justify-around gap-8
                            md:flex-row
                            ">
                                {articles.slice(5, 8).map((article: any) => (
                                    <div className="
                                    h-140 mt-8
                                    md:flex-1
                                    " key={article.id}>
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

                            {/* Pagination */}
                            <div className="
                            flex gap-5.25 mt-10 items-center justify-center
                            ">

                                {/* Previous Button */}
                                <button className={`
                                    flex gap-1.5 px-4 py-1.5 ${currentPageNumber == 1 && `invisible`}
                                    `}>
                                    <Link href={`articles?page=${currentPageNumber - 1}`} className="flex items-center">
                                        <Image
                                            src={ArrowLeft}
                                            alt="Previous Page"
                                            width={8}
                                            height={8}
                                            unoptimized
                                        />
                                        <span className="
                                        font-dmSans text-[16px] leading-[1.2] text-[#5e6d7a] pl-1
                                        ">
                                            {localeDictionary.articles.paginationElements.previous}
                                        </span>
                                    </Link>
                                </button>

                                {/* Page Numbers */}
                                <div className="
                                flex gap-2.75 items-center
                                ">
                                    <div className={`
                                        px-4 py-1.5 ${currentPageNumber == 1 && `invisible`}
                                        `}>
                                        <span className="
                                        font-dmSans text-[16px] leading-[1.2] text-[#1f1f1f]
                                        ">
                                            {currentPageNumber - 1}
                                        </span>
                                    </div>

                                    <div className="
                                    bg-white border border-[#5e6d7a] rounded-sm px-4 py-1.5
                                    ">
                                        <span className="
                                        font-dmSans text-[16px] leading-[1.2] text-[#1f1f1f]
                                        ">
                                            {currentPageNumber}
                                        </span>
                                    </div>

                                    <div className={`
                                        px-4 py-1.5 ${currentPageNumber == endPageNumber && `invisible`}
                                        `}>
                                        <span className="
                                        font-dmSans text-[16px] leading-[1.2] text-[#1f1f1f]
                                        ">
                                            {currentPageNumber + 1}
                                        </span>
                                    </div>
                                </div>

                                {/* Next Button */}
                                <button className={`
                                    flex gap-1.5 items-center px-4 py-1.5 ${currentPageNumber == endPageNumber && `invisible`}
                                    `}>
                                    <Link href={`articles?page=${currentPageNumber + 1}`} className="flex items-center">
                                        <span className="
                                        font-dmSans text-[16px] leading-[1.2] text-[#5e6d7a] pr-1
                                        ">
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
                        </>
                    ) : (
                        <div className="
                        flex justify-center text-black text-xl
                        ">
                            <p>{localeDictionary.articles.cardsConatiner.noArticles}</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
