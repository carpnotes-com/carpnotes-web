import Image from "next/image";
import SocialMediaLinks from "@/src/components/page-components/SocialMediaLinks";
import ArticleCard from "@/src/components/article-card/ArticleCard";
import ReadTime from "@/src/components/article-card/ReadTime";
import DateOfPost from "@/src/components/article-card/DateOfPost";
import CallToAction from "@/src/components/homepage/CallToAction";
import Title from "@/src/components/page-components/Title";
import ArticlesMapDesktop from "@/src/components/article-card/ArticlesMapDesktop";
import ArticlesMapMobile from "@/src/components/article-card/ArticlesMapMobile";
import { getArticles, getArticleFromSlug } from "@/src/lib/actions";
import { formatToDate } from "@/src/lib/formatFunctions";
import { Locale } from "@/src/lib/dictionaries";
import { getDictionary } from "@/src/lib/dictionaries";

type paramsType = Promise<{ lang: Locale, slug: string }>;

export default async function ArticleDetailPage({ params }: { params: paramsType }) {
    const { lang, slug } = await params;

    const localeDictionary = await getDictionary(lang);

    const { article: mainArticle } = await getArticleFromSlug(lang, slug);

    let contentArray = mainArticle.article_localization.content.split('\n');

    // Calculating indexes for content array (headers and paragraphs) handling

    var endOfContentArray = contentArray.length;
    var halfOfContentArray = Math.floor(contentArray.length / 2);

    halfOfContentArray % 2 == 1 && halfOfContentArray++;

    const mainArticleFormattedDate = await formatToDate(lang, mainArticle.date);

    const { articles: recommendedArticles } = await getArticles(lang, 3);

    return (
        <main>

            {/* Hero Section */}
            <section className="
            w-full h-175 relative
            ">
                <div className="
                relative w-full h-full
                ">

                    {/* Background Image */}
                    <div className="
                    absolute inset-0 rounded-b-[62px] overflow-hidden
                    ">
                        <Image
                            src={mainArticle.content_image}
                            alt="Article hero"
                            fill
                            className="object-cover"
                            unoptimized
                        />

                        {/* Dark overlay */}
                        <div className="
                        absolute inset-0 bg-[rgba(16,74,84,0.6)]
                        "/>
                    </div>

                    {/* Content */}
                    <div
                        className="
                        absolute bottom-0 left-0 right-0 p-20 rounded-b-[62px] backdrop-blur mask-[linear-gradient(to_top,black_50%,transparent_100%)] h-[50%]
                        "
                        style={{
                            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)"
                        }}
                    >
                    </div>

                    <div className="
                    absolute bottom-0 px-6 flex md:items-end w-full flex-col pb-12 gap-6
                    md:p-15 md:ml-auto md:flex-row
                    ">

                        {/* Text & Badges */}
                        <div className="
                        flex flex-col gap-6 w-3/4
                        ">

                            {/* Badges */}
                            <div className="
                            flex gap-2
                            ">
                                <DateOfPost
                                    date={mainArticleFormattedDate}
                                />
                                <ReadTime
                                    timeToReadText={localeDictionary.card.timeToReadText}
                                    readTime={mainArticle.read_time}
                                />
                            </div>

                            {/* Title & Description */}
                            <div className="
                            flex flex-col gap-4
                            ">
                                <Title
                                    text={mainArticle.article_localization.title}
                                />
                                <p className="
                                font-dmSans text-[22px] leading-[1.3] text-[#e9ebea] w-full
                                ">
                                    {mainArticle.article_localization.description}
                                </p>
                            </div>
                        </div>

                        {/* Share Section */}
                        <div className="
                        flex flex-col gap-6
                        md:gap-5 md:ml-auto
                        ">
                            <p className="
                            font-dmSans text-[12px] text-white
                            ">
                                {localeDictionary.articleSlug.share}:
                            </p>
                            <SocialMediaLinks />
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="
            max-w-4xl mx-auto px-6 my-20
            ">
                <div className="
                flex flex-col gap-10 items-center
                ">

                    {/* Text Block 1 */}
                    <div className="
                    flex flex-col gap-6
                    ">
                        {contentArray.slice(0, halfOfContentArray).map((string: string, index: number) => (
                            <div className="
                            flex flex-col gap-4 w-full
                            " key={string}>
                                {index % 2 == 0 ? (
                                    <h2 className="
                                    font-dmSans font-medium text-[32px] leading-[1.3] text-[#1f1f1f]
                                    ">
                                        {string.trim()}
                                    </h2>
                                ) : (
                                    <p className="
                                    font-dmSans text-[18px] leading-[1.4] text-[#545454]
                                    ">
                                        {string.trim()}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Text Block 2 */}
                    <div className="
                    flex flex-col gap-6
                    ">
                        {contentArray.slice(halfOfContentArray, endOfContentArray).map((string: string, index: number) => (
                            <div className="
                            flex flex-col gap-4 w-full
                            " key={string}>
                                {index % 2 == 0 ? (
                                    <h2 className="
                                    font-dmSans font-medium text-[32px] leading-[1.3] text-[#1f1f1f]
                                    ">
                                        {string.trim()}
                                    </h2>
                                ) : (
                                    <p className="
                                    font-dmSans text-[18px] leading-[1.4] text-[#545454]
                                    ">
                                        {string.trim()}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recommended Articles */}
            <section className="
            bg-[#0b3c43] px-6 py-20 rounded-tl-[62px] rounded-tr-[62px]
            md:px-15
            ">
                <div className="
                max-w-7xl mx-auto
                ">
                    <h2 className="
                    font-dmSans font-medium text-[32px] leading-[1.3] text-white mb-10
                    ">
                        {localeDictionary.articleSlug.recommendedForYou}
                    </h2>


                    <div className="
                    h-150
                    md:hidden
                    ">
                        <ArticlesMapMobile
                            articles={recommendedArticles}
                            cardDict={localeDictionary.card}
                            locale={lang}
                        />
                    </div>
                    <div className="
                    gap-8 h-150 hidden
                    md:flex
                    ">
                        <ArticlesMapDesktop
                            articles={recommendedArticles}
                            cardDict={localeDictionary.card}
                            locale={lang}
                        />
                    </div>
                </div>
            </section>
            <section>
                <CallToAction
                    callToActionDict={localeDictionary.callToAction}
                />
            </section>
        </main>
    );
}
