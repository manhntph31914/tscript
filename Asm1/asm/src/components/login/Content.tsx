import React from 'react';
import '../../css/style.css'; // Import CSS file
import '../../css/icon.css';
import bnlg from '../../images/item/Side Image.png'
import '../../css/login.css'
type Props = {};

const Content = (props: Props) => {
  return (
    <div>
         <div className="contentt">
            <div className="banner">
                <img src={bnlg} alt=""/>
            </div>
            <div className="login">
                <form action="">
                    <h1>Log in to Exclusive</h1>
                    <p>Enter your details below</p>
                    <input type="text" placeholder="Email or Phone Number" /><br/>
                    <input type="text" placeholder="Password" />
                    <div className="btn">
                        <button>Log In</button>
                        <a href="">Forget Password?</a>
                    </div>
                </form>
                
            </div>
        </div>
       

    </div>
  );
};

export default Content;
