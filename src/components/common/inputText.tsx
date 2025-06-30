interface Props {
    placeHolder: string;
    type: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | undefined>
}

const InputText: React.FC<Props> = ({ placeHolder, type, value, onChange }) => {
    return (
        <>
            <input className="text-sm bg-neutral-700 rounded-sm p-2 outline-none focus:border-1 focus:border-cyan-100"
            type={type} placeholder={placeHolder} onChange={onChange} value={value}/>
        </>
    )
}

export default InputText;