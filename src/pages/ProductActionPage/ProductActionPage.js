import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import callApi from "../../utils/apiCaller";

function ProductActionPage(props) {
    let [product, setProduct] = useState({
        id: '',
        txtName: '',
        txtPrice: '',
        cbStatus: ''
    })

    const onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = (target.type === 'checkbox' ? target.checked : target.value);
        setProduct({
            ...product,
            [name]: value
        })
    }

    let {txtName, txtPrice, cbStatus} = product;

    useEffect(() => {
        var {match} = props;
        if(match) {
            var id = match.params.id;
            callApi(`products/${id}`, 'GET', null).then(res => {
                    let data = res.data;
                    setProduct({
                        id: data.id,
                        txtName: data.name,
                        txtPrice: data.price,
                        cbStatus: data.status
                    });
                }   
            )
        }
    }, [])//eslint-disable-line

    const onSubmit = (e) => {
        let {history, match} = props;
        e.preventDefault();
        if(match) {
            callApi(`products/${product.id}`, 'PUT', {
                name: txtName,
                price: parseInt(txtPrice),
                status: cbStatus
            }).then(() => history.goBack())
        }else {
            callApi('products', 'POST', {
                name: txtName,
                price: parseInt(txtPrice),
                status: cbStatus
            }).then(() => history.goBack())
        }
    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h2 className='text-center'>{(props.match && props.match.params.id ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm')}</h2><hr/>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Tên sản phẩm: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        name='txtName' 
                        value={txtName}
                        onChange={onChange}
                    />
                    <label>Giá sản phẩm: </label>
                    <input 
                        type="number"
                        className="form-control"
                        name="txtPrice"
                        value={txtPrice}
                        onChange={onChange}
                    />
                    <div className="checkbox">
                        <label>
                            <input 
                                type="checkbox" 
                                name="cbStatus" 
                                value={cbStatus} 
                                onChange={onChange}
                                checked={cbStatus}
                            />
                            Còn hàng
                        </label>
                    </div>
                    
                </div>
                <Link to='/product-list' className="btn btn-danger mr-10">Quay lại</Link>
                <button type="submit" className="btn btn-primary mr-10">{(props.match && props.match.params.id ? 'Lưu lại' : 'Thêm')}</button>
            </form>
            
        </div>
    );
}

export default ProductActionPage;
