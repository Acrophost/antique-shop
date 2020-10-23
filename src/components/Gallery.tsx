import React, {
    FunctionComponent,
    useState,
    ForwardRefRenderFunction,
    ComponentPropsWithoutRef,
    RefObject,
    useEffect,
} from 'react';

import Modal from './Modal';
import Details from './Details';

const fwRef: ForwardRefRenderFunction<HTMLDivElement, ComponentPropsWithoutRef<'div'>> = (props, ref) => (
    <div className="gallery" ref={ref} {...props}></div>
);

const GalleryEl = React.forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(fwRef);

interface Antique {
    name: string;
    description: string;
    image: string;
    alt: string;
}

interface AntiqueProps {
    antiques: Antique[];
    refs: RefObject<HTMLDivElement>[];
    id: string;
}

const Gallery: FunctionComponent<AntiqueProps> = (props: AntiqueProps) => {
    const [currentlyHovered, setCurrentHover] = useState(-1);
    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState({ key: -1, img: '', alt: '', name: '', description: '' });
    props.refs[3] = React.createRef<HTMLDivElement>();

    useEffect(() => {
        const animateGallery = (): void => {
            const title = document.getElementsByClassName('gallery__title')[0];
            const boxContainer = document.getElementsByClassName('gallery__animatedBox')[0];
            const line = document.getElementsByClassName('gallery__accent-line')[0];

            if (!props.refs[3].current || !title || !boxContainer) return;

            const top = props.refs[3].current.getBoundingClientRect().top;
            const bottom = props.refs[3].current.getBoundingClientRect().bottom;

            if (top <= 600 && bottom >= -50 && !boxContainer.classList.contains('galleryBox-in')) {
                title.classList.remove('out');
                line.classList.remove('out');
                boxContainer.classList.add('galleryBox-in');
            }
            if ((top > 600 || bottom < -50) && boxContainer.classList.contains('galleryBox-in')) {
                title.classList.add('out');
                line.classList.add('out');
                boxContainer.classList.remove('galleryBox-in');
            }
        };
        window.addEventListener('scroll', animateGallery);
        return (): void => {
            window.removeEventListener('scroll', animateGallery);
        };
    }, []);

    return (
        <GalleryEl ref={props.refs[3]} id={props.id}>
            <h2 className="gallery__title">Our antiques</h2>
            <svg className="gallery__accent-line" height="100" width="700">
                <line x1="0" y1="0" x2="800" y2="0" />
            </svg>
            <div className="gallery__animatedBox">
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
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {showModal ? (
                <Modal>
                    <Details modal={modal} setShowModal={setShowModal} />
                </Modal>
            ) : null}
        </GalleryEl>
    );
};

export default Gallery;
