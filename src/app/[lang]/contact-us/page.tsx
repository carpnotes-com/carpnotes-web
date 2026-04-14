import Fish from "@/public/assets/contact-form-fish.svg";
import Image from "next/image";
import SocialMediaLinks from "@/src/components/page-components/SocialMediaLinks";
import ContactForm from "@/src/components/contact-form/ContactForm";
import { getDictionary, Locale } from "@/src/lib/dictionaries";

type paramsType = Promise<{ lang: Locale }>;

export default async function ContactUsPage({ params }: { params: paramsType }) {
    const { lang } = await params;
    const localeDictionary = await getDictionary(lang);

    return (
        <main>

            {/* Content */}
            <div className="
            flex px-6 py-25 bg-linear-to-r from-[#1C96A8] to-[#0B3B42] min-h-screen flex-col justify-center
            md:flex-row md:px-14 md:items-center
            ">

                <div className="
                flex w-full justify-between gap-12 flex-col
                md:flex-row md:gap-25
                ">
                    {/* Contact form */}
                    <ContactForm
                        formDict={localeDictionary.contactForm.form}
                        messageSentDict={localeDictionary.contactForm.messageSent}
                    />

                    {/* Socials and fish image */}
                    <div className="
                    flex items-center flex-col-reverse gap-6
                    md:flex-col md:items-start
                    ">
                        <Image
                            src={Fish}
                            alt="alt"
                            width={300}
                        />
                        <div className="
                        flex flex-col gap-6
                        ">
                            <div className="
                            text-xl font-dmSans
                            ">
                                {localeDictionary.contactForm.socialMedias.primaryHeader}
                            </div>
                            <SocialMediaLinks />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}