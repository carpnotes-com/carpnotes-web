import Image from "next/image";
import SocialMediaLinks from "@/src/components/page-components/SocialMediaLinks";
import ArticleCard from "@/src/components/article-card/ArticleCard";
import ReadTime from "@/src/components/article-card/ReadTime";
import DateOfPost from "@/src/components/article-card/DateOfPost";
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
            <section className="w-full h-[700px] relative">
                <div className="relative w-full h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0 rounded-bl-[62px] rounded-br-[62px] overflow-hidden">
                        <Image
                            src={mainArticle.content_image}
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
                        className="absolute bottom-0 left-0 right-0 p-[80px] rounded-bl-[62px] rounded-br-[62px] backdrop-blur mask-[linear-gradient(to_top,black_50%,transparent_100%)] h-[50%]"
                        style={{
                            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)"
                        }}
                    >
                    </div>
                    <div className="absolute bottom-0 p-24 flex items-end justify-between w-full">
                        {/* Text & Badges */}
                        <div className="flex flex-col gap-[24px]">
                            {/* Badges */}
                            <div className="flex gap-[8px]">
                                <DateOfPost
                                    date={mainArticleFormattedDate}
                                />
                                <ReadTime
                                    timeToReadText={localeDictionary.card.timeToReadText}
                                    readTime={mainArticle.read_time}
                                />
                            </div>

                            {/* Title & Description */}
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="font-dmSans font-medium text-[44px] leading-[1.1] tracking-[-0.88px] text-white w-[860px]">
                                    {mainArticle.article_localization.title}
                                </h1>
                                <p className="font-dmSans text-[22px] leading-[1.3] text-[#e9ebea] w-[683px]">
                                    {mainArticle.article_localization.description}
                                </p>
                            </div>
                        </div>

                        {/* Share Section */}
                        <div className="flex flex-col gap-[8px] items-start">
                            <p className="font-dmSans text-[12px] leading-[1.3] text-white">
                                {localeDictionary.articleSlug.share}:
                            </p>
                            <SocialMediaLinks />
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="max-w-[1280px] mx-auto px-[60px] py-[80px] pb-[120px]">
                <div className="flex flex-col gap-[40px] items-center">
                    {/* Text Block 1 */}
                    <div className="flex flex-col gap-[24px]">
                        {contentArray.slice(0, halfOfContentArray).map((string: string, index: number) => (
                            <div className="flex flex-col gap-[16px] w-[762px]" key={string}>
                                {index % 2 == 0 ? (
                                    <h2 className="font-dmSans font-medium text-[32px] leading-[1.3] text-[#1f1f1f]">
                                        {string.trim()}
                                    </h2>
                                ) : (
                                    <p className="font-dmSans text-[18px] leading-[1.4] text-[#545454]">
                                        {string.trim()}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Text Block 2 */}
                    <div className="flex flex-col gap-[24px]">
                        {contentArray.slice(halfOfContentArray, endOfContentArray).map((string: string, index: number) => (
                            <div className="flex flex-col gap-[16px] w-[762px]" key={string}>
                                {index % 2 == 0 ? (
                                    <h2 className="font-dmSans font-medium text-[32px] leading-[1.3] text-[#1f1f1f]">
                                        {string.trim()}
                                    </h2>
                                ) : (
                                    <p className="font-dmSans text-[18px] leading-[1.4] text-[#545454]">
                                        {string.trim()}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recommended Articles */}
            <section className="bg-[#0b3c43] px-[60px] py-[80px] rounded-tl-[62px] rounded-tr-[62px]">
                <div className="max-w-[1280px] mx-auto">
                    <h2 className="font-dmSans font-medium text-[32px] leading-[1.3] text-white mb-[40px]">
                        {localeDictionary.articleSlug.recommendedForYou}
                    </h2>

                    <div className="flex gap-[32px] h-[534px]">
                        {recommendedArticles.map((article: any, index: number) => (
                            <div key={index} className="flex-1">
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
                </div>
            </section>
        </main>
    );
}
