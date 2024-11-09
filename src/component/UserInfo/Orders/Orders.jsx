import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { PiUser } from "react-icons/pi"
import { Link } from "react-router-dom"
import { RxExit } from "react-icons/rx"
import { GoChecklist } from "react-icons/go";
import styleUserInfo from "./orders.module.css"
import Header from "../../Header/header";
import Footer from "../../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { GrUnorderedList } from "react-icons/gr";


function Orders({isLogged}){
    const [ordersInfo, setOrdesInfo] = useState([]);

    useEffect(() =>{
        const savedCartItems = localStorage.getItem('accessToken');

        axios.get(`http://localhost:3001/users/${savedCartItems}`)
        .then(function(responce){
            setOrdesInfo(responce.data.orders)
        })
        .catch(function(error){
            console.log(error)
        })
    }, [])
    return(
        <>
            <Header isLogged={isLogged}/>
            <div className={styleUserInfo.user_url}>Home - <span>My Orders</span></div>
            <div className={styleUserInfo.user}>
                <div className={styleUserInfo.user__sidebar}>
                    <h1>Hello</h1>
                    <p>Welcome to my account</p>
                    <nav className={styleUserInfo.user__nav}>
                        <Link to="/user-info/orders" className={styleUserInfo.user__nav__main}>
                            <GoChecklist /> 
                            <span>
                                My Orders
                            </span>
                        </Link>
                        <Link to="/user-info">
                            <PiUser /> 
                            <span>
                                My Info
                            </span>
                        </Link>
                        <Link to="/">
                            <RxExit /> 
                            <span>
                                Sign Out
                            </span>
                        </Link>
                    </nav>
                </div>
                {
                    ordersInfo.length != 0 ?
                    <div className={styleUserInfo.user__orders}>
                        <h3>My Orders</h3>
                        <div className={styleUserInfo.orders__blog}>
                            {
                                ordersInfo.map((order) =>(
                                    <div className={styleUserInfo.orders__item}>
                                        <div className={styleUserInfo.orders__item__head}>
                                            <h4>Order no #{order.ordersId}</h4>
                                            <p>Order Date: <span>{order.date}</span></p>
                                            <p>Order Status: <span>inprogress</span></p>
                                        </div>
                                        <div className={styleUserInfo.orders__item__info}>
                                            <div className={styleUserInfo.item__info}>
                                                <img src={order.items[0].img} alt="#" />
                                                <div>
                                                    <h5>{order.items[0].title}</h5>
                                                    <p>Color: <span>{order.items[0].color}</span></p>
                                                    <p>Size: <span>{order.items[0].size}</span></p>
                                                    <p>Qty: <span>{order.items[0].quantity}</span></p>
                                                    <div>Total: {order.items[0].quantity * order.items[0].price}.00</div>
                                                </div>
                                            </div>
                                            <button>View Detail</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    :
                    <div className={styleUserInfo.orders__empty}>
                        <GrUnorderedList />
                        <h1>Your orders is empty.</h1>
                        <p>You don’t have any orders in the your order list yet. You will find a lot
                        of interesting products on our Shop page.</p>
                        <Link to="/">
                            <button>Continue Shopping</button>
                        </Link>
                    </div>
                }

            </div>
            <Footer/>
        </>
    )

}

export default Orders