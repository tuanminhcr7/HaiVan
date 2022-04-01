import './Qltl.css';
import Folder from '../../components/FolderGrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FolderOpenOutlined, LogoutOutlined, ProfileOutlined, UserOutlined, AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    DeleteOutlined,
    HistoryOutlined,
    FolderOutlined,
    TeamOutlined,
    HeartOutlined,
    UploadOutlined,
    FileWordOutlined,
    EditOutlined,
    ShareAltOutlined,
    ArrowDownOutlined,
    EditFilled,
    UnorderedListOutlined,
    InsertRowAboveOutlined,
} from '@ant-design/icons';
import avatar from '../../images/T1.jpg';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { Menu, Button, Upload, Space, Tag, Table } from 'antd';
import React from 'react';
import MenuItem from 'antd/lib/menu/MenuItem';
import Search from 'antd/lib/transfer/search';
import { Collapse } from 'antd';
import axios from 'axios';
import { render } from '@testing-library/react';
import FolderGrid from '../../components/FolderGrid';
import FolderList from '../../components/FolderList';
import FolderRecent from '../../components/FolderRecent';
import FolderShared from '../../components/FolderShared';

const { Panel } = Collapse;
const { SubMenu } = Menu;

class Qltl extends Component {

    //   sectionStyle = {
    //     width: "100%",
    //     height: "100%",
    //     backgroundImage: "url(" + { Img2 } + ")"
    //   };

    token = '596|Z33Poatv6hG7p0TsKErFFjaTg1X4cjZJUfs9Ixad';
    headers = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        }
    }

    state = {
        collapsed: false,
        folders: [],
        shareds: [],
        users: [],
        recents: [],
        menus: []
    };

    user() {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/user', this.headers).then(res => {
            // console.log(res.data);
            this.setState({
                users: res.data
            })
        }).catch(err => {
            console.log(err);
        });
    }

    handleRecent() {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/home', this.headers).then(res => {
            // console.log(res.data.recent, 'ssss');
            this.setState({
                recents: res.data.recent
            })
        }).catch(err => {
            console.log(err);
        });
    }

    handleShared() {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/home', this.headers).then(res => {
            console.log(res.data.shared, 'ssss');
            this.setState({
                shareds: res.data.shared
            })
        }).catch(err => {
            console.log(err);
        });
    }

    handleMenu() {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/folders', this.headers).then(res => {
            // console.log(res.data.data);
            this.setState({
                menus: res.data.data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    handleHome() {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/home', this.headers).then(res => {
            // console.log(res.data, 'ss');
            this.setState({
                folders: res.data.folder
            })
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        document.title = "Quản lý tài liệu";
        this.handleMenu();
        this.handleHome();
        this.handleRecent();
        this.user();
        this.handleShared();
    }



    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        const content = document.querySelector('header-content');
        content.style = {
            left: '100px'
        }

    };
    // callback = (key) => {
    //     console.log(key);
    // }

    changeFolderGird() {
        return ( 
            <FolderGrid/>
        )
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
                        {console.log(this.state.folders)}
                        <MenuItem>
                            <Link to={'/'} className='px-4 pt-3 link' style={{ display: 'block', textDecoration: 'none', fontWeight: 'bold', color: '#58595b' }}><h2 style={{ fontWeight: 'bold' }}><b>HAIVAN</b></h2></Link>
                        </MenuItem>
                        <div style={{}} className='py-3 px-4'><Link to={'/qltl'} style={{ textDecoration: 'none', color: '#201f1e', fontSize: '15px' }}><b>Quản lý tài liệu</b></Link></div>

                        <MenuItem className='py-0 my-0' icon={<FolderOutlined />}>
                            <Link to={'#'} className='link' title='Tài liệu của tôi'>Tài liệu của tôi</Link>
                        </MenuItem>
                        <MenuItem className='py-0 my-0' icon={<HistoryOutlined />}>
                            <Link to={'#'} className='link' title='Gần đây'>Gần đây</Link>
                        </MenuItem>
                        <MenuItem className='py-0 my-0' icon={<DeleteOutlined />}>
                            <Link to={'#'} className='link' title='Thùng rác'>Thùng rác</Link>
                        </MenuItem>
                        <MenuItem className='py-0 my-0' icon={<TeamOutlined />}>
                            <Link to={'#'} className='link' title='Được chia sẻ'>Được chia sẻ</Link>
                        </MenuItem>
                        <MenuItem className='py-0 my-0' icon={<HeartOutlined />}>
                            <Link to={'#'} className='link' title='Yêu thích'>Yêu thích</Link>
                        </MenuItem>

                        {this.state.menus.map((folder) =>
                            <SubMenu icon={<FolderOutlined />} to={`${folder.slug}`} className='py-0 my-0' title={folder.name}>
                                {folder.children.map((item) =>
                                    <SubMenu style={{}} icon={<FolderOutlined />} title={item.name}>
                                        {item.children.map((item2) =>
                                            <MenuItem style={{}} icon={<FolderOutlined />} className='py-0 my-0'>
                                                <Link style={{ textDecoration: 'none' }} to={item2.slug}>{item2.name}</Link>
                                            </MenuItem>
                                        )}
                                    </SubMenu>
                                )}
                            </SubMenu>
                        )}
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
                    <header style={{ width: '88vw' }}>
                        <div className='row'>
                            <div className='col p-0'>
                                <div className='px-5 pt-2' style={{ display: 'flex' }}>
                                    <Search
                                        placeholder="Tìm kiếm tài liệu"
                                        onSearch={value => console.log(value)}
                                        style={{}}
                                    />
                                    <Upload className='mx-3'>
                                        <Button type="primary" icon={<UploadOutlined className='m-0 p-0' />}>Tải lên</Button>
                                    </Upload>
                                </div>

                            </div>
                            <div className='col p-0'>
                                <ul className='user-name'>
                                    <li className='pt-2 user-name-drop'>
                                        <b>Chào, {this.state.users.name}</b>
                                        <img src={avatar} width={30} height={30} />

                                        {/* <sup style={{ width: '1px', border: '1px solid white', padding: '1px', borderRadius: '50%' }}></sup> */}

                                        <div style={{ paddingTop: 15 }}>
                                            <ul className='user-name-dropdown shadow py-1 collapse show' style={{ listStyleType: 'none', }}>
                                                <li><a href='/#'><UserOutlined />Tài khoản</a></li>
                                                <li><a href='/login'><LogoutOutlined />Đăng xuất</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </header>
                    <section style={{ marginTop: '70px' }}>
                        <div className='row px-3'>
                            <p className='px-5' style={{ fontSize: '18px' }}><Link to={'/qltl'} style={{ textDecoration: 'none', color: '#201f1e' }}>{document.title}</Link></p>
                        </div>
                        <div className='row px-5'>
                            <FolderRecent recents={this.state.recents}/>
                        </div>
                        <div style={{ textAlign:'right', width:'100%', paddingRight:50 }}>
                            <Button onClick={this.changeFolderGird} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
                            <Button onClick={this.changeFolderGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                        </div>


                        <div className='row px-4'>
                            <FolderGrid folders={this.state.folders} />
                            <FolderList folders={this.state.folders} />

                        </div>
                        <div className='row px-4'>
                            <FolderShared shareds={this.state.shareds}/>
                        </div>
                    </section>
                </div>

            </div>
        );
    }

}

export default Qltl;