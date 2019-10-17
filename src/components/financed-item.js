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


    const itemNameId = "itemName-" + props.itemIndex;
    const priceId = "price-" + props.itemIndex;

    return (
        <fieldset className='financedItem column'>
            <div className='row'>
                <div className='itemName'>
                    <label htmlFor={itemNameId}>{'Item Name'}</label>
                    <input
                        id={itemNameId}
                        type="text"
                        name="itemName"
                        value={props.financedItem.itemName}
                        onChange={(event) => updateHandler(event)} />
                </div>

                <div className='price'>
                    <label htmlFor={priceId}>{'Price'}</label>
                    <input
                        id={priceId}
                        type="text"
                        name="price"
                        value={!price ? '' : price}
                        onChange={(event) => updateHandler(event)} />
                </div>
            </div>

            <div className='row'>
                <div className='minimum-payment'>
                    <span>{'Minimum Payment'}</span>
                    <span className='value'>
                        {props.financedItem.minimumPayment}
                    </span>
                </div>
            </div>

            <div className='row'>
                <div className='rate'>
                    <span>{'Rate'}</span>
                    <span className='value'>
                        {props.financedItem.rate}
                    </span>
                </div>
            </div>
        </fieldset>
    )
};

FinancedItem.propTypes = {
    financedItem: PropTypes.instanceOf(FinancedItemData),
    itemIndex: PropTypes.number,
    updateFinancedItems: PropTypes.func
};

export default FinancedItem;