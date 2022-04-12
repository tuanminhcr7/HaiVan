import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuUnfoldOutlined, MenuFoldOutlined, CheckCircleOutlined, AppstoreTwoTone, PlusSquareOutlined, ArrowRightOutlined, CalendarOutlined, DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { Menu, Button, Upload, Space, Tag, Table } from 'antd';
import React from 'react';
import MenuItem from 'antd/lib/menu/MenuItem';
import Search from 'antd/lib/transfer/search';
import { Collapse } from 'antd';
import axios from 'axios';
import { render } from '@testing-library/react';
import Header from '../Header';
import FolderMyTask from '../../../components/FolderMyTask';

const { Panel } = Collapse;
const { SubMenu } = Menu;

class MyTask extends Component {

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
        view: true,
        myTasks: []
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

    handleMyTask = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/tasking/dashboard/my-tasks?limit=100', this.myHeaders).then( res => {
            console.log(res.data.data);
            this.setState({
                myTasks: res.data.data
            })
        })
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

    // handleMenu = () => {
    //     axios.get('https://dev.api.qlnb.haivanexpress.vn/api/folders', this.myHeaders).then(res => {
    //         this.setState({
    //             menus: res.data.data
    //         });
    //     }).catch(err => {
    //         console.log(err);
    //     });
    // }

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
        // this.handleHome();
        // this.handleMenu();
        // this.handleRecent();
        // this.handleShared();
        this.handleMyTask();
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
                            <Link to={'/qltl/cua-toi'} className='link' title='Tài liệu của tôi'>Công việc của tôi</Link>
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
                        <div className='row px-4' style={{ borderBottom:'2px solid #f7f7f7' }}>
                            <div className='col-4 px-0' style={{ display:'flex' }}>
                                <div style={{ marginRight:10 }}><img src='https://dev.qlnb.haivanexpress.vn/static/media/Rocket.1179c03d.svg' width={50} height={50}/></div>
                                <div style={{ }}>
                                    <p className='m-0' style={{ fontSize:20, fontWeight:'bold' }}>Công việc của tôi</p>
                                    <p className='m-0' style={{ borderBottom: '2px solid #e8637B', color:'#e8637B', maxWidth:130 }}>Công việc của tôi</p>
                                </div>
                            </div>
                            <div className='col-4 px-0'></div>
                            <div className='col-4 px-0 pt-2' style={{ display:'flex' }}>
                                <Button style={{ display:'flex', alignItems:'center', marginRight:10, borderRadius:5 }} icon={<CalendarOutlined />}>Ngày bắt đầu <ArrowRightOutlined /> Ngày kết thúc</Button>
                                <Button style={{ display:'flex', alignItems:'center', borderRadius:5 }} icon={<DownloadOutlined />}>Xuất excel</Button>
                            </div>
                        </div>
                        <div className='row, px-3'>
                            <FolderMyTask myTasks={this.state.myTasks}/>
                        </div>
                    </section>
                </div>
            </div>
        );
    }

}

export default MyTask;