import SocialMediaLinks from "@/src/components/page-components/SocialMediaLinks";

export default function Footer() {
    return (
        <footer className="
        bg-linear-to-r from-teal-600 to-teal-950
        ">

            {/* Line */}
            <hr className="
            h-px bg-gray-400 border-0
            "/>

            {/* Content */}
            <div className="
            mx-6 py-10 flex items-center
            md:mx-10
            ">
                
                {/* Copyright */}
                <div className="
                text-white mr-auto
                ">
                    © 2025 CarpNotes
                </div>

                {/* Social medias */}
                <div className="
                flex
                ">
                    <SocialMediaLinks />
                </div>
            </div>
        </footer>
    );
}
