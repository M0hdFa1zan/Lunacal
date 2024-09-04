import { useState } from 'react'
import "./Gallery.css"

function Gallery() {

    const [slides, setSlides] = useState([
        { id: 1, src: '../Assets/Images/cardimg.png', hoverSrc: '../Assets/Images/123.png', alt: 'Image 1' },
        { id: 2, src: '../Assets/Images/cardimg.png', hoverSrc: '../Assets/Images/123.png', alt: 'Image 2' },
        { id: 3, src: '../Assets/Images/cardimg.png', hoverSrc: '../Assets/Images/123.png', alt: 'Image 3' },
    ]);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleImages = 3;

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const nextSlide = () => {
        setHoveredIndex(null);
        setCurrentIndex((prevIndex) => {
            const maxIndex = slides.length - visibleImages;
            return prevIndex < maxIndex ? prevIndex + 1 : 0;
        });
    };

    const prevSlide = () => {
        setHoveredIndex(null);
        setCurrentIndex((prevIndex) => {
            const maxIndex = slides.length - visibleImages;
            return prevIndex > 0 ? prevIndex - 1 : maxIndex;
        });
    };

    const addImage = () => {
        const newImageIndex = slides.length + 1;
        const newSlide = {
            id: newImageIndex,
            src: '../Assets/Images/cardimg.png',
            hoverSrc: '../Assets/Images/123.png',
            alt: "",
        };
        setSlides((prevSlides) => [...prevSlides, newSlide])
    };

    return (
        <div className='bio'>
            <div className='contain-bio'>
                <div className='row-oneg'>
                    <div className='icon-one'><img src='../Assets/Images/question.png' alt='' /></div>
                    <div className='tabs-g'>
                        <div className='option-g'>Gallery</div>
                    </div>
                    <div className='buttonsg'>
                        <div className='add-img'><button onClick={addImage}>+ ADD IMAGE</button></div>
                        <div className='left'><button onClick={prevSlide}><img src='../Assets/Images/leftarrow.png' alt='' /></button></div>
                        <div className='right'><button onClick={nextSlide}><img src='../Assets/Images/rightarrow.png' alt='' /></button></div>
                    </div>
                </div>
                <div className='row-two'>
                    <div className='icon-two'><img src='../Assets/Images/grid.png' alt='' /></div>
                    <div className='image-slider'>
                        <div className="carousel-container">
                            <div
                                className="carousel-slides"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
                                }}
                            >
                                {slides.map((slide, index) => (
                                    <img
                                        key={slide.id}
                                        src={hoveredIndex === index ? slide.hoverSrc : slide.src}
                                        alt={slide.alt}
                                        className="carousel-slide"
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
