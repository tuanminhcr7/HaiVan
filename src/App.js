
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { Routes } from "react-router";
import Home from './view/Home/Home.js';
import Login from './view/Login/Login.js';
// import {}


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
        

    );  
}


// export default App;