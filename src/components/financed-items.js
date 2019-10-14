import React from 'react';
import FinancedItem from "./financed-item";
import FinancedItemData from "../state/financed-item-data";
import PropTypes from 'prop-types';

const FinancedItems = (props) => {

    return (
    <div>
        <header>{'Financed Items'}</header>
        <div>
            {props.financedItems.map((value, index) => {
                return <FinancedItem
                    financedItem={value}
                    itemIndex={index}
                    key={index}
                    updateFinancedItems={props.updateFinancedItems}/>
            })}
        </div>
    </div>
)};

FinancedItems.propTypes = {
    financedItems: PropTypes.arrayOf(PropTypes.instanceOf(FinancedItemData)),
    updateFinancedItems: PropTypes.func
};

export default FinancedItems;