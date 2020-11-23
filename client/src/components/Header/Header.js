import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"
import { useStateValue } from '../../Hooks/stateProvider';
import { auth } from '../../firebase';

function Header() {
    const [state, ] = useStateValue();

    const handleAuthentication = () => {
        if(state.user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img 
                className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt=""
                />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!state.user && "/login"} style={{ textDecoration: 'none' }}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">{state.user ? state.user.email : "Hello Guest"}</span>
                        <span className="header__optionLineTwo">{state.user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{state.basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
