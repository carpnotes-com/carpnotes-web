import Link from "next/link";
import Image from "next/image";
import GooglePlay from "../public/assets/google_play.svg"
import Apple from "../public/assets/apple.svg"

export default function StoreButtons() {
  return (
    <div className='flex items-center'>
        <Link href='https://play.google.com/'>
            <Image
                src={GooglePlay}
                alt='GooglePlay'
            />
        </Link>
        <Link href='https://apps.apple.com/'>
            <Image
                src={Apple}
                alt='GooglePlay'
                className='ml-3'
            />
        </Link>
    </div>
  )
}
