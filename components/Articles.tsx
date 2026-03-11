import Title from "@/components/Title";
import Link from "next/link";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import ArrowArticle from "@/public/assets/arrow-articles.svg";
import { getArticles } from "@/server/database-functions";

export default async function Articles() {
    const { articles, errorArticles } = await getArticles(3);

    return (
        <>
            {articles.length > 0 && (
                <section className="bg-cyan-900">
                    <div className="mx-10 py-25">
                        <div className="flex items-center mb-10">
                            <Title
                                text="Tips, Stories & Insights for Every Angler"
                                style="text-white"
                            />
                            <Link href="articles" className="flex ml-auto">
                                <button className="bg-[rgba(245,223,190,0.1)] border border-[#dcc49f] rounded-[16px] px-[12px] py-[6px] flex items-center gap-[10px] w-fit hover:bg-[rgba(245,223,190,0.2)] transition-colors">
                                    <span className="font-dmSans font-medium text-[18px] text-[#dbbb88]">
                                        Read More Articles
                                    </span>
                                    <Image
                                        src={ArrowArticle}
                                        alt="More Articles"
                                        width={16}
                                        height={16}
                                        unoptimized
                                    />
                                </button>
                            </Link>
                        </div>

                        <div className="flex gap-[32px] justify-between h-screen">
                            {articles?.map((article) =>
                                <ArticleCard key={article.id}
                                    image={article.image_url}
                                    readTime={article.read_time}
                                    title={article.title}
                                    href={`articles/${article.slug}`}
                                    additional_styles="w-md"
                                />
                            )}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
