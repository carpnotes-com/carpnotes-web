import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Fish from "@/public/assets/contact-form-fish.svg";
import Image from "next/image";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import ContactForm from "@/components/ContactForm";

export default function ContactUsPage() {
    return (
        <section>
            <Header/>
            <div className="bg-gradient-to-r from-teal-500 to-teal-950 h-screen">
                <div className="flex px-14 py-25 h-screen">
                    <ContactForm/>
                    <div className="flex ml-auto items-center">
                        <div className="w-md mx-10">
                            <Image
                            src={Fish}
                            alt="alt"
                            width={300}
                            />
                            <div className="my-10 text-xl font-dmSans">
                                Don't want to fill out the form? Write to us directly - we'll respond quickly.
                            </div>
                            <SocialMediaLinks/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
}