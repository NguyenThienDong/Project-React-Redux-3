import React from "react";
import { Link } from "react-router-dom";

function ProductItem(props) {
  const { product, index } = props;
  let statusClass = product.status ? "info" : "danger";
  let statusName = product.status ? "Còn hàng" : "Hết hàng";
  const onDelete = (id) => {
    if (confirm("Bạn chắc chắn muốn xóa ?")) {//eslint-disable-line
      props.onDelete(id);
    }
  };

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
        <Link
          to={`/producsts/${product.id}/edit`}
          className='btn btn-success mr-10'
        >
          Sửa
        </Link>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => onDelete(product.id)}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
