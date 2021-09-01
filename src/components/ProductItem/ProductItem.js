import React from "react";

function ProductItem(props) {
    const { product, index } = props;
    let statusClass = (product.status) ? 'info' : 'danger';
    let statusName = (product.status) ? 'Còn hàng' : 'Hết hàng'
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>     
                <span className={`label label-${statusClass}`}>{statusName}</span>
            </td>
            <td>
                <button type="button" className="btn btn-success mr-10">Sửa</button>
                <button type="button" className="btn btn-danger">Xóa</button>
            </td>
        </tr>
    );
}

export default ProductItem;
