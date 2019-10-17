import React from "react";
import PropTypes from 'prop-types';
import FinancedItemData from "../state/financed-item-data";
import '../styles/financed-items.css';

const FinancedItem = (props) => {

    const updateHandler = (event) => {
        if (event.target.name === 'itemName') {
            props.updateFinancedItems(
                props.itemIndex,
                props.financedItem,
                event.target.name,
                event.target.value)
        } else {
            const newValue = event.target.value ? parseFloat(event.target.value) : 0.0;

            props.updateFinancedItems(
                props.itemIndex,
                props.financedItem,
                event.target.name,
                newValue)
        }
    };

    const price = props.financedItem.price;

    return (
        <div className='financedItem row'>
            <div className='itemName column'>
                Item Name
                <input
                    type="text"
                    name="itemName"
                    value={props.financedItem.itemName}
                    onChange={(event) => updateHandler(event)} />
            </div>

            <div className='price column'>
                Price
                <input
                    type="text"
                    name="price"
                    value={!price ? '' : price}
                    onChange={(event) => updateHandler(event)} />
            </div>

            <div className='minimum-payment column'>
                Minimum Payment
                <div className='value'>
                    {props.financedItem.minimumPayment}
                </div>
            </div>

            <div className='rate column'>
                Rate
                <div className='value'>
                    {props.financedItem.rate}
                </div>
            </div>
        </div>
    )
};

FinancedItem.propTypes = {
    financedItem: PropTypes.instanceOf(FinancedItemData),
    itemIndex: PropTypes.number,
    updateFinancedItems: PropTypes.func
};

export default FinancedItem;