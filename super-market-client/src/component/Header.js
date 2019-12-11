import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
     <div className="agileits_header">
		<div className="container">
			<div className="w3l_offers">
				<p>SALE UP TO 70% OFF. USE CODE "SALE70%" . <a href="products.html">SHOP NOW</a></p>
			</div>
			<div className="agile-login">
				<ul>
					<li><Link to="/register"> Create Account </Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/contact">Help</Link></li>
					
				</ul>
			</div>
			<div className="product_list_header">  
					<form action="#" method="post" className="last"> 
						<input type="hidden" name="cmd" value="_cart" />
						<input type="hidden" name="display" value="1" />
						<button className="w3view-cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
					</form>  
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>

	<div className="logo_products">
		<div className="container">
		<div className="w3ls_logo_products_left1">
				<ul className="phone_email">
					<li><i className="fa fa-phone" aria-hidden="true"></i>Order online or call us : (+0123) 234 567</li>
					
				</ul>
			</div>
			<div className="w3ls_logo_products_left">
				<h1><Link to="/">super Market</Link></h1>
			</div>
		<div className="w3l_search">
			<form action="#" method="post">
				<input type="search" name="Search" placeholder="Search for a Product..." required="" />
				<button type="submit" className="btn btn-default search" aria-label="Left Align">
					<i className="fa fa-search" aria-hidden="true"> </i>
				</button>
				<div className="clearfix"></div>
			</form>
		</div>
			
			<div className="clearfix"> </div>
		</div>
	</div>

	<div className="navigation-agileits">
		<div className="container">
			<nav className="navbar navbar-default">
							<div className="navbar-header nav_2">
								<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div> 
							<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
								<ul className="nav navbar-nav">
									<li className="active"><Link to="/" className="act">Home</Link></li>	
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Groceries<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Groceries</h6>
														<li><Link to="/groceries">Dals & Pulses</Link></li>
														<li><Link to="/groceries">Almonds</Link></li>
														<li><Link to="/groceries">Cashews</Link></li>
														<li><Link to="/groceries">Dry Fruit</Link></li>
														<li><Link to="/groceries">Mukhwas </Link></li>
														<li><Link to="/groceries">Rice & Rice Products</Link></li>
													</ul>
												</div>	
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Household<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Household</h6>
														<li><Link to="/household">Cookware</Link></li>
														<li><Link to="/household">Dust Pans</Link></li>
														<li><Link to="/household">Scrubbers</Link></li>
														<li><Link to="/household">Dust Cloth</Link></li>
														<li><Link to="/household">Mops </Link></li>
														<li><Link to="/household">Kitchenware</Link></li>
													</ul>
												</div>
												
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Personal Care<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>Baby Care</h6>
														<li><Link to="/personalcare">Baby Soap</Link></li>
														<li><Link to="/personalcare">Baby Care Accessories</Link></li>
														<li><Link to="/personalcare">Baby Oil & Shampoos</Link></li>
														<li><Link to="/personalcare">Baby Creams & Lotion</Link></li>
														<li><Link to="/personalcare"> Baby Powder</Link></li>
														<li><Link to="/personalcare">Diapers & Wipes</Link></li>
													</ul>
												</div>
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Packaged Foods<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Accessories</h6>
														<li><Link to="/packagedfoods">Baby Food</Link></li>
														<li><Link to="/packagedfoods">Dessert Items</Link></li>
														<li><Link to="/packagedfoods">Biscuits</Link></li>
														<li><Link to="/packagedfoods">Breakfast Cereals</Link></li>
														<li><Link to="/packagedfoods">Canned Food </Link></li>
														<li><Link to="/packagedfoods">Chocolates & Sweets</Link></li>
													</ul>
												</div>
												
											
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Beverages<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>Tea & Coeffe</h6>
														<li><Link to="beverages.html">Green Tea</Link></li>
														<li><Link to="beverages.html">Ground Coffee</Link></li>
														<li><Link to="beverages.html">Herbal Tea</Link></li>
														<li><Link to="beverages.html">Instant Coffee</Link></li>
														<li><Link to="beverages.html"> Tea </Link></li>
														<li><Link to="beverages.html">Tea Bags</Link></li>
													</ul>
												</div>
							
											</div>
										</ul>
									</li>
									<li><Link to="/gourmet">Gourmet</Link></li>
									<li><Link to="/offers">Offers</Link></li>
									<li><Link to="/contact">Contact</Link></li>
								</ul>
							</div>
							</nav>
		</div>
	</div>
    </>
  );
}
