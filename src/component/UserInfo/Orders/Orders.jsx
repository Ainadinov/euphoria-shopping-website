import { PiUser } from "react-icons/pi"
import { Link } from "react-router-dom"
import { RxExit } from "react-icons/rx"
import { GoChecklist } from "react-icons/go";
import styleUserInfo from "./orders.module.css"
import Header from "../../Header/header";
import Footer from "../../Footer/Footer";


function Orders({isLogged}){
    return(
        <>
            <Header isLogged={isLogged}/>
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
                <div className={styleUserInfo.user__info}>

                </div>
            </div>
            <Footer/>
        </>
    )

}

export default Orders