import t from 'tcomb';

const FinancedItemData = t.struct({
    item: t.String,
    price: t.Number,
    minimumPayment: t.maybe(t.Number),
    rate: t.maybe(t.Number)
}, "FinancedItemData");

export const getDefaultFinancedItem = () => {
    return FinancedItemData({
        item: "Product ABC",
        price: 123.45
    })
};

export default FinancedItemData;