import t from 'tcomb';

const FinancedItemData = t.struct({
    itemName: t.String,
    price: t.Number,
    minimumPayment: t.maybe(t.Number),
    rate: t.maybe(t.Number)
}, "FinancedItemData");

export const getDefaultFinancedItem = () => {
    return FinancedItemData({
        itemName: "Product ABC",
        price: 123.45,
        minimumPayment: 234.56,
        rate: 7.89
    })
};

export default FinancedItemData;