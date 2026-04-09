import Link from "next/link";
import Image from "next/image";
import GooglePlay from "@/public/assets/google_play.svg"
import Apple from "@/public/assets/apple.svg"

interface StoreButtonsProps {
    additionalStyles?: string,
};

export default function StoreButtons({ additionalStyles }: StoreButtonsProps) {
    return (
        <div className={`
        flex items-center justify-center gap-3 ${additionalStyles}
        md:justify-start
        `}>

            {/* GooglePlay image */}
            <Link href='https://play.google.com/'>
                <Image
                    src={GooglePlay}
                    alt="GooglePlay"
                />
            </Link>

            {/* AppStore image */}
            <Link href='https://apps.apple.com/'>
                <Image
                    src={Apple}
                    alt="AppStore"
                />
            </Link>
        </div>
    )
}
