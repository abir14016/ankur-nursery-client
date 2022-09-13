import React from 'react';

const AllOrder = ({ allOrder }) => {
    const { productName, userName, email, quantity, subTotal, price } = allOrder
    return (
        <tr>
            <td>{productName}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{quantity}</td>
            <td>{price} x {quantity} = {subTotal}</td>
        </tr>
    );
};

export default AllOrder;