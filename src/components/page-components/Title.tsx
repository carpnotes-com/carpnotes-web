interface TitleProps {
    text: string,
    additionalStyles?: string
}

export default function Title({ text, additionalStyles }: TitleProps) {
    return (
        <h1 className={`
        text-3xl font-medium w- ${additionalStyles}
        md:text-5xl
        `}>
            {text}
        </h1>
    )
}
