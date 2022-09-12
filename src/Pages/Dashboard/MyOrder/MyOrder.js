import React from 'react';

const MyOrder = ({ order }) => {
    const { productName, quantity, price, subTotal } = order
    return (
        <tr>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{price} x {quantity} = {subTotal}</td>
        </tr>
    );
};

export default MyOrder;