import Image from "next/image";
import TikTokLogo from "../public/assets/tiktok-logo.png";
import InstagramLogo from "../public/assets/instagram-logo.png";
import FacebookLogo from "../public/assets/facebook-logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-teal-950">
      <hr className="h-px bg-gray-400 border-0" />
      <div className="mx-10 py-10 flex items-center">
        <div className="text-white mr-auto">
          © 2025 CarpNotes
        </div>
        <div className="flex">
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
              className="mx-1"
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
      </div>
    </section>
  );
}
