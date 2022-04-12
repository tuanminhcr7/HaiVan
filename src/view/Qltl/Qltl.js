import './Qltl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import Header from './Header';
import MenuFolder from './MenuFolder';
import routes from "../../routes";
import { Routes, Route } from 'react-router-dom';

class Qltl extends Component {

    myToken = '596|Z33Poatv6hG7p0TsKErFFjaTg1X4cjZJUfs9Ixad';
    adminToken = '615|WDEA4EByOSvXW8Jfu7ou1J5N7jYi4HGfyfiqBlUT';

    myHeaders = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.myToken}`
        }
    }

    adminHeaders = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.adminToken}`
        }
    }

    state = {
        collapsed: false,
        users: [],
        menus: []
    };

    user = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/user', this.myHeaders).then(res => {
            this.setState({
                users: res.data
            })
        }).catch(err => {
            console.log(err);
        });
    }

    handleMenu = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/folders', this.myHeaders).then(res => {
            this.setState({
                menus: res.data.data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        document.title = 'Quản lý tài liệu';
        this.user();
        this.handleMenu();
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="App">
                <MenuFolder collapsed={this.state.collapsed} menus={this.state.menus} toggleCollapsed={this.toggleCollapsed} />

                <div className='header-content' style={{ paddingLeft: 200 }}>
                    <Header users={this.state.users} />

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
}

export default Qltl;