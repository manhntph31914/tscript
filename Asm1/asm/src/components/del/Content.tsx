import React from 'react'
import '../../css/chitiet.css'
import fam from '../../images/item/Frame 911.png'
import anh1 from '../../images/Frame2.png'
import anh2 from '../../images/Frame3.png'
import anh3 from '../../images/Frame4.png'
import anh4 from '../../images/Frame5.png'
import anh5 from '../../images/Frame 1.png'
import img from '../../images/item/item3.jpg'
type Props = {}

const Content = (props: Props) => {
  return (
    <div>
         <div className="product">
            <div className="pr-left">
                <img src={anh1} alt=""/><br/>
                <img src={anh2} alt=""/><br/>
                <img src={anh3} alt=""/><br/>
                <img src={anh4} alt=""/><br/>
            </div>

            <div className="pr-center">
                <img src={anh5} alt=""/>
            </div>

            <div className="pr-right">
                <h2>Havic HV G-92 Gamepad</h2>

                <div className="ct-1">
                    <div className="star">
                        <span className="twemoji--star"></span>
                        <span className="twemoji--star"></span>
                        <span className="twemoji--star"></span>
                        <span className="twemoji--star"></span>
                        <span className="twemoji--star"></span>
                        <p style={{ color: 'gray' }}>(150 review)</p>
                        <div className="gach">
                            <p className="color:gray">|</p>
                        </div>
                        <p className="color:aquamarine">In Stock</p>
                    </div>
    
                    <div className="price">
                        <p>$192.00</p>
                    </div>
    
                    <div className="span">
                        <span>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</span>

                    </div>
                </div>

                <hr/>

                <div className="ct-2">
                    <div className="color">
                        <p>Colours:</p>
                        <input type="radio" className="bn-color-1" name="rd-color"/>
                        <input type="radio" className="bn-color-2" name="rd-color"/>
                        
                    </div>

                    <div className="size">
                        <p>Size: </p>
                        <button className="bn">S</button>
                        <button className="bn">M</button>
                        <button className="bn">L</button>
                        <button className="bn">XL</button>
                    </div>

                    <div className="buy">
                        <button className="btn-buy">Buy Now</button>
                        <a href="#" className="ph--heart-thin"></a>
                    </div>

                    <img src={fam} alt=""/>
                </div>
            </div>
        </div>

        <div className="conten-2">
            <div className="squares">
                <div className="square"></div>
                <p>Related Item</p>
            </div>
    
            <div className="categories-2">
                
                <div className="items-2">
                    <div className="item-2">
                        <div className="img-item-2">
                            <img src={img} alt="" />
                            <div className="icon-2">
                                <a href="#" className="ph--heart-thin"></a>
                                <a href="" className="ph--eye-thin"></a>
                            </div>
                        </div>
                        <div className="add">
                            <button><span className="ph--shopping-cart-thin"></span>Add To Cart</button>
                        </div>
                        <p>The north coat</p>
                        <div className="del">
                        <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                        </div>
                        
                       
                    </div>

                    <div className="item-2">
                        <div className="img-item-2">
                        <img src={img} alt="" />
                            <div className="icon-2">
                            <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                            </div>
                        </div>
                        <div className="add">
                            <button><span className="ph--shopping-cart-thin"></span>Add To Cart</button>
                        </div>
                        <p>The north coat</p>
                        <div className="del">
                        <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                        </div>
                        
                    </div>


                    <div className="item-2">
                        <div className="img-item-2">
                        <img src={img} alt="" />
                            <div className="icon-2">
                                <a href="#" className="ph--heart-thin"></a>
                                <a href="" className="ph--eye-thin"></a>
                            </div>
                        </div>
                        <div className="add">
                            <button><span className="ph--shopping-cart-thin"></span>Add To Cart</button>
                        </div>
                        <p>The north coat</p>
                        <div className="del">
                        <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                        </div>
                       
                    </div>

                    <div className="item-2">
                        <div className="img-item-2">
                        <img src={img} alt="" />
                            <div className="icon-2">
                                <a href="#" className="ph--heart-thin"></a>
                                <a href="" className="ph--eye-thin"></a>
                            </div>
                        </div>
                        <div className="add">
                            <button><span className="ph--shopping-cart-thin"></span>Add To Cart</button>
                        </div>
                        <p>The north coat</p>
                        <div className="del">
                        <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                        </div>
                        
                    </div>
                          
                </div>
            </div>
            <br />
            
            
            
           
        </div>
    </div>
  )
}

export default Content