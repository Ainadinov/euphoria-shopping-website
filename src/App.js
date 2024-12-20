import {BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import WishList from "./component/WishList/WishList";
import AuthSignIn from "./component/SignIn/SignIn";
import Main from "./component/Main/Main";
import AuthSignUp from "./component/SignUp/SignUp";
import UserInfo from "./component/UserInfo/UserInfo";
import Orders from "./component/UserInfo/Orders/Orders";
import MenClothes from "./component/Men/Men";
import WomenClothes from "./component/Women/Women";
import Cart from "./component/Cart/Cart";
import SingleProduct from "./component/SingleProduct/SingleProduct";
import axios from "axios";
// json-server --watch db.json --port 5000

function App() {
  const [isSingleProduct, setIsSingleProduct] = useState([])
  const [isLogged, setIsLogged] = useState(() => {
    const storedIsLogged = localStorage.getItem('isLogged');
    return storedIsLogged ? JSON.parse(storedIsLogged) : false;
  });

  useEffect(() => {
    localStorage.setItem('isLogged', JSON.stringify(isLogged));
  }, [isLogged]);

  const handleToSingleProduct = (id) =>{
    axios.get(`http://localhost:3001/products/${id}`)
        .then(function(responce){
          setIsSingleProduct(responce.data)
          window.scrollTo(0, 0);
        })
        .catch(function(error){
            console.log(error)
        })
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main isLogged={isLogged} handleToSingleProduct={handleToSingleProduct}/>}/>
          <Route path="/auth-signin" element={<AuthSignIn setIsLogged={setIsLogged}/>}/>      
          <Route path="/auth-signup" element={<AuthSignUp/>}/>      
          <Route path="/user-info" element={<UserInfo setIsLogged={setIsLogged} isLogged={isLogged}/>}/>      
          <Route path="/user-info/orders" element={<Orders isLogged={isLogged}/>}/>      
          <Route path="/men" element={<MenClothes isLogged={isLogged} handleToSingleProduct={handleToSingleProduct}/>}/>      
          <Route path="/women" element={<WomenClothes isLogged={isLogged} handleToSingleProduct={handleToSingleProduct}/>}/>  
          <Route path="/cart" element={<Cart isLogged={isLogged}/>}/>    
          <Route path="/single-product/:id" element={<SingleProduct isLogged={isLogged} isSingleProduct={isSingleProduct} handleToSingleProduct={handleToSingleProduct}/>}/>    
          <Route path="/wish-list" element={<WishList isLogged={isLogged}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
