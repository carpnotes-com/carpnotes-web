import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header
            className="bg-[#0b3b42] flex items-center justify-between px-[60px] py-[16px] w-full"
            data-name="Header"
            data-node-id="1017:2377"
        >
            <Link
                href="/"
                className="flex gap-[8px] items-center shrink-0 cursor-pointer"
                data-name="Container logo"
                data-node-id="I1017:2377;968:3412"
            >
                <div
                    className="h-[21px] relative shrink-0 w-[37px]"
                    data-name="ChatGPT Image 6 лист. 2025 р., 18_12_24 1"
                    data-node-id="I1017:2377;1198:4164"
                >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <Image
                            alt="Carp Notes Logo"
                            className="absolute h-[139.53%] left-[-10.6%] max-w-none top-[-18.6%] w-[119.21%]"
                            src="http://localhost:3845/assets/d0f7cfccedf472ae2ca92ae1c67beabbc2476f5e.png"
                            width={44}
                            height={29}
                            unoptimized
                        />
                    </div>
                </div>
                <p
                    className="font-dmSans font-semibold leading-[1.1] relative shrink-0 text-[#dcc49f] text-[14px] whitespace-nowrap tracking-[-0.28px]"
                    data-node-id="I1017:2377;968:3430"
                >
                    CARP NOTES
                </p>
            </Link>

            <div
                className="flex gap-[16px] items-center shrink-0"
                data-name="language"
                data-node-id="I1017:2377;968:3431"
            >
                <div
                    className="flex gap-[6px] items-center shrink-0"
                    data-node-id="I1017:2377;968:3432"
                >
                    <div
                        className="relative shrink-0 size-[14px]"
                        data-name="radio button"
                        data-node-id="I1017:2377;968:3433"
                    >
                        <Image
                            alt="Selected"
                            className="block max-w-none size-full"
                            src="http://localhost:3845/assets/1dc556e3c636664e172cc8826076cc7bec893fd9.svg"
                            width={14}
                            height={14}
                            unoptimized
                        />
                    </div>
                    <p
                        className="font-dmSans font-medium leading-[1.1] relative shrink-0 text-[16px] whitespace-nowrap text-white"
                        data-node-id="I1017:2377;968:3436"
                    >
                        EN
                    </p>
                </div>

                <div
                    className="flex gap-[6px] items-center shrink-0"
                    data-node-id="I1017:2377;968:3437"
                >
                    <div
                        className="relative shrink-0 size-[13px]"
                        data-node-id="I1017:2377;968:3438"
                    >
                        <Image
                            alt="Unselected"
                            className="block max-w-none size-full"
                            src="http://localhost:3845/assets/f26a6a828d29e8387dcdcf70cefeafb6aac2df97.svg"
                            width={13}
                            height={13}
                            unoptimized
                        />
                    </div>
                    <p
                        className="font-dmSans font-medium leading-[1.1] relative shrink-0 text-[16px] whitespace-nowrap text-white"
                        data-node-id="I1017:2377;968:3439"
                    >
                        UA
                    </p>
                </div>
            </div>
        </header>
    );
}
