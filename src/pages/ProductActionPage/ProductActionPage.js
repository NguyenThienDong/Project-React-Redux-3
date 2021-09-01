import React from "react";

function ProductActionPage() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h2 className='text-center'>Thêm sản phẩm</h2><hr/>
            <form>
                <div className="form-group">
                    <label>Tên sản phẩm: </label>
                    <input type="text" className="form-control" />
                    <label>Giá sản phẩm: </label>
                    <input type="number" className="form-control"/>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" />
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
