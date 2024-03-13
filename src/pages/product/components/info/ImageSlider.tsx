import {useState} from "react";

/**
 * @since 
 * @author 이호연
 */

export type ImageData = {
    id: number;
    imageUrl: string;
};

type ImageSliderProps = {
    images: ImageData[];
}

enum Direction {
    Left,
    Right
}

// ImageSlider 컴포넌트
const ImageSlider = (props: ImageSliderProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [sliderIndex, setSliderIndex] = useState(0);

    // 한 번에 표시할 이미지의 수
    const imagesToShow = 4;

    // 이미지 슬라이더 이동 로직
    const slideImages = (direction: Direction) => {
        if (direction === Direction.Left) {
            setSliderIndex((prevIndex) => Math.max(0, prevIndex - imagesToShow));
        } else {
            setSliderIndex((prevIndex) => Math.min(props.images.length - imagesToShow, prevIndex + imagesToShow));
        }
    };

    // 선택된 이미지 변경 로직
    const selectImage = (index: number) => {
        setSelectedIndex(index);
    };

    // 슬라이더의 현재 위치 계산
    const getSliderPosition = () => {
        const totalVisibleThumbnails = imagesToShow * 100;
        return `-${(sliderIndex / props.images.length) * totalVisibleThumbnails}%`;
    };

    return (
        <div className="basis-1/2 w-32 flex flex-col items-center p-20">

            {
                props.images.length > 0 && (
                    <SelectedImage id={props.images[selectedIndex].id}
                                   imageUrl={props.images[selectedIndex].imageUrl}/>
                )
            }

            <div className="flex items-center mt-4">
                {/* 왼쪽버튼 */}
                <Button onClick={() => slideImages(Direction.Left)}
                        disabled={sliderIndex === 0}
                        content={<>&lt;</>}/>

                <div className="overflow-hidden w-full">

                    <div
                        className="grid grid-flow-col auto-cols-max gap-4 transition-transform duration-300"
                        style={{transform: `translateX(${getSliderPosition()})`}}>
                        {props.images.slice(sliderIndex, sliderIndex + imagesToShow).map((image, index) => (
                            <button key={image.id}
                                    onClick={() => selectImage(sliderIndex + index)}
                                    className={`focus:outline-none ${sliderIndex + index === selectedIndex ? 'ring-2 ring-blue-500' : ''}`}>
                                <img
                                    src={image.imageUrl}
                                    alt={`Thumbnail ${image.id}`}
                                    className="h-24 w-24 object-cover"
                                />
                            </button>
                        ))}
                    </div>

                </div>
                {/* 오른쪽 버튼 */}
                <Button onClick={() => slideImages(Direction.Right)}
                        disabled={sliderIndex >= props.images.length - imagesToShow}
                        content={<>&gt;</>}/>
            </div>
        </div>
    );
};

type ButtonProps = {
    onClick: () => void;
    disabled: boolean;
    content: JSX.Element
}

const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className="disabled:opacity-50"
            disabled={props.disabled}
        >
            {props.content}
        </button>
    )
}

const SelectedImage = (props: ImageData) => {
    return (
        <div className=" w-full max-w-screen-lg mx-auto">
            <img src={props.imageUrl} alt={`Selected product ${props.id}`} className="w-full h-auto rounded-3xl shadow-sm border-2 border-gray-100"
            />
        </div>
    )
}
export default ImageSlider;
