import Title from "@/components/Title";
import Image from "next/image";
import Founders from "@/public/assets/founders.png";

export default function AboutUs() {
    return (
        <section className="flex items-center min-h-screen">
            <div className="mx-10 flex">
                <div className="w-2/5 mr-auto">
                    <Title
                        text="Where Our Journey Began"
                        style="mb-8 text-black"
                    />

                    <div className="text-xl text-black">
                        <p>The story began on May 16, 2009, with the first carp catch — a moment that sparked a passion for fishing. From quiet mornings to the thrill of a perfect catch, we’ve always seen fishing as a way of life.</p>
                        <p className="my-7">Over time, we tracked patterns and shared stories, but no tool truly captured how anglers think and learn. That’s why we built Carp Notes — an app made by anglers, for anglers.</p>
                        <p>We’re a small team who values every cast and bite. Carp Notes helps log sessions, reflect, and catch smarter. This is just the beginning, and we’re excited to grow with the fishing community.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-black">
                    <Image
                        src={Founders}
                        alt="Founders"
                        className="mb-2"
                    />

                    Kostiantyn & Alex – Founder of CarpNote
                </div>
            </div>
        </section>
    );
}
