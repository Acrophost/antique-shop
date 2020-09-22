import React, { FunctionComponent, ForwardRefRenderFunction, ComponentPropsWithoutRef } from 'react';

import FurnitureMini from '../svgs/FurnitureMini';
import ClockMini from '../svgs/ClockMini';
import BooksMini from '../svgs/BooksMini';

const fwRef: ForwardRefRenderFunction<HTMLDivElement, ComponentPropsWithoutRef<'div'>> = (props, ref) => (
    <div className="sale" ref={ref} {...props}></div>
);

const SalesEl = React.forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(fwRef);

interface RefProps {
    refs: { sales: React.RefObject<HTMLDivElement> };
}

const Sale: FunctionComponent<RefProps> = (props: RefProps) => {
    props.refs.sales = React.createRef<HTMLDivElement>();
    return (
        <SalesEl ref={props.refs.sales}>
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
        </SalesEl>
    );
};

export default Sale;
