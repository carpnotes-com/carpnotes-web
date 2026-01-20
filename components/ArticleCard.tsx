import Image, { StaticImageData } from "next/image"

interface ArticleCardProps {
  image: string,
  timeToRead: string,
  topic: string,

}

export default function ArticleCard({
  image,
  timeToRead,
  topic,
}:ArticleCardProps) {
  return (
    <div className="w-md relative">
      <Image src={image} alt="Card" width={240} height={480} />

      <div className="absolute inset-0 flex top-auto justify-center flex-col mx-5 mb-14">
        <div className="text-md text-white bg-white/15 rounded-full mr-auto p-1.5 flex items-center">
          <Image
            src={'/assets/watch.png'}
            alt="Picture"
            width={16}
            height={16}
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
