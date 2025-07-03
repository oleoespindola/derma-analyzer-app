interface Props {
    onChange?: React.ChangeEventHandler<HTMLInputElement | undefined>
}

const InputImg: React.FC<Props> = ({ onChange }) => {
    return (
        <>
            <div className="flex justify-center w-full mt-5 mb-5">

                <div className="flex
                items-center justify-center
                bg-cyan-600
                hover:bg-linear-to-bl hover:from-cyan-600 hover:to-sky-600
                w-1/3
                pt-2 pb-2
                rounded-lg
                ">
                    <div className="relative inline-block w-full">
                        <div className="flex justify-center" ><img src="./photo_camera.svg" alt="Ícone de Câmera • Enviar Imagem" /></div>
                        <input type="file"className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" 
                        onChange={onChange}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default InputImg;