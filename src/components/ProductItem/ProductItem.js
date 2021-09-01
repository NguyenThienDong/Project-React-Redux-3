import React from "react";

function ProductItem() {
    return (
        <tr>
            <td>1</td>
            <td>1</td>
            <td>Iphone 6</td>
            <td>5000000</td>
            <td>     
                <span className="label label-info">Còn hàng</span>
            </td>
            <td>
                <button type="button" className="btn btn-success mr-10">Sửa</button>
                <button type="button" className="btn btn-danger">Xóa</button>
            </td>
        </tr>
    );
}

export default ProductItem;
