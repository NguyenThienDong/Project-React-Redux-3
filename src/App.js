import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';

function App() {
    return (
        <div className='App'>          
            <Menu />       
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
                        <button type="button" className="btn btn-lg btn-info mb-20">Thêm sản phẩm</button>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-20"> 
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
