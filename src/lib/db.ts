import 'server-only';
import { createClient } from "@supabase/supabase-js";

require('dotenv').config();

const dbURL: string | undefined = process.env.DATABASE_URL;
const dbPublicApiKey: string | undefined = process.env.PUBLIC_API_KEY;

if (!dbURL || !dbPublicApiKey) {
    throw new Error("DATABASE_URL or PUBLIC_API_KEY is missing in .env file.");
};

export const supabase = createClient(dbURL, dbPublicApiKey);
