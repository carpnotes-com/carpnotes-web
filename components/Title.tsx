interface TitleProps {
  text: string,
  style?: string
}

export default function Title({
  text,
  style
}: TitleProps) {
    return (
        <h1 className={`text-5xl font-medium ${style}`}>
            {text}
        </h1>
    )
}
