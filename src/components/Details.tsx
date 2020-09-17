import React, { FunctionComponent, Dispatch } from 'react';

interface DetailProps {
    setShowModal: Dispatch<boolean>;
    modal: { img: string; alt: string; name: string; description: string };
}

const Details: FunctionComponent<DetailProps> = (props: DetailProps) => {
    return (
        <div className="modal">
            <div className="modal__overlay" onClick={(): void => props.setShowModal(false)}>
                <div className="modal__window" onClick={(event): void => event.stopPropagation()}>
                    <button
                        className="modal__button"
                        onClick={(): void => {
                            props.setShowModal(false);
                        }}
                    >
                        <div className="modal__button-cross"></div>
                    </button>
                    <img className="modal__img" src={props.modal.img} alt={props.modal.alt} />
                    <div className="modal__text">
                        <h3 className="modal__title">{props.modal.name}</h3>
                        <div className="modal__description">{props.modal.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
