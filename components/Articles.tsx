import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
import ArticleCard from "./ArticleCard";
import Arrow from "../public/assets/arrow.png";
import Watch from "../public/assets/watch.png";
import FisherWithRod from "../public/assets/fisher-holding-rod.png";
import FisherOnRocks from "../public/assets/fisher-on-the-rocks.png";
import FisherOnCoast from "../public/assets/fisher-on-the-coast.png";

export default function Articles() {
  return (
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

        <div className="flex justify-between h-screen">
          <ArticleCard
            imageUrl={FisherWithRod.src}
            timeToRead="10"
            topic="Chasing the Dawn: Why Early Mornings Catch the Best Carp"
          />
          <ArticleCard
            imageUrl={FisherOnRocks.src}
            timeToRead="10"
            topic="From Notes to Big Catches: How Logging Sessions Improves Your Fishing"
          />
          <ArticleCard
            imageUrl={FisherOnCoast.src}
            timeToRead="10"
            topic="5 Proven Bait Strategies Every Angler Should Know"
          />
        </div>
      </div>
    </section>
  );
}
