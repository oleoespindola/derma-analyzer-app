import type React from "react";

interface Props {
    created_at: string
    image_url: string
    image_predict: number
}

const Prediction: React.FC<Props> = ({ created_at, image_predict, image_url }) => {

    const prediction_message = () => {
        if (image_predict < 0.5) {
            return "Compatível com lesões de baixo risco"
        } else if (image_predict <= 0.7) {
            return "Compatível com lesões de alto risco"
        } else {
            return "⚠️ Compatível com lesões de alto risco • POTENCIALMENTE MALIGNO"
        }
    }

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex justify-end w-full bg-neutral-200 rounded-t-lg">
                    <div className="p-3">
                        <img src={image_url} width={120} />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-y-1 bg-neutral-300 p-5 mb-5 rounded-b-lg">
                    <div className="text-[10px]">{created_at}</div>
                    <div className="text-[15px]">Previsão: {String(Number(image_predict * 100).toFixed(2) + "%")}</div>
                    <div>{prediction_message()}</div>
                </div>
            </div>
        </>
    )
}

export default Prediction;