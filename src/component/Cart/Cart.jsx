import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6"
import Header from "../Header/header"
import styleCart from "./cart.module.css"
import Footer from "../Footer/Footer";

function Cart ({isLogged}){
    const [cartItems, setCartItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];

        setCartItems(savedCartItems);
    }, []);

    useEffect(()=>{
        const updateSubTotal = cartItems.reduce((acc, elem, index) =>{
            return acc += elem.price * elem.quantity
        }, 0)

        setSubTotal(updateSubTotal)
    },[cartItems])

    const handleRemoveCart = (product) => {
        const updatedCartItems = cartItems.filter(item => item.id !== product.id &&  item.color !== product.color && item.size !== product.size);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const handleQuantityChange = (product, amount) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === product.id && item.color === product.color && item.size === product.size) {
                return { ...item, quantity: item.quantity + amount };
            }
            return item;
        }).filter(item => item.quantity > 0);

        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    return(
        <>
            <Header isLogged={isLogged}/>
            {
                cartItems.length === 0 ? 
                    (
                        <div className={styleCart.cart__empty}>
                            <img src="/img/Products/empty.png" alt="#" />
                            <h5>Your cart is empty and sad :(</h5>
                            <p>Add something to make it happy!</p>
                            <Link to="/">Continue Shopping</Link>
                        </div>
                    )
                :
                    (
                        <div className={styleCart.cart__full}>
                            <div className={styleCart.cart__nav}>
                                <div>Home - <span>Add To Cart</span></div>
                                <p>
                                    Please fill in the fields below and click place order to complete your purchase!
                                    <br />
                                    {
                                        !isLogged ? 
                                        <p>
                                            Already registered? <Link to="/auth-signin">Please login here</Link>
                                        </p>
                                            : 
                                        null
                                    }
                                </p>
                            </div>
                            <div className={styleCart.cart__head}>
                                <div>product details</div>
                                <div>price</div>
                                <div>countity</div>
                                <div>subtotal</div>
                                <div>action</div>
                            </div>
                            {cartItems.map((item, i)=>(
                                <div key={item.id} className={styleCart.cart__item}>
                                    <div className={styleCart.cart__info}>
                                        <img src={item.img} alt="#" />
                                        <div>
                                            <h2>{item.title}</h2>
                                            <span>Color: {item.color}</span>
                                            <span>Size: {item.size}</span>
                                        </div>
                                    </div>
                                    <div>
                                        {item.price}
                                    </div>
                                    <div className={styleCart.quantity}>
                                        <button onClick={() => handleQuantityChange(item, -1)}>-</button>
                                        <span >{item.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                                    </div>
                                    <div>
                                        {(item.quantity * item.price).toFixed(2)}
                                    </div>
                                    <FaTrashCan className={styleCart.cart__trash} onClick={()=> handleRemoveCart(item)}/>
                                </div>
                            ))}
                            <div className={styleCart.checkout}>
                                <div className={styleCart.checkout__items}>
                                    <h4>Discount  Codes</h4>
                                    <span>Enter your coupon code if you have one</span>
                                    <input type="text"/>
                                    <button disabled>Continue Shopping</button>
                                </div>
                                <div className={styleCart.checkout__items__sub}>
                                    <span>Sub Total:   ${(subTotal).toFixed(2)}</span>
                                    <span>Shipping:   $5.00</span>
                                    <br />
                                    <div>Grand Total: ${+(subTotal).toFixed(2) + 5.00}.00 </div>
                                    <button>Proceed To Checkout</button>
                                </div>
                            </div>
                        </div>
                    )
            }
            <Footer />
        </>
    )
} 

export default Cart