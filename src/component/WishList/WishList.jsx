import styleWishList from "./wishlist.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/header";
import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

function WishList ({isLogged}){
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const savedWishListItems = JSON.parse(localStorage.getItem('wishlist')) || [];

        setWishList(savedWishListItems);
    }, []);

    const handleRemoveWisListItem = (item) =>{
        const updatedWishlistItems = wishList.filter(i => i.id !== item.id);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlistItems));
        setWishList(updatedWishlistItems)
    }
    return(
        <>
            <Header isLogged={isLogged}/>
                <div className={styleWishList.wishlist}>
                    <div className={styleWishList.wishlist__head}>Home - <span>Wishlist</span></div>
                    {
                        wishList.length > 0 
                            ? 
                            <>
                                <h4>Wishlist</h4>
                                <div className={styleWishList.wishlist__block}>
                                    {
                                        wishList && wishList.map((item)=>(
                                            <div  key={item.id} className={styleWishList.wishlist__block__item}>
                                                <div>
                                                    <img src={item.img} alt="#" />
                                                    <p>{item.title}</p>
                                                </div>
                                                <span>${item.price}.00</span>
                                                <FaTrashCan 
                                                    onClick={() => handleRemoveWisListItem(item)}
                                                    className={styleWishList.wishList__trash}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                            :
                            <div className={styleWishList.wishlist__empty}>
                                <img src="/img/Products/wishlist.png" alt="#" />
                                <h1>Your wishlist is empty.</h1>
                                <p>You don’t have any products in the wishlist yet. You will find a lot
                                of interesting products on our Shop page.</p>
                                <Link to="/">
                                    <button>Continue Shopping</button>
                                </Link>
                            </div>
                    }
                </div>
            <Footer />
        </>
    )
}

export default WishList;
