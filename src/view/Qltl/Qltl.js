import './Qltl.css';
import Header from './Header';
import MenuFolder from './MenuFolder';
import routes from "../../routes";
import { getMenu, getUsers } from '../../api/folders';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditForm from '../../components/EditForm';


const Qltl = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [users, setUser] = useState([]);
    const [menus, setMenu] = useState([]);

    const user = () => {
        getUsers().then(res => {
            setUser(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    const handleMenu = () => {
        getMenu().then(res => {
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
                    {/* <EditForm/> */}
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