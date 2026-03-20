import FeaturesCard from "@/src/components/homepage/FeaturesCard";
import Title from "@/src/components/page-components/Title";
import Discover from "@/public/assets/discover.svg";
import Log from "@/public/assets/log.svg";
import Connect from "@/public/assets/connect.svg";

interface PageProps {
    featuresDict: {
        primaryHeader: string,
        secondaryHeader: string,
        firstFeature: {
            primaryHeader: string,
            secondaryHeader: string,
            description: string,
        },
        secondFeature: {
            primaryHeader: string,
            secondaryHeader: string,
            description: string,
        },
        thirdFeature: {
            primaryHeader: string,
            secondaryHeader: string,
            description: string,
        },
    },
};

export default function Features({ featuresDict }: PageProps) {
    return (
        <section className="flex items-center min-h-screen">
            <div className="mx-10">
                <div className="w-1/3">
                    <Title text={featuresDict.primaryHeader} style="text-black" />
                    <div className="text-xl my-6 text-black">
                        {featuresDict.secondaryHeader}
                    </div>
                </div>

                <div className="flex gap-10">
                    <FeaturesCard
                        image={Discover}
                        title={featuresDict.firstFeature.primaryHeader}
                        subdescription={featuresDict.firstFeature.secondaryHeader}
                        description={featuresDict.firstFeature.description}
                    />
                    <FeaturesCard
                        image={Log}
                        title={featuresDict.secondFeature.primaryHeader}
                        subdescription={featuresDict.secondFeature.secondaryHeader}
                        description={featuresDict.secondFeature.description}
                    />
                    <FeaturesCard
                        image={Connect}
                        title={featuresDict.thirdFeature.primaryHeader}
                        subdescription={featuresDict.thirdFeature.secondaryHeader}
                        description={featuresDict.thirdFeature.description}
                    />
                </div>
            </div>
        </section>
    );
}
