'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface ComponentProps {
    additionalStyles?: string,
};

export default function Language({ additionalStyles }: ComponentProps) {
    let router = useRouter();
    let pathname = usePathname();
    let searchParams = useSearchParams();

    let locale = pathname.slice(1, 3);
    let pathnameWithoutLocale = pathname.slice(3);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newLocale = e.target.value;
        const pageNumber = searchParams.get('page');

        router.replace(`/${newLocale}${pathnameWithoutLocale}${pageNumber ? `?page=${pageNumber}` : ``}`);
    };

    return (
        <fieldset className={`
        flex gap-4 ${additionalStyles}`
        }>

            {/* English locale markup */}
            <div className="
            flex items-center
            ">
                <input
                    type="radio"
                    name="current-locale"
                    id="en-locale"
                    checked={locale === `en`}
                    value="en"
                    onChange={handleChange}
                    className="
                    appearance-none w-4 h-4 rounded-full border checked:border-3 checked:border-amber-100
                    "
                />

                <label htmlFor="en-locale" className="
                ml-1
                ">
                    EN
                </label>
            </div>

            {/* Ukrainian locale markup */}
            <div className="
            flex items-center
            ">
                <input
                    type="radio"
                    name="current-locale"
                    id="ua-locale"
                    checked={locale === `ua`}
                    value="ua"
                    onChange={handleChange}
                    className="
                    appearance-none w-4 h-4 rounded-full border checked:border-3 checked:border-amber-100
                    "
                />

                <label htmlFor="ua-locale" className="
                ml-1
                ">
                    UA
                </label>
            </div>
        </fieldset>
    );
};
