
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { Routes } from "react-router";
import Home from './view/Home/Home.js';
import Login from './view/Login/Login.js';
import Qltl from './view/Qltl/Qltl.js';
import DetailFolder from './view/Qltl/DetailFolder';
import React from 'react';
import RecentHistory from './view/Qltl/RecentHistory';
import MyDoc from "./view/Qltl/MyDoc";
import MyFileShared from "./view/Qltl/MyFileShared";
import Trash from "./view/Qltl/Trash";
import DocFavorite from "./view/Qltl/DocFavorite";
import Qlcv from './view/Qlcv';
import MyTask from './view/Qlcv/MyTask';

// const LayoutDocumentManagement = React.lazy(() => 
//     import("./view/Qltl/Qltl.js")
// );

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<Home />}></Route>

                {/* Quản lý tài liệu */}
                <Route  path="/qltl/*" element={<Qltl/>}></Route>
                {/* <Route path={`/qltl/:id/:slug`} element={<DetailFolder/>}></Route>
                <Route path="/qltl/cua-toi" element={<MyDoc/>}></Route>
                <Route path="/qltl/recent-history" element={<RecentHistory/>}></Route>
                <Route path="/qltl/chia-se" element={<MyFileShared/>}></Route>
                <Route path="/qltl/trash" element={<Trash/>}></Route>
                <Route path="/qltl/yeu-thich" element={<DocFavorite/>}></Route> */}

                {/* Quản lý công việc */}
                <Route path="/qlcv" element={<Qlcv/>}></Route>
                <Route path="/qlcv/my-task" element={<MyTask/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;