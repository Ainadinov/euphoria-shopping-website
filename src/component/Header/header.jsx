import { FaRegHeart } from "react-icons/fa";
import { PiUser } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import styleHeader from "./header.module.css"


function Header({isLogged}){
    return(
        <header>
            <Link to="/">
                <img src="/img/header/Logo.png" alt="#" />
            </Link>

            <nav>
                <Link to="/">
                    <button>Shop</button>
                </Link>
                <Link to="/men">
                    <button>Men</button>
                </Link>
                <Link to="/women">
                    <button>Women</button>
                </Link>
            </nav>

            <div className={styleHeader.search}>
                <img src="/img/Header/" alt="" />
                <input type="text" placeholder="Search" className={styleHeader.search__input}/>
                <IoIosSearch className={styleHeader.search__icon}/>
            </div>

            <div className={styleHeader.btns}>
                <FaRegHeart className={styleHeader.icon}/>
                <Link to={ isLogged ? "/user-info" : "/auth-signin"}>
                    <PiUser className={styleHeader.icon}/>
                </Link>
                <Link to="/cart">
                    <IoCartOutline className={styleHeader.icon}/>
                </Link>
            </div>
            
        </header>
    )

}

export default Header