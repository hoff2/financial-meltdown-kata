import React from "react";
import PropTypes from 'prop-types';
import FinancedItemData from "../state/financed-item-data";

const FinancedItem = (props) => {

    const updateHandler = (event) => {
        if (event.target.name === 'itemName') {
            props.updateFinancedItems(
                props.itemIndex,
                props.financedItem,
                event.target.name,
                event.target.value)
        } else {
            props.updateFinancedItems(
                props.itemIndex,
                props.financedItem,
                event.target.name,
                parseFloat(event.target.value))
        }
    };

    return (
        <div>
            <label className='itemName'>
                Item Name
                <input
                    type="text"
                    name="itemName"
                    value={props.financedItem.itemName}
                    onChange={(event) => updateHandler(event)} />
            </label>

            <label className='price'>
                Price
                <input
                    type="text"
                    name="price"
                    value={props.financedItem.price}
                    onChange={(event) => updateHandler(event)} />
            </label>

            <label className='minimum-payment'>
                Minimum Payment
                <div className='value'>
                    {props.financedItem.minimumPayment}
                </div>
            </label>

            <label className='rate'>
                Rate
                <div className='value'>
                    {props.financedItem.rate}
                </div>
            </label>
        </div>
    )
};

FinancedItem.propTypes = {
    financedItem: PropTypes.instanceOf(FinancedItemData),
    itemIndex: PropTypes.number,
    updateFinancedItems: PropTypes.func
};

export default FinancedItem;