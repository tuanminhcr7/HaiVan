import './Qltl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import MenuFolder from './MenuFolder';
import routes from "../../routes";

import { Component, useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

const Qltl = () => {

    const myToken = '596|Z33Poatv6hG7p0TsKErFFjaTg1X4cjZJUfs9Ixad';
    const adminToken = '615|WDEA4EByOSvXW8Jfu7ou1J5N7jYi4HGfyfiqBlUT';

    const myHeaders = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${myToken}`
        }
    }

    const adminHeaders = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${adminToken}`
        }
    }

    const [collapsed, setCollapsed] = useState(false);
    const [users, setUser] = useState([]);
    const [menus, setMenu] = useState([]);

    // state = {
    //     collapsed: false,
    //     users: [],
    //     menus: []
    // };

    const user = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/user', myHeaders).then(res => {
            setUser(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    const handleMenu = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/folders', myHeaders).then(res => {
            setMenu(res.data.data);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        document.title = 'Quản lý tài liệu';
        user();
        handleMenu();
    }, [])

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="App">
            <MenuFolder collapsed={collapsed} menus={menus} toggleCollapsed={toggleCollapsed} />

            <div className='header-content' style={{ paddingLeft: 200 }}>
                <Header users={users} />

                <section style={{ marginTop: '70px' }}>
                    <Routes>
                        {routes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        element={<route.component />}
                                    />
                                )
                            );
                        })}
                    </Routes>
                </section>
            </div>
        </div>
    );
}

export default Qltl;