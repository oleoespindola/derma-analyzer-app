import type { MouseEventHandler } from "react";

interface Props {
    loading?: boolean;
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<Props> = ({ loading, text, onClick }) => {
    return (
        <>
            <button className="bg-cyan-600 
            hover:bg-linear-to-bl hover:from-cyan-600 hover:to-sky-600
            shadow-lg rounded-md cursor-pointer
            p-2
            flex justify-center
            text-white"
            onClick={onClick}>
                {loading? 
                <div className="animate-spin">
                    <img src="./loading.svg" alt="loading ico" />
                </div> : text}
            </button>
        </>
    )
}

export default Button