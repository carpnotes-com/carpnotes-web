'use server';

import { createClient } from "@supabase/supabase-js";

require('dotenv').config();

const dbURL: string | undefined = process.env.DATABASE_URL;
const dbPublicApiKey: string | undefined = process.env.PUBLIC_API_KEY;

if (dbURL && dbPublicApiKey) {
    var supabase = createClient(dbURL, dbPublicApiKey);
} else {
    throw new Error("DATABASE_URL or PUBLIC_API_KEY is missing in .env file.")
}

export async function getArticles(quantity: number, from?: number, to?: number) {
    if (from && to) {
        var { data: articles, error: errorArticles } = await supabase
        .from('article')
        .select()
        .limit(quantity)
        .range(from, to);
    } else {
        var { data: articles, error: errorArticles } = await supabase
        .from('article')
        .select()
        .limit(quantity);
    };

    articles == null ? articles = [] : articles;

    return {
        articles, errorArticles
    };
}

export async function getCountArticles() {
    var { count: countArticles, error: errorCountArticles } = await supabase
    .from('article')
    .select('*', {count: 'exact', head: true});

    countArticles == null ? countArticles = 0 : countArticles;

    return {
        countArticles, errorCountArticles
    };
}

export async function getFeaturedArticle () {
    const { data: featuredArticle, error: errorFeaturedArticle } = await supabase
    .from('article')
    .select()
    .eq('is_featured', true)
    .maybeSingle();

    return {
        featuredArticle, errorFeaturedArticle
    };
}

export async function addMessage(email: string, message: string) {
    const { error: addMessageError } = await supabase
    .from('message')
    .insert({ email: email, message_text: message});

    return addMessageError;
}