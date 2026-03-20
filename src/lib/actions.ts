'use server';
import { supabase } from "@/src/lib/db";

export async function getArticles(locale: string, quantity: number, from?: number, to?: number) {
    if (from && to) {
        var { data: articles, error: errorArticles } = await supabase
            .from('article')
            .select(`id, image_url, read_time, slug, is_featured, date, content_image, title:title_${locale}, description:description_${locale}, content:content_${locale}`)
            .limit(quantity)
            .range(from, to) as any;
    } else {
        var { data: articles, error: errorArticles } = await supabase
            .from('article')
            .select(`id, image_url, read_time, slug, is_featured, date, content_image, title:title_${locale}, description:description_${locale}, content:content_${locale}`)
            .limit(quantity) as any;
    };

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
    const { data: featuredArticle, error: errorFeaturedArticle } = await supabase
        .from('article')
        .select(`id, image_url, read_time, slug, is_featured, date, content_image, title:title_${locale}, description:description_${locale}, content:content_${locale}`)
        .eq('is_featured', true)
        .limit(1)
        .single() as any;

    return {
        featuredArticle, errorFeaturedArticle
    };
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
        .select(`id, image_url, read_time, slug, is_featured, date, content_image, title:title_${locale}, description:description_${locale}, content:content_${locale}`)
        .eq('slug', slug)
        .limit(1)
        .single() as any;

    return {
        article, getArticleFromSlugError
    };
};