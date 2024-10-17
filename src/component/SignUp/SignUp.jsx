import styleSignUp from "./signup.module.css"
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Footer from "../Footer/Footer";

function AuthSignUp () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const register = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            setError("Passwords do not match");
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user);
            setError("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        })
        .catch((error) => {
            console.log(error);
            setError("Registration failed: " + error.message);
        });
        
    }

    return(
        <div className={styleSignUp.sign__container}>
            <div className={styleSignUp.sign__header}>
                <Link to="/">
                    <img src="/img/header/Logo.png" alt="#" className={styleSignUp.logo}/>
                </Link>
                <div className={styleSignUp.btns}>
                    <Link to="/auth-signin">
                        <button className={styleSignUp.btns__login}>Login</button>
                    </Link>
                        <button className={styleSignUp.btns__signup}>Sign Up</button>
                </div>
                
            </div>

            <img src="/img/Auth/signUp.png" alt="#" className={styleSignUp.image}/>

            <div className={styleSignUp.auth}>
                <h2>Sign In Page</h2>
                <div className={styleSignUp.auth__social}>
                    <img src="./img/Auth/Google.png" alt="#" />
                     Continue With Google
                </div>
                <div className={styleSignUp.auth__social}>
                    <img src="./img/Auth/twitter.png" alt="#" />
                     Continue With Twitter
                </div>
                <div className={styleSignUp.centerline}>OR</div>
                <div className={error ? styleSignUp.error_visible : styleSignUp.error_hidden}>
                    {error}
                </div>
                <span>User Email </span>
                <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    />
                <span>Password</span>
                <input 
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                    className={styleSignUp.input__password}
                    />
                <span>Confirm Password</span>
                <input 
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    value={confirmPassword}
                    className={styleSignUp.input__password}
                    />
                <span 
                    onClick={togglePasswordVisibility}
                    className={styleSignUp.eyes__slash}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <button className={styleSignUp.btns__send} onClick={register}>Sign Up</button>
                <span>
                    Aleready have an account? 
                    <Link to="/auth-signin"> Sign in</Link>  
                </span>
            </div>
            <Footer/>
        </div>
    )
}

export default AuthSignUp;