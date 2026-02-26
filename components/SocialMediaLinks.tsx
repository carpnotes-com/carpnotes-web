import Link from "next/link"
import Image from "next/image"
import TikTokLogo from "../public/assets/tiktok-logo.png";
import InstagramLogo from "../public/assets/instagram-logo.png";
import FacebookLogo from "../public/assets/facebook-logo.png";

export default function SocialMediaLinks() {
    return (
        <div className="inline-flex">
            <Link href='https://www.tiktok.com/'>
                <Image
                    src={TikTokLogo}
                    alt="TikTok"
                    width={28}
                />
                </Link>
                <Link href='https://www.instagram.com/'>
                <Image
                    src={InstagramLogo}
                    alt="Instagram"
                    width={28}
                    className="mx-4"
                />
                </Link>
                <Link href='https://www.facebook.com/'>
                <Image
                    src={FacebookLogo}
                    alt="Facebook"
                    width={28}
                />
            </Link>
        </div>
    )
}