import { createClient } from "@supabase/supabase-js";

require('dotenv').config();
const supabase = createClient(process.env.DATABASE_URL, process.env.PUBLIC_API_KEY);

export async function getArticles(quantity: number) {
    const { data: articles, error: errorArticles } = await supabase.from('article').select().limit(quantity);

    return {
        articles, errorArticles
    };
}

export async function getFeaturedArticle (id: number) {
    const { data: featuredArticle, error: errorFeaturedArticles } = await supabase.from('featured_article').select().eq('id', id);

    return {
        featuredArticle, errorFeaturedArticles
    };
}