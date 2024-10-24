import Footer from "../Footer/Footer";
import Header from "../Header/header";
import styleMain from "./main.module.css"
import { FaStar } from "react-icons/fa6";

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
            <div className={styleMain.brands}>
                <h1>Top Brands Deal</h1>
                <p> Up To <span>60%</span> off on brands</p>
                <div className={styleMain.brands__logo}>
                    <img src="/img/Main/brands-1.png" alt="#" />
                    <img src="/img/Main/brands-2.png" alt="#" />
                    <img src="/img/Main/brands-3.png" alt="#" />
                    <img src="/img/Main/brands-4.png" alt="#" />
                    <img src="/img/Main/brands-5.png" alt="#" />
                </div>
            </div>
            <div className={styleMain.feedback}>
                <h3>Feedback</h3>
                <div className={styleMain.feedback__row}>
                    <div className={styleMain.feedback__item}>
                        <img src="/img/Main/feedback-1.png" alt="#" />
                        <span>Floyd Miles</span>
                        <div className={styleMain.feedback__star}>
                            <FaStar />
                            <span>4.5</span>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. <br />
                        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className={styleMain.feedback__item}>
                        <img src="/img/Main/feedback-2.png" alt="#" />
                        <span>Ronald Richards</span>
                        <div className={styleMain.feedback__star}>
                            <FaStar />
                            <span>4.0</span>
                        </div>
                        <p>Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className={styleMain.feedback__item}>
                        <img src="/img/Main/feedback-3.png" alt="#" />
                        <span>Savannah Nguyen</span>
                        <div className={styleMain.feedback__star}>
                            <FaStar />
                            <span>4.5</span>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. <br />
                        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Main;