import { PiUser } from "react-icons/pi"
import { Link } from "react-router-dom"
import { RxExit } from "react-icons/rx"
import { GoChecklist } from "react-icons/go";
import Footer from "../Footer/Footer"
import Header from "../Header/header"
import styleUserInfo from "./userinfo.module.css"


function UserInfo({setIsLogged, isLogged}){
    const handleLogout = () => {
        setIsLogged(false);
  
        localStorage.removeItem('accessToken');
    }
    
    return(
        <>
            <Header isLogged={isLogged}/>
            <div className={styleUserInfo.user}>
                <div className={styleUserInfo.user__sidebar}>
                    <h1>Hello</h1>
                    <p>Welcome to my account</p>
                    <nav className={styleUserInfo.user__nav}>
                        <Link to="/user-info/orders">
                            <GoChecklist /> 
                            <span>
                                My Orders
                            </span>
                        </Link>
                        <Link to="/user-info" className={styleUserInfo.user__nav__main}>
                            <PiUser /> 
                            <span>
                                My Info
                            </span>
                        </Link>
                        <Link to="/">
                            <RxExit /> 
                            <span onClick={handleLogout}>
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

export default UserInfo