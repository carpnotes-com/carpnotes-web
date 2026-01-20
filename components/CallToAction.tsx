import Image from "next/image";
import Title from "./Title";
import StoreButtons from "./StoreButtons";
import GooglePlay from "../public/assets/google_play.svg";
import Apple from "../public/assets/apple.svg";
import Fish from "../public/assets/Footer Fish.png";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-950">
      <div className="mx-10 py-35 flex items-center">
        <div className="w-1/3 mr-auto">
          <Title
          text="Log Your Sessions. Improve Your Skills. Download Today."
          style="text-white mb-2"
          />
          <StoreButtons/>
        </div>

        <Image
          src={Fish}
          alt="Fish"
          className="w-2xl"
        />
      </div>
    </section>
  );
}
