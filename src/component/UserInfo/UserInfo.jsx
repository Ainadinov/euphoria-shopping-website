import { PiUser } from "react-icons/pi"
import { Link } from "react-router-dom"
import { RxExit } from "react-icons/rx"
import { GoChecklist } from "react-icons/go";
import Footer from "../Footer/Footer"
import Header from "../Header/header"
import styleUserInfo from "./userinfo.module.css"
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { IoSettings } from "react-icons/io5";


function UserInfo({setIsLogged, isLogged}){
    const [userInitialData, setUserInitialData] = useState([])
    const [userInfo, setUserInfoDispatch] = useReducer(reducerUserinfo,{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        city: "",
        street: "",
        index: ""
    })
    const [disabledBtns, setDisabledBtns] = useState(true)
    const [inputErrors, setInputErrors] = useState({});

    const handleLogout = () => {
        setIsLogged(false);
  
        localStorage.removeItem('accessToken');
    }

    useEffect(()=>{
        let savedCartItems = localStorage.getItem('accessToken');

        axios.get(`http://localhost:3001/users/${savedCartItems}`)
        .then(function(responce){
            let userData = {
                firstName: responce.data.firstName,
                lastName: responce.data.lastName,
                email: responce.data.email,
                phoneNumber: responce.data.phoneNumber,
                country: responce.data.country,
                city: responce.data.city,
                street: responce.data.street,
                index: responce.data.index
            }
            setUserInitialData(userData)
            setUserInfoDispatch({ type: "initial_data", payload: userData });
        })
        .catch(function(error){
            console.log(error)
        })
    },[])

    function reducerUserinfo (userInfo, action){
        switch (action.type){
            case "initial_data" :
                return {...userInfo, ...action.payload};
            case "firstName" :
                return {...userInfo, firstName: action.value};
            case "lastName" :
                return {...userInfo, lastName: action.value};
            case "phoneNumber" :
                return {...userInfo, phoneNumber: action.value};
            case "country" :
                return {...userInfo, country: action.value};
            case "city" :
                return {...userInfo, city: action.value};
            case "street" :
                return {...userInfo, street: action.value};
            case "index" :
                return {...userInfo, index: action.value};
            default:
                return userInfo;
        }
    }

    const handleDisabledBtns = () =>{
        setUserInfoDispatch({ type: "initial_data", payload: userInitialData });
        setDisabledBtns(!disabledBtns)
        setInputErrors({})
    }

    const handleChangeUserInfo  = () =>{
        const savedCartItems = localStorage.getItem('accessToken');

        const validateData = () => {
            const errors = {};

            if(userInfo.firstName.length == 0){
              errors.firstName = true
            }
      
            if(userInfo.lastName.length == 0){
              errors.lastName = true
            }
  
            if(userInfo.phoneNumber.length < 9){
              errors.phoneNumber = true
            }

            if(userInfo.country.length == 0){
              errors.country = true
            }

            if(userInfo.city.length == 0){
              errors.city = true
            }

            if(userInfo.street.length == 0){
              errors.street = true
            }

            if(userInfo.index.length < 4){
              errors.index = true
            }
        

            setInputErrors(errors);
        
            // Если есть ошибки, возвращаем false
            return Object.keys(errors).length === 0;
          };
      
          if (!validateData()) {
            return;
          }
        
        axios.put(`http://localhost:3001/users/${savedCartItems}`, userInfo)
        .then(function(responce){
            setDisabledBtns(!disabledBtns)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    
    return(
        <>
            <Header isLogged={isLogged}/>
            <div className={styleUserInfo.user_url}>Home - <span>Add To Cart</span></div>
            <div className={styleUserInfo.user}>
                <div className={styleUserInfo.user__sidebar}>
                    <h1>Hello</h1>
                    <p>Welcome to my account</p>
                    <nav className={styleUserInfo.user__nav}>
                        <Link to="/user-info/orders">
                            <GoChecklist /> 
                            <span>
                                My Orders
                            </span>
                        </Link>
                        <Link to="/user-info" className={styleUserInfo.user__nav__main}>
                            <PiUser /> 
                            <span>
                                My Info
                            </span>
                        </Link>
                        <Link to="/">
                            <RxExit /> 
                            <span onClick={handleLogout}>
                                Sign Out
                            </span>
                        </Link>
                    </nav>
                </div>
                <div className={styleUserInfo.user__info}>
                    <h3>My Info</h3>
                    <h6>Contact Details</h6>
                    <div className={styleUserInfo.user__info__items}>
                        <div>
                            <span>Fist Name</span>
                            <input 
                                type="text" 
                                value={userInfo.firstName}
                                disabled={disabledBtns}
                                onChange={(e) => setUserInfoDispatch({type: "firstName", value: e.target.value})}
                                className={inputErrors.firstName ? `${styleUserInfo.user__info__error}` : null}
                            />
                        </div>
                        <div>
                            <span>Last Name</span>
                            <input 
                                type="text" 
                                value={userInfo.lastName}
                                disabled={disabledBtns}
                                onChange={(e) => setUserInfoDispatch({type: "lastName", value: e.target.value})}
                            />
                        </div>
                        <div>
                            <span>Email</span>
                            <input 
                                type="email" 
                                value={userInfo.email}
                                disabled
                            />
                        </div>
                        <div>
                            <span>Phone Number</span>
                            <input 
                                type="number" 
                                value={userInfo.phoneNumber}
                                disabled={disabledBtns}
                                onChange={(e) => setUserInfoDispatch({type: "phoneNumber", value: e.target.value})}
                            />
                        </div>
                        <div>
                            <span>Country</span>
                            <input 
                                type="text" 
                                value={userInfo.country}
                                disabled={disabledBtns}
                                onChange={(e) => setUserInfoDispatch({type: "country", value: e.target.value})}
                            />
                        </div>
                        <div>
                            <span>City</span>
                            <input 
                                type="text" 
                                value={userInfo.city}
                                disabled={disabledBtns}
                                onChange={(e) => setUserInfoDispatch({type: "city", value: e.target.value})}
                            />
                        </div>
                        <div>
                            <span>Street</span>
                            <input 
                                type="text" 
                                value={userInfo.street}
                                disabled={disabledBtns}
                                onChange={(e) => setUserInfoDispatch({type: "street", value: e.target.value})}
                            />
                        </div>
                        <div>
                            <span>Postal Code</span>
                            <input 
                                type="number" 
                                value={userInfo.index}
                                disabled={disabledBtns}
                                onChange={(e) => setUserInfoDispatch({type: "index", value: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className={styleUserInfo.user__info__btns}>
                        <div>
                            <button 
                                disabled={disabledBtns}
                                onClick={()=> handleChangeUserInfo()}>
                                Save
                            </button>
                            <button 
                                disabled={disabledBtns}
                                onClick={()=>  handleDisabledBtns()}>
                                Cancel
                            </button>
                        </div>
                        <IoSettings 
                                className={!disabledBtns ? `${styleUserInfo.user__info__icon}` : null}
                                onClick={()=>  handleDisabledBtns()}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )

}

export default UserInfo