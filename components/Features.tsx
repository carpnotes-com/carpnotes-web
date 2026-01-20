import Image from "next/image";
import FeaturesCard from "./FeaturesCard";
import Title from "./Title";
import Discover from "../public/assets/discover.svg";
import Log from "../public/assets/log.svg";
import Connect from "../public/assets/connect.svg";

export default function Features() {
  return (
    <section>
      <div className="mx-10 my-25">
        <div className="w-1/3">
          <Title text="Your Next-Level Carp Fishing Journey" />
          <div className="text-xl my-6">
            A place where passion meets precision, and community meets the great
            outdoors.
          </div>
        </div>

        <div className="flex justify-between">
          <FeaturesCard
            image={Discover}
            title="Discover"
            subdescription="Find your next perfect lake"
            description="Explore thousands of lakes across Europe with detailed information, maps, facilities, and fishing rules to plan your best session."
          />
          <FeaturesCard
            image={Log}
            title="Log"
            subdescription="Track your catches like a pro"
            description="Easily log fish sizes, bait types, and conditions. Build your personal fishing history and learn from every session."
          />
          <FeaturesCard
            image={Connect}
            title="Connect"
            subdescription="Share your journey with other anglers"
            description="Join a growing community of carp enthusiasts. Share catches, swap tips, and get inspired by real fishing stories."
          />
        </div>
      </div>
    </section>
  );
}
