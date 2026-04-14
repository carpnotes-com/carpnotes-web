import Image from "next/image";
import Calendar from "@/public/assets/calendar.svg";

interface DateOfPostProps {
    date: string | null,
};

export default function DateOfPost({ date }: DateOfPostProps) {
    return (
        <div className="
        font-extralight font-sans text-[11px] text-white bg-white/15 rounded-full p-1.5 flex items-center backdrop-blur-sm
        md:text-sm
        ">
            
            {/* Calendar image */}
            <Image
                src={Calendar}
                alt="Calendar"
                width={16}
                height={16}
                className="
                mr-1
                "
            />

            {/* Date text */}
            {date}
        </div>
    );
};