import React, { ReactElement, useState } from 'react';

type Antique = { name: string; description: string; image: string; alt: string };

type AntiqueProps = { antiques: Antique[] };

const Gallery = (props: AntiqueProps): ReactElement => {
    const [currentlyHovered, setCurrentHover] = useState(-1);

    return (
        <div className="gallery">
            <h2 className="gallery__title">Our antiques</h2>
            <svg className="gallery__accent-line" height="100" width="700">
                <line x1="0" y1="0" x2="800" y2="0" />
            </svg>
            <div className="gallery__images-container">
                {props.antiques.map((val, i) => {
                    return (
                        <button
                            className="gallery__button"
                            key={i}
                            onMouseEnter={(): void => setCurrentHover(i)}
                            onMouseLeave={(): void => setCurrentHover(-1)}
                        >
                            <img src={val.image} alt={val.alt} className="gallery__img" />
                            {currentlyHovered === i && (
                                <div className="gallery__button-overlay">
                                    <div className="gallery__button-text">
                                        <h3>{val.name}</h3>
                                        <p>See details</p>
                                    </div>
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;
