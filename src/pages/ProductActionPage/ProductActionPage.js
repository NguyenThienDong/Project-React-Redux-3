import React, {useState} from "react";
import callApi from "../../utils/apiCaller";

function ProductActionPage(props) {
    let [product, setProduct] = useState({
        id: '',
        txtName: '',
        txtPrice: '',
        cbStatus: false
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

    const onSubmit = (e) => {
        let {history} = props;
        e.preventDefault();
        callApi('products', 'POST', {
            name: txtName,
            price: parseInt(txtPrice),
            status: cbStatus
        }).then(() => history.goBack())
    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h2 className='text-center'>Thêm sản phẩm</h2><hr/>
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
                            />
                            Còn hàng
                        </label>
                    </div>
                    
                </div>
                <button type="submit" className="btn btn-primary">Thêm</button>
            </form>
            
        </div>
    );
}

export default ProductActionPage;
