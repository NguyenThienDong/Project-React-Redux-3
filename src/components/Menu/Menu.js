import React from "react";

function Menu() {
    return (
        <div className="navbar navbar-default">
            <a className="navbar-brand" href="/#">Project 3</a>
            <ul className="nav navbar-nav">
                <li className="active">
                    <a href="/#">Trang chủ</a>
                </li>
                <li>
                    <a href="/#">Quản lý sản phẩm</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
