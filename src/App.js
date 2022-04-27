import Home from './view/Home/Home.js';
import Login from './view/Login/Login.js';
import Qltl from './view/Qltl/Qltl.js';
import Qlcv from './view/Qlcv';
import MyTask from './view/Qlcv/MyTask';

import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import React from 'react';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<Home />}></Route>

                {/* Quản lý tài liệu */}
                <Route  path="/qltl/*" element={<Qltl/>}></Route>

                {/* Quản lý công việc */}
                <Route path="/qlcv" element={<Qlcv/>}></Route>
                <Route path="/qlcv/my-task" element={<MyTask/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;