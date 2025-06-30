import type { MouseEventHandler } from "react";

interface Props {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const Button: React.FC<Props> = ({ text, onClick }) => {
    return (
        <>
            <button className="bg-cyan-600 
            hover:bg-linear-to-bl hover:from-cyan-600 hover:to-sky-600 
            shadow-lg rounded-md cursor-pointer
            pt-2 pb-2"
            onClick={onClick}>{text}</button>
        </>
    )
}

export default Button