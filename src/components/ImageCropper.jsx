import { useRef, useState } from "react";
import PropTypes from "prop-types";
import ReactCrop, {
    centerCrop,
    convertToPixelCrop,
    makeAspectCrop,
} from "react-image-crop";
import setCanvasPreview from "../JS function/setCanvasPreview";

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

const ImageCropper = (props) => {
    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);

    const [imageSrc, setImageSrc] = useState("");
    const [crop, setCrop] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    function handleOnChangeFile(e) {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            if (errorMsg) {
                setErrorMsg("");
            }

            const imageElement = new Image();
            const imageUrl = reader.result?.toString() || "";
            imageElement.src = imageUrl;

            imageElement.addEventListener("load", (e) => {
                const { naturalWidth, naturalHeight } = e.currentTarget;
                if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
                    setErrorMsg(`Kích cỡ ảnh ít nhất phải là ${MIN_DIMENSION}px`);
                    setImageSrc("");
                    setCrop(null);
                    return;
                }
                setCrop(null);
            });
            setImageSrc(imageUrl);
        });
        reader.readAsDataURL(file);
    }

    function onImageLoad(e) {
        const { width, height } = e.currentTarget;
        const cropInPercent = (MIN_DIMENSION / width) * 100;
        const crop = makeAspectCrop(
            {
                unit: "%",
                width: cropInPercent,
            },
            ASPECT_RATIO,
            width,
            height
        );
        const centeredCrop = centerCrop(crop, width, height);
        setCrop(centeredCrop);
    }

    return (
        <div className="imageZone mt-3 flex flex-col gap-3">
            <div>
                <input
                    type="file"
                    accept="image/*"
                    className="file:bg-[#172754] file:text-white file:rounded-md file:py-2 file:px-5 file:hover:bg-[#2c4383] file:hover:text-[white] file:border-none"
                    onChange={handleOnChangeFile}
                />
            </div>
            {errorMsg && <p className="text-red-500 font-semibold">{errorMsg}</p>}

            {imageSrc && (
                <div className="flex flex-col items-center mt-3">
                    <ReactCrop
                        crop={crop}
                        circularCrop
                        keepSelection
                        aspect={ASPECT_RATIO}
                        minWidth={MIN_DIMENSION}
                        onChange={(percentCrop) => setCrop(percentCrop)}
                    >
                        <img
                            ref={imgRef}
                            src={imageSrc}
                            alt="Uploaded file"
                            onLoad={onImageLoad}
                            style={{ maxHeight: "70vh" }}
                        />
                    </ReactCrop>
                    <button
                        className="bg-[#172754] text-white rounded-md py-2 px-5 hover:bg-[#2c4383] hover:text-[white] mt-3"
                        onClick={() => {
                            setCanvasPreview(
                                imgRef.current,
                                previewCanvasRef.current,
                                convertToPixelCrop(
                                    crop,
                                    imgRef.current.width,
                                    imgRef.current.height
                                )
                            );
                            const croppedImageDadtaURL = previewCanvasRef.current.toDataURL();
                            console.log("Cropped Image data", croppedImageDadtaURL);
                            props.child2updateAvatarUrl(croppedImageDadtaURL);
                            props.child2OnSetShowModal();
                        }}
                    >
                        Cắt ảnh và đặt làm ảnh đại diện
                    </button>
                </div>
            )}
            {crop && (
                <canvas
                    ref={previewCanvasRef}
                    style={{
                        display: "none",
                        border: "1px solid black",
                        objectFit: "contain",
                        width: 150,
                        height: 150,
                    }}
                />
            )}
        </div>
    );
};

ImageCropper.propTypes = {
    child2updateAvatarUrl: PropTypes.func,
    child2OnSetShowModal: PropTypes.func,
};

export default ImageCropper;
