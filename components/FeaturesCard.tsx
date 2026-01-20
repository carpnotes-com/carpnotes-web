import Image, { StaticImageData } from "next/image";

interface FeaturesCardProps {
  image: StaticImageData;
  title: string;
  subdescription: string;
  description: string;
}

export default function FeaturesCard({
  image,
  title,
  subdescription,
  description,
}: FeaturesCardProps) {
  return (
    <div className="w-md">
      <Image src={image} alt="Image" className="my-2" />

      <div className="text-xl font-semibold">{title}</div>

      {subdescription}

      <hr className="h-px bg-gray-400 border-0 my-2" />

      <div>{description}</div>
    </div>
  );
}
