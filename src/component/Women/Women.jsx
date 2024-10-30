import { useEffect, useState } from "react"
import { FaRegHeart } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Header from "../Header/header"
import styleMenClothes from "./women.module.css"
import axios from "axios";
import FilterCard from "../FilterCard/FilterCard";


function WomenClothes ({isLogged}) {
    const [isWomenProducts, setIsWomenProducst] = useState([]);

    const [priceRange, setPriceRange] = useState({min:0, max:300});
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedType, setSelectedType] = useState([]);

    useEffect(()=>{
        const filterArr = (products) => {
            let res = products.filter((e)=> e. category === "Women")

            return setIsWomenProducst(res)
        }

        axios.get("http://localhost:3001/products")
        .then(function(responce){
            filterArr(responce.data)
        })
        .catch(function(error){
            console.log(error)
        })
    },[])

    const filteredProducts = isWomenProducts.filter((product) =>{
        const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
        const matchesColor = selectedColors.length === 0 || selectedColors.some((color)=> product.color.includes(color))
        const matchesSize = selectedSize.length === 0 || selectedSize.some((size)=> product.size.includes(size))
        const matchesType = selectedType.length === 0 || selectedType.some((type)=> product.type.includes(type))
        return matchesPrice && matchesColor && matchesSize && matchesType
    })
    return(
        <>
            <Header isLogged={isLogged}/>
            <div className={styleMenClothes.clothes}>   
                <FilterCard 
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    selectedColors={selectedColors}
                    setSelectedColors={setSelectedColors}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}/>
                <div className={styleMenClothes.clothes__cards}>
                    <h5>Women’s Clothing</h5>
                    <div className={styleMenClothes.cards__blog}> 
                        {
                            filteredProducts.length !== 0 
                                    ?
                                filteredProducts.map((e)=>(
                                    <div key={e.id} className={styleMenClothes.cards__item}>
                                        <img src={e.img} alt="#" />
                                        <FaRegHeart className={styleMenClothes.cards__icon}/>
                                        <div className={styleMenClothes.cards__subitem}>
                                            <div>
                                                <h6>{e.title}</h6>
                                                <span>{e.brand}</span>
                                            </div>
                                            <div className={styleMenClothes.cards__subitem__price}>
                                                ${e.price}.00
                                            </div>
                                        </div>
                                    </div>
                                ))
                                    :
                                <div className={styleMenClothes.cards__notfound}>
                                    <img src="/img/Main/filterNotFound.png" alt="#" />
                                </div>
                        }
                    </div>
                </div>
            </div>
            <div className={styleMenClothes.clothes__online}>
                <h5>Clothing for Women Online in India</h5>
                <div>
                    <h6>Reexplore Women's Clothing Collection Online at Euphoria</h6>
                    <p>
                        Women's Clothing – Are you searching for the best website to buy Clothing for Women online in India? Well, your search for the coolest and most stylish womens clothing ends here. From trendy Casual Womens Wear Online shopping to premium quality cotton women's apparel, <span>Euphoria</span> has closet of Women Collection covered with the latest and best designs of Women's Clothing Online.
                        <br />
                        <br />
                        Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. 
                    </p>
                    <h6>One-Stop Destination to Shop Every Clothing for Women: Euphoria</h6>
                    <p>
                        Today, Clothing for Women is gaining more popularity above all. This is because gone are the days when women were used to carrying uncomfortable fashion. Today, a lady looks prettier when she is in Casual Womens Wear which is a comfortable outfit. Concerning this, <span>Euphoria</span> has a big fat range of Stylish Women's Clothing that would make her the winner wherever she goes. 
                        <br />
                        <br />
                        Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. It is quite evident to say that there are very few Womens Clothing online stores where you can buy Western Wear for Women comprising the premium material and elegant design that you are always seeking for. Basically, 
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default WomenClothes