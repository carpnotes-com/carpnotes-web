import Title from "@/src/components/page-components/Title";
import { getArticles } from "@/src/lib/actions";
import Button from "@/src/components/page-components/Button";
import { Locale } from "@/src/lib/dictionaries";
import ArticlesMapDesktop from "@/src/components/article-card/ArticlesMapDesktop";
import ArticlesMapMobile from "@/src/components/article-card/ArticlesMapMobile";

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
            {/* If there is articles - show them, if not - skip this section */}
            {articles.length > 0 && (
                <section className="
                bg-[#0B3C43]
                ">

                    {/* Content */}
                    <div className="
                    mx-6 py-23
                    md:mx-10
                    ">

                        {/* Header with button */}
                        <div className="
                        flex items-center mb-10
                        ">

                            {/* Header */}
                            <Title
                                text={articlesDict.primaryHeader}
                                additionalStyles="
                                text-white
                                "
                            />

                            {/* Button for articles page */}
                            <Button
                                href={`/${locale}/articles`}
                                text={articlesDict.buttonText}
                                additionalStyles="
                                ml-auto hidden
                                md:block
                                "
                            />
                        </div>

                        {/* Mobile articles mapping */}
                        <div className="
                        w-full h-150
                        md:hidden
                        ">
                            <ArticlesMapMobile
                                articles={articles}
                                cardDict={cardDict}
                                locale={locale}
                            />
                        </div>

                        {/* Desktop articles mapping */}
                        <div className="
                        hidden gap-8 justify-between h-screen
                        md:flex
                        ">
                            <ArticlesMapDesktop
                                articles={articles}
                                cardDict={cardDict}
                                locale={locale}
                            />
                        </div>

                        {/* Mobile button for articles page */}
                        <Button
                            href={`/${locale}/articles`}
                            text={articlesDict.buttonText}
                            additionalStyles="
                            ml-auto mt-4
                            md:hidden
                            "
                        />
                    </div>
                </section>
            )}
        </>
    );
}
