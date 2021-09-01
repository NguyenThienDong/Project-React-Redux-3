import React from "react";
import { Link, Route } from "react-router-dom";

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: false
    }
]

const MenuLink = ({label, to, exact}) => (
    <Route 
        path={to}
        exact={exact}
        children={({match}) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link to={to} exact={exact}>{label}</Link>
                </li>
            )            
        }}
    />
)

function Menu() {
    const showMenus = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => (
                <MenuLink 
                    key={index}
                    to={menu.to} 
                    exact={menu.exact} 
                    label={menu.name} 
                />
            ))
        }
        return result;
    }
    return (
        <div className="navbar navbar-default">
            <Link className="navbar-brand" to=''>Project 3</Link>
            <ul className="nav navbar-nav">
                {showMenus(menus)}
            </ul>
        </div>
    );
}

export default Menu;
