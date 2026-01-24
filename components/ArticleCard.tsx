import Image, { StaticImageData } from "next/image"
import Watch from "../public/assets/watch.png"

interface ArticleCardProps {
  imageUrl: string,
  timeToRead: string,
  topic: string,
}

export default function ArticleCard({
  imageUrl,
  timeToRead,
  topic,
}:ArticleCardProps) {
  return (
    <div
      className="bg-cover bg-center rounded-xl h-md w-md flex"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="flex justify-center flex-col mt-auto mx-5 mb-14">
        <div className="text-md text-white bg-white/15 rounded-full mr-auto p-1.5 flex items-center">
          <Image
            src={Watch}
            alt="Picture"
            width={16}
            className="mr-1"
          />
          {timeToRead} min read
        </div>
        <div className="text-3xl text-white font-light">
          {topic}
        </div>
      </div>
    </div>
  )
}
