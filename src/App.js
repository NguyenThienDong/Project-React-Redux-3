import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import Menu from './components/Menu/Menu';
import routes from './routes';
// import ProductList from './components/ProductList/ProductList';

function App() {
    let showContentMenus = routes => {
        var result = null;
        if(routes.length > 0) {
            result = routes.map((route, index) => (
                <Route 
                    key={index}
                    path={route.path} 
                    exact={route.exact} 
                    component={route.main}
                />
            ))
        }
        return <Switch>{result}</Switch>
    }

    return (
        <Router>
            <div className='App'>          
                <Menu />       
                <div className="container">
                    <div className="row">
                        {showContentMenus(routes)}
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
