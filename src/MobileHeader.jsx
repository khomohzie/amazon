import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './MobileHeader.css'
import { Link } from 'react-router-dom';
import { useStateValue } from './helpers/StateProvider';

const MobileHeader = () => {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="mobile-header">

            <nav className="navbar navbar-expand-sm fixed-top navbar-dark nav-color">

                <Link to="/">
                    <img
                        className="mobile-header_logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt="amazon logo"
                    />
                </Link>

                <div className="mobile-header_search">
                    <input className="mobile-header_searchInput" type="text" name="" id="" />
                    <SearchIcon className="mobile-header_searchIcon" />
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{ marginLeft: "10px" }}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

                    <div className="mobile-header_nav">

                        <div className="mobile-header_option">
                            <span className="mobile-header_optionLineOne">
                                Hello Guest
                            </span>
                            <span className="mobile-header_optionLineTwo">
                                Sign In
                            </span>
                        </div>

                        <div className="mobile-header_option">
                            <span className="mobile-header_optionLineOne">
                                Returns
                            </span>
                            <span className="mobile-header_optionLineTwo">
                                &amp; Orders
                            </span>
                        </div>

                        <div className="mobile-header_option">
                            <span className="mobile-header_optionLineOne">
                                Your
                            </span>
                            <span className="mobile-header_optionLineTwo">
                                Prime
                            </span>
                        </div>

                        <Link to="/checkout">
                            <div className="mobile-header_optionBasket">
                                <ShoppingBasketIcon />

                                <span className="mobile-header_optionLineTwo mobile-header_basketCount">
                                    {basket?.length}
                                </span>
                            </div>
                        </Link>

                    </div>

                </div>

            </nav>
        </div>
    )
}

export default MobileHeader
