import { signInWithEmailAndPassword } from "firebase/auth";
import styleSignIn from "./signin.module.css"
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Footer from "../Footer/Footer";

const saveTokenToLocalStorage = (token) => {
    localStorage.setItem('accessToken', token);
};

function AuthSignIn ({setIsLogged}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const logIn = (e) =>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            saveTokenToLocalStorage(user.user.uid);
            console.log(user);
            navigate('/');
            setIsLogged(true)
        })
        .catch((error) => {
            console.log(error);
            setError("Registration failed: " + error.message);
        });
        
    }

    return(
        <div className={styleSignIn.sign__container}>
            <div className={styleSignIn.sign__header}>
                <Link to="/">
                    <img src="/img/header/Logo.png" alt="#" className={styleSignIn.logo}/>
                </Link>
                <div className={styleSignIn.btns}>
                    <button className={styleSignIn.btns__login}>Login</button>
                    <Link to="/auth-signup">
                        <button className={styleSignIn.btns__signup}>Sign Up</button>
                    </Link>
                </div>
                
            </div>

            <img src="/img/Auth/sign.png" alt="#" className={styleSignIn.image}/>

            <div className={styleSignIn.auth}>
                <h2>Sign In Page</h2>
                <div className={styleSignIn.auth__social}>
                    <img src="./img/Auth/Google.png" alt="#" />
                     Continue With Google
                </div>
                <div className={styleSignIn.auth__social}>
                    <img src="./img/Auth/twitter.png" alt="#" />
                     Continue With Twitter
                </div>
                <div className={styleSignIn.centerline}>OR</div>
                <div className={error ? styleSignIn.error_visible : styleSignIn.error_hidden}>
                    {error}
                </div>
                <span>User name </span>
                <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    />
                <span>Password</span>
                <input 
                    type={showPassword ? 'text' : 'password'}
                    className={styleSignIn.input__password}
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                    />
                <span 
                    onClick={togglePasswordVisibility}
                    className={styleSignIn.eyes__slash}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <button className={styleSignIn.btns__send} onClick={logIn}>Sign In</button>
                <span>
                    Don’t have an account? 
                    <Link to="/auth-signup"> Sign up</Link>  
                </span>
            </div>
            <Footer/>
        </div>
    )
}

export default AuthSignIn;