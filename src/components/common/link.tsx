import type { MouseEventHandler } from "react";

interface Props {
    text: string;
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
}

const Link: React.FC<Props> = ({ text, href, onClick }) => {
    return (
        <>
            <a className="cursor-pointer text-cyan-100 hover:text-cyan-400 text-sm"
            href={href} onClick={onClick}>{text}</a>
        </>
    )
}

export default Link