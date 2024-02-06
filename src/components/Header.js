import React, { Component } from "react";
import { Link } from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg';
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <section>
       { /*banner text here*/}
          <div className="banner">
            <h2> Little Lemon</h2>
            <h3> Chicago</h3>
            <p> We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a 
                modern twist. 
                <br></br>Order today!
            </p>
            <Link to="/booking"> <button aria-label="On Click"> Reserve Now</button></Link>
          </div>
          {/* banner imagee*/}
          <div className="banner-img">
            <img src={bannerImg} alt=""/>
          </div>
        </section>
      </header>
    );
  }
}
