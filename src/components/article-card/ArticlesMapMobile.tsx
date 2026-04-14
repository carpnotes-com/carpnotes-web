'use client';

import ArticleCard from "@/src/components/article-card/ArticleCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


interface ArticlesMapDesktopProps {
    articles: any,
    cardDict: {
        timeToReadText: string,
    },
    locale: string,
};

export default function ArticlesMapMobile({ articles, cardDict, locale }: ArticlesMapDesktopProps) {
    return (
        <Splide
            aria-label="Cards"
            options={{
                height: '100%',
                arrows: false,
                gap: '1rem'
            }}
        >
            {
                articles.map((article: any) =>
                    <SplideSlide key={article.id}>
                        <ArticleCard
                            image={article.image_url}
                            readTime={article.read_time}
                            cardDict={cardDict}
                            title={article.article_localization.title}
                            href={`/${locale}/articles/${article.slug}`}
                        />
                    </SplideSlide>
                )
            }
        </ Splide>
    );
};