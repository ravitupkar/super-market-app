import React from 'react';
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="w3_footer_grids">
                <div className="col-md-3 w3_footer_grid">
                    <h3>Contact</h3>
                    <ul className="address">
                    <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span>New York City.</span></li>
                    <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><Link to="mailto:info@example.com">info@supermarket.com</Link></li>
                    <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 567</li>
                    </ul>
                </div>
                <div className="col-md-3 w3_footer_grid">
                    <h3>Information</h3>
                    <ul className="info">
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/about">About Us</Link></li>
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/contact">Contact Us</Link></li>
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/sitemap">Sitemap</Link></li>
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/faq">FAQ's</Link></li>
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/offers">Offers</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 w3_footer_grid">
                    <h3>Category</h3>
                    <ul className="info">
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/groceries">Groceries</Link></li>
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/household">Household</Link></li>
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/personalcare">Personal Care</Link></li>
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/packagedfoods">Packaged Foods</Link></li>
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/beverages">Beverages</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 w3_footer_grid">
                    <h3>Profile</h3>
                    <ul className="info">
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/products">Store</Link></li>
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/checkout">My Cart</Link></li>
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/login">Login</Link></li>
                    <li><i className="fa fa-arrow-right" aria-hidden="true"></i><Link to="/register">Create Account</Link></li>
                    </ul>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
        <div className="footer-copy">
            <div className="container">
                <p>© 2017 Super Market. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
            </div>
        </div>
        </div>
        <div className="footer-botm">
        <div className="container">
            <div className="w3layouts-foot">
                <ul>
                    <li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                    <li><a href="#" className="w3_agile_vimeo"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div className="payment-w3ls">	
                <img src="images/card.png" alt=" " className="img-responsive" />
            </div>
            <div className="clearfix"> </div>
        </div>
        </div>
    </>
  );
}
