import Image from "next/image";
import Link from "next/link";
import ArticleCard from "./ArticleCard";

export default function Articles() {
    const articles = [
        {
            image: "http://localhost:3845/assets/f157db25f0e6b1de4206bb937365df5de3b22bc1.png",
            title: "Chasing the Dawn: Why Early Mornings Catch the Best Carp"
        },
        {
            image: "http://localhost:3845/assets/422ed7c17fad2eefefee5a35d8127483a22e677b.png",
            title: "From Notes to Big Catches: How Logging Sessions Improves Your Fishing"
        },
        {
            image: "http://localhost:3845/assets/ca0bc6891617a56390e000002fce084c1e716ed1.png",
            title: "5 Proven Bait Strategies Every Angler Should Know"
        }
    ];

    return (
        <section className="bg-[#0b3c43] px-[60px] py-[100px]">
            <div className="max-w-[1280px] mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-[40px]">
                    <h2 className="font-dmSans font-medium text-[44px] leading-[1.1] tracking-[-0.88px] text-white w-[465px]">
                        Tips, Stories & Insights for Every Angler
                    </h2>

                    <Link href="/articles" className="bg-[rgba(245,223,190,0.1)] border border-[#dcc49f] rounded-[16px] px-[12px] py-[6px] flex items-center gap-[10px] hover:bg-[rgba(245,223,190,0.2)] transition-colors">
                        <span className="font-dmSans font-medium text-[18px] text-[#dbbb88]">
                            Read More Articles
                        </span>
                        <Image
                            src="http://localhost:3845/assets/0536ba37faa2ec86154077d8dd35a195ed1da107.svg"
                            alt=""
                            width={16}
                            height={16}
                            unoptimized
                        />
                    </Link>
                </div>

                {/* Article cards */}
                <div className="flex gap-[32px] h-[534px]">
                    {articles.map((article, index) => (
                        <ArticleCard
                            key={index}
                            image={article.image}
                            title={article.title}
                            href={`/articles/${index === 0 ? 'chasing-dawn' : index === 1 ? 'logging-sessions' : 'bait-strategies'}`}

                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
