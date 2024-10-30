import { PiCheckBold } from "react-icons/pi";
import styleFilterCard from "./filterCard.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

function FilterCard ({ setPriceRange, priceRange, selectedColors, setSelectedColors, setSelectedSize, selectedSize, selectedType, setSelectedType}){


    const handleMinPriceChange = (event) =>{
        const value = parseInt(event.target.value, 10)
        setPriceRange((prevRange)=>({...prevRange, min: value})) 
    }

    const handleMaxPriceChange = (event) =>{
        const value = parseInt(event.target.value, 10)
        setPriceRange((prevRange)=>({...prevRange, max: value})) 
    }

    const onColorChange = (color) =>{
        setSelectedColors((prevColor) =>
            selectedColors.includes(color) ? prevColor.filter((c)=> c !== color) : [...prevColor, color]
        )
    }

    const onSizeChange = (size) =>{
        setSelectedSize((prevSize) =>
            selectedSize.includes(size) ? prevSize.filter((s) => s !== size) : [...prevSize, size]
        )
    }

    const onTypeChange = (type) =>{
        setSelectedType((prevType) =>
            selectedType.includes(type) ? prevType.filter((t) => t !== type) : [...prevType, type]
        )
    }

    return(
        <div className={styleFilterCard.filterCard}>
            <div className={styleFilterCard.filterCard__items}>
                <h3>Filter</h3>
                <div className={styleFilterCard.filterCard__type}>
                    {
                        ["Top", "T-Shirt", "Shorts", "Sweatshirt", "Jacket", "Shirt", "Jeans", "Joggers"].map((type) =>(
                            <div className={styleFilterCard.filterCard__type__items} onClick={() => onTypeChange(type)}>
                                <span>{type}</span>
                                {
                                    selectedType.includes(type) ?  <FaPlus /> :<FaMinus />
                                }       
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styleFilterCard.filterCard__items}>
                <h3>Price</h3>
                <div className={styleFilterCard.filterCard__price}>
                    <div>
                        <span>
                            Price from 
                        </span>
                        <input 
                            type="number"
                            value={priceRange.min}
                            min="0" 
                            max={priceRange.max - 1}
                            onChange={handleMinPriceChange} 
                        />
                    </div> 
                    <div>
                        <span>
                            Price up to 
                        </span>
                        <input 
                            type="number"
                            value={priceRange.max}
                            min={priceRange.min + 1} 
                            max="300" 
                            onChange={handleMaxPriceChange}
                        />
                    </div> 
                </div>
            </div>
            <div className={styleFilterCard.filterCard__items}>
                <h3>Colors</h3>
                <div className={styleFilterCard.filterCard__color}>
                    {
                        ["red", "black", "white", "yellow", "gray", "pink", "blue", "orange"].map((color) =>(
                            <div>                        
                                <div 
                                    key={color} 
                                    style={{ backgroundColor: color, boxShadow: selectedColors.includes(color) ? "0px 0px 4px 3px rgba(138, 51, 253, 0.7)": "none"}} 
                                    className={styleFilterCard.filterCard__color__item}
                                    onClick={() => onColorChange(color)}>
                                </div>
                                <span>{color}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styleFilterCard.filterCard__items}>
                <h3>Size</h3>
                <div className={styleFilterCard.filterCard__size}>
                    {
                        ["XXS", "XL", "XS", "S", "M", "L"].map((size)=> (
                            <div 
                                key={size} 
                                style={selectedSize.includes(size) ? {backgroundColor: "#8A33FD", color: "#FFF"} : null}
                                onClick={()=> onSizeChange(size)} 
                                className={styleFilterCard.filterCard__size__item}>
                                {size}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FilterCard