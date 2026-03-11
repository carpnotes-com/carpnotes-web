import Image from "next/image";
import Calendar from "@/public/assets/calendar.svg";

interface DateOfPostProps {
    date: string
};

export default function DateOfPost({ date }: DateOfPostProps) {
    return (
        <div className="font-extralight font-sans text-sm text-white bg-white/15 rounded-full p-1.5 flex items-center">
            <Image
                src={Calendar}
                alt="Calendar"
                width={16}
                height={16}
                className="mr-1"
            />
            {date}
        </div>
    );
};