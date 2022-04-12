import './style.css';
import Folder from '../../components/FolderGrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuUnfoldOutlined, MenuFoldOutlined, CheckCircleOutlined, AppstoreTwoTone, PlusSquareOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { Menu, Button, Upload, Space, Tag, Table } from 'antd';
import React from 'react';
import MenuItem from 'antd/lib/menu/MenuItem';
import Search from 'antd/lib/transfer/search';
import { Collapse } from 'antd';
import axios from 'axios';
import { render } from '@testing-library/react';
import Header from './Header';

const { Panel } = Collapse;
const { SubMenu } = Menu;

class Qlcv extends Component {

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
        folders: [],
        shareds: [],
        users: [],
        recents: [],
        menus: [],
        view: true
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

    handleRecent = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/home', this.myHeaders).then(res => {
            this.setState({
                recents: res.data.recent
            })
        }).catch(err => {
            console.log(err);
        });
    }

    handleShared = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/home', this.myHeaders).then(res => {

            this.setState({
                shareds: res.data.shared
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

    handleHome = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/home', this.myHeaders).then(res => {
            this.setState({
                folders: res.data.folder
            })
        }).catch(err => {
            console.log(err);
        });
    }

    // handleDetail = ({id}) => {
    //     id = this.state.folders.data.id;
    //     axios.get(`https://dev.api.qlnb.haivanexpress.vn/api/folders/${id}}`, this.headers).then(res => {
    //         console.log(res);
    //     }).catch(err => {
    //             console.log(err);
    //         })
    // }

    componentDidMount() {
        document.title = "Quản lý công việc";
        this.user();
        this.handleHome();
        this.handleMenu();
        this.handleRecent();
        this.handleShared();
        // this.handleDetail();
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    changeFolderGird = () => {
        this.setState({
            view: true
        });
    }

    changeFolderList = () => {
        this.setState({
            view: false
        });
    }

    render() {
        return (
            <div className="App">
                <div style={{ display: 'flex', position: 'fixed' }}>
                    <Menu
                        mode="inline"
                        theme="light"
                        inlineCollapsed={this.state.collapsed}
                        style={{ background: '#f3f2f1', zIndex: '2', height: '100vh', overflow: 'auto', scrollbarWidth: 'thin', maxWidth: 200 }}
                    >
                        <MenuItem>
                            <Link to={'/'} className='px-4 pt-3 link' style={{ display: 'block', textDecoration: 'none', fontWeight: 'bold', color: '#58595b' }}><h2 style={{ fontWeight: 'bold' }}><b>HAIVAN</b></h2></Link>
                        </MenuItem>
                        <div style={{}} className='py-3 px-4'><Link to={'/qlcv'} style={{ textDecoration: 'none', color: '#201f1e', fontSize: '15px' }}><b>Quản lý công việc</b></Link></div>
                        <MenuItem className='py-0 my-0' icon={<CheckCircleOutlined />}>
                            <Link to={'/qlcv/my-task'} className='link' title='Tài liệu của tôi'>Công việc của tôi</Link>
                        </MenuItem>
                        <SubMenu title='Dự án trọng tâm'></SubMenu>
                        <SubMenu title='Dự án tham gia'></SubMenu>
                        <SubMenu title='Dự án của bạn'></SubMenu>
                        <SubMenu title='Nhóm dự án'></SubMenu>
                    </Menu>

                    <Button type="default" onClick={this.toggleCollapsed}
                        style={{
                            marginBottom: 16,
                            border: 'none',
                            fontSize: '25px',
                            paddingTop: '0',
                            paddingBottom: '10px',
                            backgroundColor: 'transparent',
                            zIndex: '3',
                            left: '-60px'
                        }}
                    >
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                </div>

                <div className='header-content' style={{ paddingLeft: 200 }}>
                    <Header users={this.state.users} />

                    <section style={{ marginTop: '70px' }}>
                        <div className='mt-3' style={{ textAlign: 'right', width: '95%' }}>
                            <Link to={''} style={{ textDecoration: 'none', fontSize: 14 }}>Xem tất cả công việc của tôi</Link>
                        </div>
                        <div className='row px-3 m-0'>
                            <Collapse defaultActiveKey={'1'} style={{ border: 'none', backgroundColor: '#fff' }} >
                                <Panel style={{ border: 'none', fontSize: '16px', fontWeight: 'bold' }} header="Công việc sắp tới" key="1">
                                    <div className='' style={{ display: 'flex' }}>

                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                        <div className='mt-3' style={{ textAlign: 'right', width: '85%', zIndex: 2, position: 'absolute' }}>
                            <Button style={{ width: 25, height: 25, border: 'none' }} icon={<AppstoreTwoTone />}></Button>
                        </div>
                        <div className='row px-3 m-0'>
                            <Collapse defaultActiveKey={'1'} style={{ border: 'none', backgroundColor: '#fff' }} >
                                <Panel style={{ border: 'none', fontSize: '16px', fontWeight: 'bold' }} header="Dự án trọng tâm" key="1">
                                    <div className='' style={{ display: 'flex' }}>
                                        <Link to={``} className='px-2 link-folder' style={{ color: '#201f1e' }} title='sss'>
                                            <div className=''>
                                                <img src='https://dev.qlnb.haivanexpress.vn/static/media/Rocket.1179c03d.svg' height={100} width={100} />
                                                <p style={{ fontSize: '15px', marginBottom: '0', textAlign: 'center' }}>BA {'&'} Test T10+11</p>
                                                <small className='px-4' style={{ fontSize: 'small', color: '#605e5c' }}>
                                                    TECH TEAM
                                                </small>
                                            </div>
                                        </Link>
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                        <div className='mt-3' style={{ textAlign: 'right', width: '85%', zIndex: 2, position: 'absolute' }}>
                            <Button style={{ width: 25, height: 25, border: 'none' }} icon={<AppstoreTwoTone />}></Button>
                        </div>
                        <div className='row px-3 m-0'>
                            <Collapse defaultActiveKey={'1'} style={{ border: 'none', backgroundColor: '#fff' }} >
                                <Panel style={{ border: 'none', fontSize: '16px', fontWeight: 'bold' }} header="Dự án gần đây" key="1">
                                    <div className='' style={{ display: 'flex' }}>
                                        <Link to={``} className='px-2 link-folder' style={{ color: '#201f1e' }} title='sss'>
                                            <div className=''>
                                                <img src='https://dev.qlnb.haivanexpress.vn/static/media/Rocket.1179c03d.svg' height={100} width={100} />
                                                <p style={{ fontSize: '15px', marginBottom: '0', textAlign: 'center' }}>dsfsf</p>
                                                <small className='px-4' style={{ fontSize: 'small', color: '#605e5c' }}>
                                                    áddad
                                                </small>
                                            </div>
                                        </Link>
                                        <div>
                                            <Button  style={{ height: 100, width: 100, border: 'none' }}>
                                                <img src='https://dev.qlnb.haivanexpress.vn/static/media/RocketEmpty.26246459.svg' height={100} width={100} /><br/>
                                                <p style={{ padding:5 }}>Tạo dự án mới</p>
                                            </Button>
                                            
                                        </div>
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                    </section>
                </div>
            </div>
        );
    }

}

export default Qlcv;