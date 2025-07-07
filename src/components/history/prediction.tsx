import type React from "react";

interface Props {
    created_at: string
    image_url: string
    image_predict: number
}

const Prediction: React.FC<Props> = ({ created_at, image_predict, image_url }) => {

    const prediction_message = () => {
        if (image_predict <= 0.3) {
            return "Compatível com lesões de baixo risco (benignas)."
        } else if (image_predict <= 0.7) {
            return "Compatibilidade incerta. Não há sinais claros de lesão benigna ou maligna."
        } else {
            return "Compatível com lesões de alto risco (potencialmente malignas). Procure um especialista."
        }
    }

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex justify-end w-full">
                    <div className="bg-neutral-600 rounded-lg p-3">
                        <img src={image_url} width={120} />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-y-1">
                    <div className="text-[10px]">{created_at} • Previsão: {String(Number(image_predict * 100).toFixed(2) + "%")}</div>
                    <div>{prediction_message()}</div>
                </div>
            </div>
        </>
    )
}

export default Prediction;