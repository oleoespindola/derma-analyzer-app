import type { Area } from "react-easy-crop";

const cropedImage = async function (
    imageSrc: string,
    croppedAreaPixels: Area
): Promise<Blob> {
    const image = new Image()
    image.src = imageSrc

    const canvas = document.createElement('canvas');
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;
    const ctx = canvas.getContext('2d');

    if (!ctx) throw new Error('Failed to get 2D context');

    ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
    );

    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            if (!blob) return;
            resolve(blob);
        }, 'image/jpeg', 1);
    })

}

export default cropedImage;