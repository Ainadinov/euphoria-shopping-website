import { useEffect, useState } from "react"
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/header"
import styleMenClothes from "./men.module.css"
import axios from "axios";
import FilterCard from "../FilterCard/FilterCard";


function MenClothes ({isLogged, handleToSingleProduct}) {
    const [isMenProducts, setIsMenProducst] = useState([]);

    const [priceRange, setPriceRange] = useState({min:0, max:300});
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedType, setSelectedType] = useState([]);

    useEffect(()=>{
        const filterArr = (products) => {
            let res = products.filter((e)=> e. category === "Men")

            return setIsMenProducst(res)
        }

        axios.get("http://localhost:3001/products")
        .then(function(responce){
            filterArr(responce.data)
        })
        .catch(function(error){
            console.log(error)
        })
    },[])

    const filteredProducts = isMenProducts.filter((product) =>{
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
                    <h5>Men’s Clothing</h5>
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
                                                <Link to={`/single-product/${e.id}`}>
                                                    <h6 onClick={() =>handleToSingleProduct(e.id)}>{e.title}</h6>
                                                </Link>
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
                <h5>Clothing for Men Online in India</h5>
                <div>
                    <h6>Reexplore Men's Clothing Collection Online at Euphoria</h6>
                    <p>
                        Men's Clothing – Are you searching for the best website to buy Men's Clothing online in India? Well, your search for the most stylish and trendy men's wear ends here. From fashionable casual wear to premium-quality cotton men's apparel, <span>Euphoria</span> has a full closet of Men's Collection covered with the latest and best designs in Men's Clothing Online.
                        <br />
                        <br />
                        Our collection includes everything from classic T-shirts and comfortable jeans to sharp shirts and essential outerwear. Crafted from high-quality materials, each piece in our Men’s Collection is designed to fit well and last long. Euphoria’s online shopping experience is easy and convenient, so you can upgrade your wardrobe with the latest trends at the click of a button.
                        <br />
                        <br />
                        Our collection of clothes for men will make you the trendsetter with an iconic resemblance of choice in Mens Wear. 
                    </p>
                    <h6>One-Stop Destination to Shop Every Clothing for Men: Euphoria</h6>
                    <p>
                        Today, Men's Clothing is gaining more popularity than ever. Gone are the days when men had to compromise style for   comfort. Nowadays, a man looks his best in Casual Men’s Wear, combining ease with fashion-forward choices. In line with this trend, Euphoria offers a vast collection of Stylish Men's Clothing that sets you apart wherever you go.
                        Our men’s collection will make you the trendsetter with an impeccable sense of style in Men’s Wear. <span>Euphoria</span> stands out as one of the few online stores where you can find Western Wear for Men crafted with premium materials and elegant design – exactly what you’re looking for.
                        <br />
                        <br />
                        What sets Euphoria apart is our dedication to quality and elegance. As one of the few online stores where you can shop for premium Western Wear for Men, we combine sophisticated materials and refined designs for that polished look. If you’re aiming to revamp your wardrobe, our extensive collection offers options that are both trendy and timeless, making it easier than ever to find the perfect pieces for any occasion.
                        <br />
                        <br />
                        Discover the world of Men’s Clothing at Euphoria today – because style, comfort, and quality should always go hand in hand.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default MenClothes