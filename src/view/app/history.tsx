import { useEffect, useRef, useState } from "react";
import Cropper, { type Area } from "react-easy-crop";

import InputImg from "../../components/history/inputImg";
import Prediction from "../../components/history/prediction";
import Button from "../../components/common/button";
import Link from "../../components/common/link";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import cropedImage from "../../services/history/cropedImg";

interface HistoryItem {
    image_url: string,
    user_id: number,
    created_at: string,
    feedback_timestamp: string,
    image_predict: number,
    id: number,
    user_feedback: string,
}

const History = () => {

    const navigate = useNavigate();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const [loading, setLoading] = useState<boolean>(false);

    const [history, setHistory] = useState<HistoryItem[] | null>(null);

    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [zoom, setZoom] = useState(1);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)

    const getHistory = async () => {
        try{

            const response = await api.get('users/history');
            setHistory(response.data);
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); // Scrolls the screen to the end of the conversation
            
        } catch (error: any) {

            if (error.response.status === 401) { // Token has expired
                localStorage.clear();
                navigate('/')

            } else { // Unknown errors

                alert(error.response.data.detail);

            }
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImgSrc(URL.createObjectURL(file));
        }
    }

    const handlePrediction = async () => {
        setLoading(true)
        try {

            const blob = await cropedImage(imgSrc!, croppedAreaPixels!);
            const file = new File([blob], 'cut-image.jpeg', { type: 'image/jpeg' });
            const formData = new FormData();
            formData.append('file', file);

            await api.post('/users/predict', formData)
            setHistory(null);
            getHistory();

            setImgSrc(null) // close the window to crop image

        } catch (error: any) {
            if (error.response.status === 401) {

                localStorage.clear();
                navigate('/');

            } else {
                alert(String(error.response.data.detail))
            }
        }
        setLoading(false)
    }

    useEffect(() => {
        getHistory();

    }, [history])

    return (
        <>
            <div className="flex justify-center w-full h-full">
                <div className="flex flex-col w-full h-full justify-end items-center p-3">

                    <div className="flex flex-col w-full lg:w-6/12 overflow-auto">
                        {history && history.map((item) => {
                            return (
                                <Prediction created_at={item.created_at.split('T')[0]} image_predict={item.image_predict} image_url={item.image_url.split(';')[1]} />
                            )
                        })}
                        <div ref={messagesEndRef} /> {/* Scrolls the screen to the end of the conversation */}
                    </div>

                    <div className="w-full">
                        <InputImg onChange={handleFileChange} />
                    </div>

                    {imgSrc && <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/25">
                        <div className="inset-0 flex flex-col gap-y-3 justify-center p-3 rounded-lg bg-neutral-900">

                            <div className="relative size-[300px] lg:w-md aspect-square">
                                <Cropper 
                                    image={imgSrc}
                                    crop={crop}
                                    onCropChange={setCrop}
                                    zoom={zoom}
                                    onZoomChange={setZoom}
                                    aspect={1}
                                    onCropComplete={(_, pixels) => setCroppedAreaPixels(pixels)}
                                />
                            </div>

                            <div className="flex justify-end items-center gap-x-3">
                                <Link text="Cancelar" onClick={() => setImgSrc(null)} />
                                <Button loading={loading} text='Enviar' onClick={handlePrediction}/>
                            </div>

                        </div>
                    </div>}

                </div>
            </div>
        </>
    )
}

export default History;