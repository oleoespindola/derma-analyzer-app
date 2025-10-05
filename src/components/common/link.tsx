import type { MouseEventHandler } from "react";

interface Props {
    text: string;
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
}

const Link: React.FC<Props> = ({ text, href, onClick }) => {
    return (
        <>
            <a className="cursor-pointer text-sky-900 hover:text-sky-700 text-sm"
            href={href} onClick={onClick}>{text}</a>
        </>
    )
}

export default Link