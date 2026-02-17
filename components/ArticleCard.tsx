import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import Watch from "../public/assets/watch.png"

interface ArticleCardProps {
  image: string,
  readTime: string,
  title: string,
  href: string,
  additional_styles?: string,
}

export default function ArticleCard({
  image,
  readTime,
  title,
  href,
  additional_styles,
}:ArticleCardProps) {
  return (
    <div
      className={`bg-cover bg-center rounded-xl flex flex-col h-[100%] ${additional_styles}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex justify-center flex-col mt-auto mx-5 mb-14">
        <div className="text-md text-white bg-white/15 rounded-full mr-auto p-1.5 flex items-center">
          <Image
            src={Watch}
            alt="Picture"
            width={16}
            className="mr-1"
          />
          {readTime} min to read
        </div>
        <Link href={href}>
          <div className="text-3xl text-white font-light">
            {title}
          </div>
        </Link>
      </div>
    </div>
  )
}
