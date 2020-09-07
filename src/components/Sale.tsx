import React, { ReactElement } from 'react';

const Sale = (): ReactElement => (
    <div className="sale">
        <h2 className="sale__title">Current Sales</h2>
        <svg className="sale__accent-line" height="100" width="700">
            <line x1="0" y1="0" x2="800" y2="0" />
        </svg>
        <div className="sale__all-sales">
            <div className="sale__single">
                <div className="sale__icon-furniture"></div>
                <div className="sale__category-text">Furniture: -15%</div>
                <div className="sale__date-text">Available till 08.20XX</div>
            </div>
            <div className="sale__single">
                <div className="sale__icon-clocks"></div>
                <div className="sale__category-text">Clocks: -20%</div>
                <div className="sale__date-text">Available till 10.20XX</div>
            </div>
            <div className="sale__single">
                <div className="sale__icon-books"></div>
                <div className="sale__category-text">Books: -10%</div>
                <div className="sale__date-text">Available for the rest of the month</div>
            </div>
        </div>
    </div>
);

export default Sale;
