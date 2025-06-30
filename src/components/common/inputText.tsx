interface Props {
    placeHolder: string;
    type: string
}

const InputText: React.FC<Props> = ({ placeHolder, type }) => {
    return (
        <>
            <input className="text-sm bg-neutral-700 rounded-sm p-2 outline-none focus:border-1 focus:border-cyan-100"
            type={type} placeholder={placeHolder} />
        </>
    )
}

export default InputText;