import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from './component/Footer';
import Header from './component/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Faq from './pages/Faq';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import Offers from './pages/Offers';
import Checkout from './pages/Checkout';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
    <Router>
      {/* <Header /> */}
      <Switch>
          <Route exact path="/checkout">
            <Checkout/>
          </Route>
          <Route exact path="/offers">
            <Offers/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/faq">
            <Faq/>
          </Route>
          <Route exact path="/privacy-policy">
            <PrivacyPolicy/>
          </Route>
          <Route exact path="/terms-and-condition">
            <Terms/>
          </Route>
          <Route exact path="/sitemap">
            <Sitemap />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <PageNotFound/>
          </Route>
        </Switch>
      {/* <Footer /> */}
    </Router>
    
    </>
  );
}

export default App;
