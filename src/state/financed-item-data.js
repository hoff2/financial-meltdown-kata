import t from 'tcomb';

const FinancedItemData = t.struct({
    id: t.maybe(t.String),
    itemName: t.String,
    price: t.Number,
    minimumPayment: t.maybe(t.Number),
    rate: t.maybe(t.Number)
}, "FinancedItemData");

export const getDefaultFinancedItem = () => {
    return FinancedItemData({
        id: null,
        itemName: '',
        price: 0.00,
        minimumPayment: null,
        rate: null
    })
};

export default FinancedItemData;