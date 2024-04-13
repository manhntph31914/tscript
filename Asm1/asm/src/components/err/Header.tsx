import React from 'react';
import '../../css/style.css'; // Import CSS file
import '../../css/icon.css';


type Props = {};

const Header = (props: Props) => {
  return (
    <div>
        <div className="menu">
            <h2>Exclusive</h2>

            <nav>
            <ul>
                <li><a href="/">Home</a></li> {/* Sửa href="" thành href="/" */}
                <li><a href="/">Contact</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Sign Up</a></li>
            </ul>
            </nav>

            <div className="icon">
            <form action="" className="sear">
                <input type="text" placeholder="What are you looking for?" />
                <button type="submit">Search</button>
            </form>
            <a href="/"><span className="ph--shopping-cart-thin"></span></a> 
            <a href="/"><span className="ph--heart-thin"></span></a> 
            <a href="login.html"><span className="circum--user"></span></a> 
            </div>
        </div>
        <hr />

      
        
       

    </div>
  );
};

export default Header;
