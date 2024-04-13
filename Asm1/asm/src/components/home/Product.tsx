import React from 'react'
import '../../css/style.css'; // Import CSS file
import '../../css/icon.css';
import bn2 from '../../images/bn2.png'
import item3 from'../../images/item/item3.jpg'
import sv1 from '../../images/item/Services.png'
import sv2 from '../../images/item/Services2.png'
import sv3 from '../../images/item/Services3.png'
import bn7 from '../../images/bn7.png'
import bn8 from '../../images/bn8.png'
import bn9 from '../../images/bn9.png'
import bn10 from '../../images/bn10.png'
type Props = {}

const Product = (props: Props) => {
  return (
    <div>
        <div className="conten-1">
            <div className="squares">
                <div className="square"></div>
                <p>Categories</p>
            </div>
    
            <div className="categories">
                <h1>Browse By Category</h1>
                <div className="items">
                    <a href="" className="item">
                        <span className="arcticons--smartphone" ></span>
                        <p style={{ marginLeft: '52px' }}>Phones</p>
                    </a>
                    
                    <a href="" className="item">
                        <span className="ph--laptop-thin"></span>
                        <p style={{ marginLeft: '52px' }}>Laptop</p>
                    </a>
                    
                    <a href="" className="item">
                        <span className="cbi--apple-watch"></span>
                        <p style={{ marginLeft: '40px' }}>SmartWatch</p>
                    </a>
                   
                    <a href="" className="item">
                        <span className="ph--camera-thin"></span>
                        <p style={{ marginLeft: '52px' }}>Camera</p>
                    </a>
                    
                    <a href="" className="item">
                        <span className="ph--headphones-thin"></span>
                        <p style={{ marginLeft: '40px' }}>HeadPhone</p>
                    </a>
                    
                    <a href="" className="item">
                        <span className="ph--game-controller-thin"></span>
                        <p style={{ marginLeft: '52px' }}>Gaming</p>
                    </a>
                    
                </div>
            </div>
        </div>

        <hr />

      
        <div className="conten-2">
        <div className="squares">
            <div className="square"></div>
            <p>This Month</p>
        </div>

        <div className="categories-2">
            <h1>Best Selling Products</h1>
            <div className="items-2">
                <div className="item-2">
                    <div className="img-item-2">
                        <img src={item3} alt="" />
                        <div className="icon-2">
                            <a href="#" className="ph--heart-thin"></a>
                            <a href="#" className="ph--eye-thin"></a>
                        </div>
                    </div>
                    <p>The north coat</p>
                    <div className="del">
                    <p style={{ color: 'red' }}>$200</p>
                    <del style={{ color: 'gray' }}>$360</del>
                    </div>
                    <div className="star">
                    <span className="twemoji--star"></span>
                    <span className="twemoji--star"></span>
                    <span className="twemoji--star"></span>
                    <span className="twemoji--star"></span>
                    <span className="twemoji--star"></span>
                    <p style={{ color: 'gray' }}>(65)</p>
                    </div>
                </div>

                <div className="item-2">
                    <div className="img-item-2">
                        <img src={item3} alt="" />
                        <div className="icon-2">
                            <a href="#" className="ph--heart-thin"></a>
                            <a href="#" className="ph--eye-thin"></a>
                        </div>
                    </div>
                    <p>The north coat</p>
                    <div className="del">
                    <p style={{ color: 'red' }}>$200</p>
                    <del style={{ color: 'gray' }}>$360</del>
                    </div>
                    <div className="star">
                    <span className="twemoji--star"></span>
                    <span className="twemoji--star"></span>
                    <span className="twemoji--star"></span>
                    <span className="twemoji--star"></span>
                    <span className="twemoji--star"></span>
                    <p style={{ color: 'gray' }}>(65)</p>
                    </div>
                </div>

                <div className="item-2">
                <div className="img-item-2">
                    <img src={item3} alt="" />
                    <div className="icon-2">
                        <a href="#" className="ph--heart-thin"></a>
                        <a href="#" className="ph--eye-thin"></a>
                    </div>
                </div>
                <p>The north coat</p>
                <div className="del">
                <p style={{ color: 'red' }}>$200</p>
                <del style={{ color: 'gray' }}>$360</del>
                </div>
                <div className="star">
                <span className="twemoji--star"></span>
                <span className="twemoji--star"></span>
                <span className="twemoji--star"></span>
                <span className="twemoji--star"></span>
                <span className="twemoji--star"></span>
                <p style={{ color: 'gray' }}>(65)</p>
                </div>
            </div>

            <div className="item-2">
                <div className="img-item-2">
                    <img src={item3} alt="" />
                    <div className="icon-2">
                        <a href="#" className="ph--heart-thin"></a>
                        <a href="#" className="ph--eye-thin"></a>
                    </div>
                </div>
                <p>The north coat</p>
                <div className="del">
                <p style={{ color: 'red' }}>$200</p>
                <del style={{ color: 'gray' }}>$360</del>
                </div>
                <div className="star">
                <span className="twemoji--star"></span>
                <span className="twemoji--star"></span>
                <span className="twemoji--star"></span>
                <span className="twemoji--star"></span>
                <span className="twemoji--star"></span>
                <p style={{ color: 'gray' }}>(65)</p>
                </div>
            </div>

            
            
            </div>
        </div>
        </div>

        <div className="banner-2">
           <img src={bn2} alt="" />
        </div>
        
        <div className="conten-2">
            <div className="squares">
                <div className="square"></div>
                <p>Our Products</p>
            </div>
    
            <div className="categories-2">
                <h1>Explore Our Products</h1>
                <div className="items-2">
                    <div className="item-2">
                        <div className="img-item-2">
                            <img src={item3} alt="" />
                            <div className="icon-2">
                                <a href="#" className="ph--heart-thin"></a>
                                <a href="" className="ph--eye-thin"></a>
                            </div>
                        </div>
                        <p>The north coat</p>
                        <div className="del">
                        <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                        </div>
                        <div className="star">
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <p style={{ color: 'gray' }}>(65)</p>
                        </div>
                    </div>

                    <div className="item-2">
                        <div className="img-item-2">
                            <img src={item3} alt="" />
                            <div className="icon-2">
                                <a href="#" className="ph--heart-thin"></a>
                                <a href="" className="ph--eye-thin"></a>
                            </div>
                        </div>
                        <p>The north coat</p>
                        <div className="del">
                        <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                        </div>
                        <div className="star">
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <p style={{ color: 'gray' }}>(65)</p>
                        </div>
                    </div>


                    <div className="item-2">
                        <div className="img-item-2">
                            <img src={item3} alt="" />
                            <div className="icon-2">
                                <a href="#" className="ph--heart-thin"></a>
                                <a href="" className="ph--eye-thin"></a>
                            </div>
                        </div>
                        <p>The north coat</p>
                        <div className="del">
                        <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                        </div>
                        <div className="star">
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <p style={{ color: 'gray' }}>(65)</p>
                        </div>
                    </div>

                    <div className="item-2">
                        <div className="img-item-2">
                            <img src={item3} alt="" />
                            <div className="icon-2">
                                <a href="#" className="ph--heart-thin"></a>
                                <a href="" className="ph--eye-thin"></a>
                            </div>
                        </div>
                        <p>The north coat</p>
                        <div className="del">
                        <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                        </div>
                        <div className="star">
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <p style={{ color: 'gray' }}>(65)</p>
                        </div>
                    </div>

                    <br />
                    
                          
                </div>

                <div className="items-2">
                    <div className="item-2">
                        <div className="img-item-2">
                            <img src={item3} alt="" />
                            <div className="icon-2">
                                <a href="#" className="ph--heart-thin"></a>
                                <a href="" className="ph--eye-thin"></a>
                            </div>
                        </div>
                        <p>The north coat</p>
                        <div className="del">
                        <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                        </div>
                        <div className="star">
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <p style={{ color: 'gray' }}>(65)</p>
                        </div>
                    </div>

                    <div className="item-2">
                        <div className="img-item-2">
                            <img src={item3} alt="" />
                            <div className="icon-2">
                                <a href="#" className="ph--heart-thin"></a>
                                <a href="" className="ph--eye-thin"></a>
                            </div>
                        </div>
                        <p>The north coat</p>
                        <div className="del">
                        <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                        </div>
                        <div className="star">
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <p style={{ color: 'gray' }}>(65)</p>
                        </div>
                    </div>


                    <div className="item-2">
                        <div className="img-item-2">
                            <img src={item3} alt="" />
                            <div className="icon-2">
                                <a href="#" className="ph--heart-thin"></a>
                                <a href="" className="ph--eye-thin"></a>
                            </div>
                        </div>
                        <p>The north coat</p>
                        <div className="del">
                        <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                        </div>
                        <div className="star">
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <p style={{ color: 'gray' }}>(65)</p>
                        </div>
                    </div>

                    <div className="item-2">
                        <div className="img-item-2">
                            <img src={item3} alt="" />
                            <div className="icon-2">
                                <a href="#" className="ph--heart-thin"></a>
                                <a href="" className="ph--eye-thin"></a>
                            </div>
                        </div>
                        <p>The north coat</p>
                        <div className="del">
                        <p style={{ color: 'red' }}>$200</p>
                        <del style={{ color: 'gray' }}>$360</del>
                        </div>
                        <div className="star">
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <span className="twemoji--star"></span>
                            <p style={{ color: 'gray' }}>(65)</p>
                        </div>
                    </div>
                    <br />       
                </div>
            </div>
            <br />
            
            
            <div className="bt">
                <a href=""><button>View All Products</button></a>
            </div>
        </div>


        <div className="bn-3">
            <div className="bn-left">
                <img src={bn7} alt="" />
            </div>
            <div className="bn-right">
                <img src={bn8} alt="" className="bn1"/><br />
                <img src={bn9} alt=""  className="bn2"/>
                <img src={bn10} alt=""  className="bn3"/>
            </div>
        </div>



        <div className="conten-2">
            <div className="squares">
                <div className="square"></div>
                <p>Featured</p>
            </div>
    
            <div className="categories-4">
                <h1>New Arrival</h1>
                <div className="items-4">
                    <div className="item-4">
                       
                        <img src={sv1} alt="" />
                        <h3>FREE AND FAST DELIVERY</h3>
                        <p>Free delivery for all orders over $140</p>
                    </div> 
                    
                    <div className="item-4">
                        
                    <img src={sv2} alt="" />
                        <h3>24/7 CUSTOMER SERVICE</h3>
                        <p>Friendly 24/7 customer support</p>
                    </div> 

                    <div className="item-4">
                      
                    <img src={sv3} alt="" />
                        <h3>MONEY BACK GUARANTEE</h3>
                        <p>We reurn money within 30 days</p>
                    </div>  
                </div>

                
            </div>
        </div>
        
    
        
        
    </div>
  )
}

export default Product