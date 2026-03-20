import Title from "@/src/components/page-components/Title";
import ArticleCard from "@/src/components/article-card/ArticleCard";
import { getArticles } from "@/src/lib/actions";
import Button from "@/src/components/page-components/Button";
import { Locale } from "../../lib/dictionaries";

interface PageProps {
    articlesDict: {
        primaryHeader: string,
        buttonText: string,
    },
    cardDict: {
        timeToReadText: string,
    },
    locale: Locale,
};

export default async function Articles({ articlesDict, cardDict, locale }: PageProps) {
    const { articles } = await getArticles(locale, 3);

    return (
        <>
            {articles.length > 0 && (
                <section className="bg-cyan-900">
                    <div className="mx-10 py-25">
                        <div className="flex items-center mb-10">
                            <Title
                                text={articlesDict.primaryHeader}
                                style="text-white"
                            />
                            <Button
                                href={`/${locale}/articles`}
                                text={articlesDict.buttonText}
                                additionalStyles="ml-auto"
                            />
                        </div>

                        <div className="flex gap-[32px] justify-between h-screen">
                            {articles?.map((article: any) =>
                                <ArticleCard
                                    key={article.id}
                                    image={article.image_url}
                                    readTime={article.read_time}
                                    cardDict={cardDict}
                                    title={article.title}
                                    href={`/${locale}/articles/${article.slug}`}
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
