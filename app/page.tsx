// app/page.tsx
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Articles from "@/components/Articles";
import AboutUs from "@/components/AboutUs";
import CallToAction from "@/components/CallToAction";

export default function Home() {
    return (
        <main>
            <Hero />
            <Features />
            <Articles />
            <AboutUs />
            <CallToAction />
        </main>
    );
}
