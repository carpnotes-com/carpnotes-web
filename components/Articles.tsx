import Title from "@/components/Title";
import Link from "next/link";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import ArrowArticle from "@/public/assets/arrow-articles.svg";
import { getArticles } from "@/server/database-functions";
import Button from "./Button";

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
                            <Button
                            href="articles"
                            text="Read More Articles"
                            additionalStyles="ml-auto"
                            />
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
