// app/page.tsx
import Hero from "@/src/components/homepage/Hero";
import Features from "@/src/components/homepage/Features";
import Articles from "@/src/components/homepage/Articles";
import AboutUs from "@/src/components/homepage/AboutUs";
import CallToAction from "@/src/components/homepage/CallToAction";
import { getDictionary, Locale } from "@/src/lib/dictionaries";

type paramsType = Promise<{ lang: Locale }>;

export default async function Home({ params }: { params: paramsType }) {
    const { lang } = await params;
    const localeDictionary = await getDictionary(lang);

    return (
        <main>
            <Hero
                heroDict={localeDictionary.homepage.hero}
            />
            <Features
                featuresDict={localeDictionary.homepage.features}
            />
            <Articles
                articlesDict={localeDictionary.homepage.articles}
                cardDict={localeDictionary.card}
                locale={lang}
            />
            <AboutUs
                aboutUsDict={localeDictionary.homepage.aboutUs}
            />
            <CallToAction
                callToActionDict={localeDictionary.homepage.callToAction}
            />
        </main>
    );
};
