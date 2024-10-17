import Footer from "../Footer/Footer";
import Header from "../Header/header";
import styleMain from "./main.module.css"

function Main ({isLogged}) {
    return(
        <>
            <Header isLogged={isLogged}/>
            <div className={styleMain.main__banner}>
                <h3>T-shirt / Tops</h3>
                <h1>Summer 
                Value Pack</h1>
                <span>cool / colorful / comfy</span>
                <button>Shop Now</button>
            </div>
            <div className={styleMain.bigsavezone}>
                <h3>Big Save Zone</h3>
                <div className={styleMain.bigsavezone__group}>
                    <div className={styleMain.bigsavezone__item}>
                        <img src="/img/Main/HawaiianShirts.png" alt="#" />
                        <div className={styleMain.bigsavezone__info}>
                            <h5>Hawaiian
                            Shirts</h5>
                            <span>Dress up in summer vibe</span>
                            <p> UPTO 50% OFF</p>
                            <img src="/img/Main/arrow.png" alt="#" />
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                    <div className={styleMain.bigsavezone__item}>
                        <img src="/img/Main/PrintedT-Shirt.png" alt="#" />
                        <div className={styleMain.bigsavezone__info}>
                            <h5>Hawaiian
                            Shirts</h5>
                            <span>Dress up in summer vibe</span>
                            <p> UPTO 50% OFF</p>
                            <img src="/img/Main/arrow.png" alt="#" />
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                    <div className={styleMain.bigsavezone__item}>
                        <img src="/img/Main/CargoJoggers.png" alt="#" />
                        <div className={styleMain.bigsavezone__info}>
                            <h5>Hawaiian
                            Shirts</h5>
                            <span>Dress up in summer vibe</span>
                            <p> UPTO 50% OFF</p>
                            <img src="/img/Main/arrow.png" alt="#" />
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                    <div className={styleMain.bigsavezone__item}>
                        <img src="/img/Main/UrbanShirts.png" alt="#" />
                        <div className={styleMain.bigsavezone__info__lasts}>
                            <h5>Hawaiian
                            Shirts</h5>
                            <span>Dress up in summer vibe</span>
                            <p> UPTO 50% OFF</p>
                            <img src="/img/Main/arrow.png" alt="#" />
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                    <div className={styleMain.bigsavezone__item}>
                        <img src="/img/Main/OversizedT-Shirts.png" alt="#" />
                        <div className={styleMain.bigsavezone__info__lasts}>
                            <h5>Hawaiian
                            Shirts</h5>
                            <span>Dress up in summer vibe</span>
                            <p> UPTO 50% OFF</p>
                            <img src="/img/Main/arrow.png" alt="#" />
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Main;