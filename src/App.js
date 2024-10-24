import {BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthSignIn from "./component/SignIn/SignIn";
import Main from "./component/Main/Main";
import AuthSignUp from "./component/SignUp/SignUp";
import UserInfo from "./component/UserInfo/UserInfo";
import Orders from "./component/UserInfo/Orders/Orders";
// json-server --watch db.json --port 5000

function App() {
  const [isLogged, setIsLogged] = useState(() => {
    const storedIsLogged = localStorage.getItem('isLogged');
    return storedIsLogged ? JSON.parse(storedIsLogged) : false;
  });

  useEffect(() => {
    localStorage.setItem('isLogged', JSON.stringify(isLogged));
  }, [isLogged]);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main isLogged={isLogged}/>}/>
          <Route path="/auth-signin" element={<AuthSignIn setIsLogged={setIsLogged}/>}/>      
          <Route path="/auth-signup" element={<AuthSignUp/>}/>      
          <Route path="/user-info" element={<UserInfo setIsLogged={setIsLogged} isLogged={isLogged}/>}/>      
          <Route path="/user-info/orders" element={<Orders isLogged={isLogged}/>}/>      
        </Routes>
    </BrowserRouter>

);
}

export default App;
