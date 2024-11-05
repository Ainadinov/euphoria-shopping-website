import { FaRegHeart, FaStar } from "react-icons/fa"
import { useEffect, useState } from "react"
import { BsCart2 } from "react-icons/bs"
import { CiCalendar } from "react-icons/ci"
import { LuShirt } from "react-icons/lu"
import { LiaShippingFastSolid } from "react-icons/lia"
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2"
import { Link } from "react-router-dom"
import styleSingleProduct from "./singleproduct.module.css"
import Header from "../Header/header"
import axios from "axios"
import Footer from "../Footer/Footer";

function SingleProduct ({isLogged, isSingleProduct, handleToSingleProduct}){
    const [chooseSize, setChooseSize] = useState(null)
    const [chooseColor, setChooseColor] = useState(null)

    const [similarProducts, setsimilarProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/products")
        .then(function(responce){
            setsimilarProducts(responce.data)
        })
        .catch(function(error){
            console.log(error)
        })
    },[])

    const handleAddToCart = () => {
        if(chooseSize === null || chooseColor === null){
            return alert("Choose product color and size!");
        }

        const cartItem = {
            id: isSingleProduct.id,
            img: isSingleProduct.img,
            title: isSingleProduct.title,
            price: isSingleProduct.price,
            color: chooseColor,
            size: chooseSize,
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProduct = cart.find(item => item.id === cartItem.id && item.color === cartItem.color && item.size === cartItem.size);

        if (!existingProduct) {
            cart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert("Product added to cart!");
        } else {
            alert("Product is already in the cart!");
        }
    };

    return(
        <>
            <Header isLogged={isLogged}/>
            <div className={styleSingleProduct.singleProduct}>
                <img src={isSingleProduct.img} alt="#"/>
                <div className={styleSingleProduct.SingleProduct__info}>
                    <span> Shop - {isSingleProduct.category} - {isSingleProduct.type} </span>
                    <h1>{isSingleProduct.title}</h1>
                    <div className={styleSingleProduct.singleProduct__star}>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <span>{isSingleProduct.rating}</span>
                    </div>
                    <div>
                        <p>Select Size</p>
                        <div className={styleSingleProduct.singleProduct__size}>
                            {
                                isSingleProduct.size && isSingleProduct.size.map((size,i) =>(
                                    <div 
                                        key={i} 
                                        style={{
                                            backgroundColor: chooseSize === size ? "#3C4242": "#FFF",
                                            color: chooseSize === size ? "#FFF": "#3C4242"
                                        }}
                                        onClick={()=> setChooseSize(size)}>{size}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <p>Colours Available</p>
                        <div className={styleSingleProduct.singleProduct__color}>
                            {
                                isSingleProduct.color && isSingleProduct.color.map((color,i) =>(
                                    <div 
                                        key={i} 
                                        style={{ 
                                            backgroundColor: color, 
                                            boxShadow: chooseColor === color ? "0px 0px 3px 3px rgba(190, 188, 199, 1)": "none",
                                        }} 
                                        onClick={()=> setChooseColor(color)}>   
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styleSingleProduct.singleProduct__price}>
                        <button onClick={() => handleAddToCart()}><BsCart2 /> Add to cart</button>
                        <div>$ {isSingleProduct.price}</div>
                    </div>
                    <div className={styleSingleProduct.singleProduct__service}>
                        <div>
                            <CiCalendar />
                            <p>Secure payment</p>
                        </div>
                        <div>
                            <LuShirt />
                            <p>Size & Fit</p>
                        </div>
                        <div>
                            <LiaShippingFastSolid />
                            <p>Free shipping</p>
                        </div>
                        <div>
                            <HiMiniArrowPathRoundedSquare />
                            <p>Free Shipping & Returns</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styleSingleProduct.similarProduct}>
                <h3>Similar Products</h3>
                <div className={styleSingleProduct.similarProduct__item}>
                    {
                        similarProducts.filter((e)=> e.rating > 4.3).sort((a,b)=> b.raiting - a.rating).map((e)=>(
                            <div key={e.id} className={styleSingleProduct.cards__item}>
                                <img src={e.img} alt="#" />
                                <div className={styleSingleProduct.cards__subitem}>
                                    <div>
                                        <Link to={`/single-product/${e.id}`}>
                                            <h6 onClick={() =>handleToSingleProduct(e.id)}>{e.title}</h6>
                                        </Link>
                                        <span>{e.brand}</span>
                                    </div>
                                    <div className={styleSingleProduct.cards__subitem__price}>
                                        ${e.price}.00
                                    </div>
                                </div>
                            </div>                      
                        )).slice(2,10)
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SingleProduct