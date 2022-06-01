import './Qltl.css';
import Header from './Header';
import MenuFolder from './MenuFolder';
import routes from "../../routes";
import { getMenu, getUsers } from '../../api/folders';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const Qltl = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [users, setUser] = useState([]);
    const [menus, setMenu] = useState([]);
    const [isModalCreateFolder, setIsModalCreateFolder] = useState(false);

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

    const showModalCreateFolder = () => {
        setIsModalCreateFolder(true);
    }

    const handleCancel = () => {
        setIsModalCreateFolder(false);
    }

    useEffect(() => {
        document.title = 'Quản lý tài liệu';
        user();
        handleMenu();
        // setMenu(menus);
    }, []);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="App">
            <MenuFolder collapsed={collapsed} menus={menus} toggleCollapsed={toggleCollapsed} />

            <div className='header-content' style={collapsed ? {paddingLeft:80} : {paddingLeft:200}}>
                <Header users={users} collapsed={collapsed} showModal={isModalCreateFolder} cancle={handleCancel} handleShow={showModalCreateFolder} />

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