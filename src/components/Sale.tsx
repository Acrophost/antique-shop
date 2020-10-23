import React, {
    FunctionComponent,
    ForwardRefRenderFunction,
    ComponentPropsWithoutRef,
    useEffect,
    RefObject,
} from 'react';

import FurnitureMini from '../svgs/FurnitureMini';
import ClockMini from '../svgs/ClockMini';
import BooksMini from '../svgs/BooksMini';

const fwRef: ForwardRefRenderFunction<HTMLDivElement, ComponentPropsWithoutRef<'div'>> = (props, ref) => (
    <div className="sale" ref={ref} {...props}></div>
);

const SalesEl = React.forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(fwRef);

interface RefProps {
    refs: RefObject<HTMLDivElement>[];
    id: string;
}

const Sale: FunctionComponent<RefProps> = (props: RefProps) => {
    props.refs[2] = React.createRef<HTMLDivElement>();

    useEffect(() => {
        const animateSale = (): void => {
            const titleContainer = document.getElementsByClassName('animatedBackground')[0];

            if (!props.refs[2].current || !titleContainer) return;

            if (window.scrollY > props.refs[2].current.getBoundingClientRect().top + 1000)
                titleContainer.classList.add('animatedBackground-in');

            if (
                window.scrollY < props.refs[2].current.getBoundingClientRect().top ||
                window.scrollY > props.refs[2].current.getBoundingClientRect().bottom + 3000
            )
                titleContainer.classList.remove('animatedBackground-in');
        };
        window.addEventListener('scroll', animateSale);
        return (): void => {
            window.removeEventListener('scroll', animateSale);
        };
    }, [props.refs]);

    return (
        <SalesEl ref={props.refs[2]} id={props.id}>
            <div className="animatedBackground">
                <div className="img-bg">
                    <h2 className="sale__title">Current Sales</h2>
                    <svg className="sale__accent-line" height="100" width="700">
                        <line x1="0" y1="0" x2="800" y2="0" />
                    </svg>
                    <div className="sale__all-sales">
                        <div className="sale__single">
                            <FurnitureMini className="sale__icon-furniture" />
                            <div className="sale__category-text">Furniture: -15%</div>
                            <div className="sale__date-text">Available till 08.20XX</div>
                        </div>
                        <div className="sale__single">
                            <ClockMini className="sale__icon-clocks" />
                            <div className="sale__category-text">Clocks: -20%</div>
                            <div className="sale__date-text">Available till 10.20XX</div>
                        </div>
                        <div className="sale__single">
                            <BooksMini className="sale__icon-books" />
                            <div className="sale__category-text">Books: -10%</div>
                            <div className="sale__date-text">Available for the rest of the month</div>
                        </div>
                    </div>
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </SalesEl>
    );
};

export default Sale;
