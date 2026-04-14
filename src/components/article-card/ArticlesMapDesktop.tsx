import ArticleCard from "@/src/components/article-card/ArticleCard";

interface ArticlesMapDesktopProps {
    articles: any,
    cardDict: {
        timeToReadText: string,
    },
    locale: string,
};

export default function ArticlesMapDesktop({ articles, cardDict, locale }: ArticlesMapDesktopProps) {
    return (
        <>
            {articles.map((article: any) =>
                <ArticleCard
                    key={article.id}
                    image={article.image_url}
                    readTime={article.read_time}
                    cardDict={cardDict}
                    title={article.article_localization.title}
                    href={`/${locale}/articles/${article.slug}`}
                />
            )}
        </>
    );
};