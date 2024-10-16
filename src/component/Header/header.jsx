import { FaRegHeart } from "react-icons/fa";
import { PiUser } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import styleHeader from "./header.module.css"


function Header({isLogged}){
    return(
        <header>
            <img src="/img/Header/Logo.png" alt="#" />

            <nav>
                <button>Shop</button>
                <button>Men</button>
                <button>Women</button>
                <button>Kids</button>
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
                <IoCartOutline className={styleHeader.icon}/>
            </div>
            
        </header>
    )

}

export default Header