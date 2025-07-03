import type React from "react";

interface Props {
    created_at: string
    image_url: string
    image_predict: number
}

const Prediction: React.FC<Props> = ({ created_at, image_predict, image_url }) => {
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex justify-end w-full">
                    <div className="bg-neutral-600 rounded-lg p-3">
                        <img src={image_url} width={120} />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-y-1">
                    <div className="text-[10px]">{created_at} • Previsão: {image_predict}</div>
                    <div>Resultado da análise aqui</div>
                </div>
            </div>
        </>
    )
}

export default Prediction;