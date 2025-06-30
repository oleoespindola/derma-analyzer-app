import type { MouseEventHandler } from "react";

interface Props {
    src: string;
    alt: string;
    text?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const ButtonIco: React.FC<Props> = ({ src, alt, text, onClick }) => {
    return (
        <>
            <button className="cursor-pointer flex ml-4 mr-4 gap-x-2"
                onClick={onClick}>

                <img src={src} alt={alt}/>
                {text}

            </button>
        </>
    )
}

export default ButtonIco