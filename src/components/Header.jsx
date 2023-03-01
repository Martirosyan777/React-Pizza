import { Link } from "react-router-dom";
import "./Main.scss";
import "./Header.scss";
import HeaderLogo from "../img/logo/react-pizza-logo.svg";
import Rectangle from "../img/icons/Rectangle.png";
import ShopingCart from "../img/icons/shopping-cart.svg";

function Header() {
    return (
        <header className="header">
            <div className="header_container">
                <div className="header_logo">
                    <img width="38px" src={HeaderLogo} alt="Pizza logo" />
                    <div>
                        <h1>
                            React Pizza
                        </h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </div>
            <div className="header_cart">
                <a className="button button_cart" href="shopping-cart.html">
                    <span>0 ₽</span>
                    <img src={Rectangle} alt="" />
                    <img src={ShopingCart} width="18" height="18" alt=""/>
                    <span>0</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
