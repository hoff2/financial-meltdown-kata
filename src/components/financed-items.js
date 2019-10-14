import React from 'react';
import FinancedItem from "./financed-item";

const FinancedItems = (props) => {

    return (
    <div>
        <header>{'Financed Items'}</header>
        <div>
            {props.financedItems.map((value, index) => {
                return <FinancedItem financedItem={value} itemIndex={index} key={index}/>
            })}
        </div>
    </div>
)};

FinancedItems.propTypes = {};

export default FinancedItems;