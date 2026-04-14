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
        <section className="
        flex items-center min-h-screen mx-6 my-14
        md:mx-10 md:my-0
        ">
            {/* Content */}
            <div>

                {/* Headers */}
                <div className="
                w-full
                ">

                    {/* Primary header */}
                    <Title
                        text={featuresDict.primaryHeader}
                        additionalStyles="text-black"
                    />

                    {/* Secondary header */}
                    <div className="
                    text-lg my-6 text-black
                    md:text-xl
                    ">
                        {featuresDict.secondaryHeader}
                    </div>
                </div>

                {/* Features cards */}
                <div className="
                flex flex-col gap-10
                md:flex-row
                ">
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
