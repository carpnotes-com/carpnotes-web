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
            <div className="bg-gradient-to-r from-teal-500 to-teal-950 h-screen">
                <div className="flex px-14 py-25 h-screen">
                    <div>
                        <div className="text-5xl">
                            {localeDictionary.contactForm.form.primaryHeader}
                        </div>
                        <ContactForm
                            inputTextElementsDict={localeDictionary.contactForm.form.inputTextElements}
                        />
                    </div>
                    <div className="flex ml-auto items-center">
                        <div className="w-md mx-10">
                            <Image
                                src={Fish}
                                alt="alt"
                                width={300}
                            />
                            <div className="my-10 text-xl font-dmSans">
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