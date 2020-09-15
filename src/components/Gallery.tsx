import React, { FunctionComponent, useState } from 'react';

import Modal from './Modal';

type Antique = { name: string; description: string; image: string; alt: string };

type AntiqueProps = { antiques: Antique[] };

const Gallery: FunctionComponent<AntiqueProps> = (props: AntiqueProps) => {
    const [currentlyHovered, setCurrentHover] = useState(-1);
    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState({ key: -1, img: '', alt: '', name: '', description: '' });

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
                            onClick={(): void => {
                                setShowModal(true);
                                setModal({
                                    key: i,
                                    img: val.image,
                                    alt: val.alt,
                                    name: val.name,
                                    description: val.description,
                                });

                                console.log(showModal);
                            }}
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
            {showModal ? (
                <Modal>
                    <div className="modal">
                        <div className="modal__overlay" onClick={(): void => setShowModal(false)}>
                            <div className="modal__window" onClick={(event): void => event.stopPropagation()}>
                                <button
                                    className="modal__button"
                                    onClick={(): void => {
                                        setShowModal(false);
                                    }}
                                >
                                    <div className="modal__button-cross"></div>
                                </button>
                                <img className="modal__img" src={modal.img} alt={modal.alt} />
                                <div className="modal__text">
                                    <h3 className="modal__title">{modal.name}</h3>
                                    <div className="modal__description">{modal.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </div>
    );
};

export default Gallery;
