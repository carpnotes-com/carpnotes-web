import { createClient } from "@supabase/supabase-js";

require('dotenv').config();
const supabase = createClient(process.env.DATABASE_URL, process.env.PUBLIC_API_KEY);

export async function getAllArticles() {
    const { data: articles, error } = await supabase.from('article').select();

    return {
        articles, error
    };
}