import Link from "next/link"
import Image from "next/image"
import TikTokLogo from "@/public/assets/tiktok-logo.svg";
import InstagramLogo from "@/public/assets/instagram-logo.svg";
import FacebookLogo from "@/public/assets/facebook-logo.svg";

export default function SocialMediaLinks() {
    return (
        <div className="
        flex gap-5
        ">

            {/* TikTok */}
            <Link href='https://www.tiktok.com/' className="
            shrink-0
            ">
                <Image
                    src={TikTokLogo}
                    alt="TikTok"
                    width={28}
                />
            </Link>

            {/* Instagram */}
            <Link href='https://www.instagram.com/' className="
            shrink-0
            ">
                <Image
                    src={InstagramLogo}
                    alt="Instagram"
                    width={28}
                />
            </Link>

            {/* Facebook */}
            <Link href='https://www.facebook.com/' className="
            shrink-0
            ">
                <Image
                    src={FacebookLogo}
                    alt="Facebook"
                    width={28}
                />
            </Link>
        </div>
    )
}