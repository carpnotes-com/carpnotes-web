import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
import ArticleCard from "./ArticleCard";
import Arrow from "../public/assets/arrow.png";
import Watch from "../public/assets/watch.png";
import FisherWithRod from "../public/assets/fisher-holding-rod.png";
import FisherOnRocks from "../public/assets/fisher-on-the-rocks.png";
import FisherOnCoast from "../public/assets/fisher-on-the-coast.png";
import { getArticles } from "../server/database-functions";

export default async function Articles() {
  const {articles, errorArticles } = await getArticles(3);

  return (
    <>
      {articles.length > 0 ? (
        <section className="bg-cyan-900">
        <div className="mx-10 py-25">
          <div className="flex items-center">
            <div className="mb-10">
              <Title
                text="Tips, Stories & Insights for Every Angler"
                style="text-white"
              />
            </div>
            <div className="border-amber-200 border-2 rounded-full p-2 mb-10 ml-auto">
              <Link href="/articles" className="text-amber-200">
                Read More Articles
                <Image src={Arrow} alt="Arrow" className="inline ml-3 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex gap-[32px] justify-between h-screen">
            {articles?.map((article) => 
              <ArticleCard key={article.id}
                image={article.image_url}
                readTime={article.read_time}
                title={article.title}
                href={article.slug}
                additional_styles="w-md"
              />
            )}
          </div>
        </div>
      </section>
      ) : (
        <></>
      )}
    </>
  );
}
