'use server';
import { supabase } from "@/src/lib/db";

export async function getArticles(locale: string, quantity: number, from?: number, to?: number) {
    if (from && to) {
        var { data: articles, error: errorArticles } = await supabase
            .from('article')
            .select(`
                id,
                image_url,
                read_time,
                slug,
                is_featured,
                date,
                content_image,
                article_localization!inner (
                    title,
                    description,
                    content,
                    locale!inner (
                        name
                    )
                )
            `)
            .eq('article_localization.locale.name', locale)
            .limit(quantity)
            .range(from, to) as any;
    } else {
        var { data: articles, error: errorArticles } = await supabase
            .from('article')
            .select(`
                id,
                image_url,
                read_time,
                slug,
                is_featured,
                date,
                content_image,
                article_localization!inner (
                    title,
                    description,
                    content,
                    locale!inner (
                        name
                    )
                )
            `)
            .eq('article_localization.locale.name', locale)
            .limit(quantity) as any;
    };

    articles = articles.map((article: any) => ({
        ...article,
        article_localization: article.article_localization[0]
    }));

    return {
        articles, errorArticles
    };
};

export async function getCountArticles() {
    let { count: countArticles, error: errorCountArticles } = await supabase
        .from('article')
        .select('*', { count: 'exact', head: true });

    countArticles == null ? countArticles = 0 : countArticles;

    return {
        countArticles, errorCountArticles
    };
};

export async function getFeaturedArticle(locale: string) {
    const { data: featuredArticle } = await supabase
        .from('article')
        .select(`
                id,
                image_url,
                read_time,
                slug,
                is_featured,
                date,
                content_image,
                article_localization!inner (
                    title,
                    description,
                    content,
                    locale!inner (
                        name
                    )
                )
            `)
        .eq('article_localization.locale.name', locale)
        .eq('is_featured', true)
        .limit(1)
        .single() as any;

    if (featuredArticle) {
        featuredArticle.article_localization = featuredArticle.article_localization[0];
    };

    return featuredArticle;
};

export async function addMessage(email: string, message: string) {
    const { error: addMessageError } = await supabase
        .from('message')
        .insert({ email: email, message_text: message });

    return addMessageError;
};

export async function getArticleFromSlug(locale: string, slug: string) {
    const { data: article, error: getArticleFromSlugError } = await supabase
        .from('article')
        .select(`
                id,
                image_url,
                read_time,
                slug,
                is_featured,
                date,
                content_image,
                article_localization!inner (
                    title,
                    description,
                    content,
                    locale!inner (
                        name
                    )
                )
            `)
        .eq('article_localization.locale.name', locale)
        .eq('slug', slug)
        .limit(1)
        .single() as any;

    article.article_localization = article.article_localization[0];

    return {
        article, getArticleFromSlugError
    };
};