import './Qltl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FolderOpenOutlined, LogoutOutlined, ProfileOutlined,UserOutlined, AppstoreOutlined,
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
  UploadOutlined,} from '@ant-design/icons';
import avatar from '../../images/T1.jpg';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import {Menu, Button, Upload, Space, Tag, Table} from 'antd';
import React from 'react';
import MenuItem from 'antd/lib/menu/MenuItem';
import Search from 'antd/lib/transfer/search';
import { Collapse } from 'antd';
const {Panel} = Collapse;
const {SubMenu} = Menu;

class Qltl extends Component {
//   sectionStyle = {
//     width: "100%",
//     height: "100%",
//     backgroundImage: "url(" + { Img2 } + ")"
//   };
    componentDidMount(){
        document.title = "Quản lý tài liệu";
    }  

    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            style: {
                left: '-50'
            }
        });
    };
    callback = (key) => {
        console.log(key);
    }
    
    // Table 1
    columnsTable1 = [
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'created_date',
            key: 'created_date',
        },
        {
            title: 'Chỉnh sửa',
            dataIndex: 'edit',
            key: 'edit',
        },
        {
            title: 'Chia sẻ',
            dataIndex: 'share',
            key: 'share',
        },
        {
            title: 'Đã chỉnh sửa',
            dataIndex: 'edited',
            key: 'edited',
        },
        {
            title: 'Kích cỡ',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Sở hữu',
            dataIndex: 'owner',
            key: 'owner',
        },
    ];
    dataTable1 = [
        {
            key: '1',
            name: 'Checklist tac dong DB',
            description: '',
            created_date: '08-11-2021',
            edit: '',
            share: 'Đã chia sẻ',
            edited: '', 
            size: '0.00MB',
            owner: 'Đồng văn sơn'
        },
        {
            key: '2',
            name: 'Checklist tac dong DB',
            description: 'Propose a  solution',
            created_date: '08-11-2021',
            edit: '',
            share: 'Đã chia sẻ',
            edited: '', 
            size: '0.00MB',
            owner: 'Đồng văn sơn'
        },
        {
            key: '3',
            name: 'DANH SÁCH BÁO CÁO',
            description: '',
            created_date: '08-11-2021',
            edit: '',
            share: 'Đã chia sẻ',
            edited: '', 
            size: '0.01MB',
            owner: 'Đồng văn sơn'
        },
        {
            key: '4',
            name: 'MẪU XÁC NHẬN KHÔNG B...',
            description: '12',
            created_date: '08-11-2021',
            edit: 'Đồng Văn Sơn',
            share: 'Đã chia sẻ',
            edited: '15-11-2021', 
            size: '0.01MB',
            owner: 'Đồng văn sơn'
        },
        {
            key: '5',
            name: 'csv',
            description: '',
            created_date: '08-11-2021',
            edit: '',
            share: 'Đã chia sẻ',
            edited: '', 
            size: '0.00MB',
            owner: 'Lưu Quốc Công'
        },
    ];
    // End Table 1

    // Table 1
    columnsTable2 = [
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'created_date',
            key: 'created_date',
        },
        {
            title: 'Chỉnh sửa',
            dataIndex: 'edit',
            key: 'edit',
        },
        {
            title: 'Chia sẻ',
            dataIndex: 'share',
            key: 'share',
        },
        {
            title: 'Đã chỉnh sửa',
            dataIndex: 'edited',
            key: 'edited',
        },
        {
            title: 'Kích cỡ',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Sở hữu',
            dataIndex: 'owner',
            key: 'owner',
        },
    ];
    dataTable2 = [
        {
            key: '1',
            name: 'Checklist tac dong DB',
            description: '',
            created_date: '08-11-2021',
            edit: '',
            share: 'Đã chia sẻ',
            edited: '', 
            size: '0.00MB',
            owner: 'Đồng văn sơn'
        },
        {
            key: '2',
            name: 'Checklist tac dong DB',
            description: 'Propose a  solution',
            created_date: '08-11-2021',
            edit: '',
            share: 'Đã chia sẻ',
            edited: '', 
            size: '0.00MB',
            owner: 'Đồng văn sơn'
        },
        {
            key: '3',
            name: 'DANH SÁCH BÁO CÁO',
            description: '',
            created_date: '08-11-2021',
            edit: '',
            share: 'Đã chia sẻ',
            edited: '', 
            size: '0.01MB',
            owner: 'Đồng văn sơn'
        },
        {
            key: '4',
            name: 'MẪU XÁC NHẬN KHÔNG B...',
            description: '12',
            created_date: '08-11-2021',
            edit: 'Đồng Văn Sơn',
            share: 'Đã chia sẻ',
            edited: '15-11-2021', 
            size: '0.01MB',
            owner: 'Đồng văn sơn'
        },
        {
            key: '5',
            name: 'csv',
            description: '',
            created_date: '08-11-2021',
            edit: '',
            share: 'Đã chia sẻ',
            edited: '', 
            size: '0.00MB',
            owner: 'Lưu Quốc Công'
        },
    ];
    // End Table 1
    render() {
        return (
            <div className="App">
                <div style={{ display: 'flex', position:'fixed' }}>  
                    <Menu
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.state.collapsed}
                    style={{ background: '#f3f2f1', zIndex: '2', height: '100vh'}}
                    >
                        <MenuItem>
                            <Link to={'/'} className='px-4 py-1 link' style={{ display:'block', textDecoration:'none', fontWeight: 'bold', color: '#58595b' }}><h2 style={{ fontWeight:'bold' }}><b>HAIVAN</b></h2></Link>
                        </MenuItem>
                        <div style={{  }} className='py-3 px-4'><Link to={'/qltl'} style={{ textDecoration:'none', color:'#201f1e', fontSize:'15px' }}><b>Quản lý tài liệu</b></Link></div>
                        
                        <MenuItem key="1" className='py-0 my-0' icon={<FolderOutlined />}>
                            <Link to={'/'} className='link' >Tài liệu của tôi</Link>
                        </MenuItem>
                        <MenuItem key="2" className='py-0 my-0' icon={<HistoryOutlined />}>
                            <Link to={'#'} className='link' >Gần đây</Link>
                        </MenuItem>
                        <MenuItem key="3" className='py-0 my-0' icon={<DeleteOutlined />}>
                            <Link to={'#'} className='link' >Thùng rác</Link>
                        </MenuItem>
                        <MenuItem key="4" className='py-0 my-0' icon={<TeamOutlined />}>
                            <Link to={'#'} className='link' >Được chia sẻ</Link>
                        </MenuItem>
                        <MenuItem key="5" className='py-0 my-0' icon={<HeartOutlined />}>
                            <Link to={'#'} className='link' >Yêu thích</Link>
                        </MenuItem>
                        <SubMenu key="sub2" icon={<FolderOutlined />} className='py-0 my-0' title="Công nghệ" to={'/'}>
                            
                            <SubMenu key="sub3" style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} title="Thư mục test">
                                <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="6">
                                    <Link style={{ textDecoration:'none' }} to={'#'}>Tháng 12</Link>
                                </MenuItem>
                                <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="7">
                                    <Link style={{ textDecoration:'none' }} to={'#'}>Thư mục đội công nghệ</Link>
                                </MenuItem>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} title="Marketing">
                            <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="8">
                                <Link style={{ textDecoration:'none' }} to={'#'}>Marketing tháng 11</Link>
                            </MenuItem>
                        </SubMenu>
                        <MenuItem key="9" className='py-0 my-0' icon={<FolderOutlined />}>
                            <Link to={'#'} className='link' >Hành chính</Link>
                        </MenuItem>
                        <SubMenu key="sub5" icon={<FolderOutlined />} className='py-0 my-0' title="BA-Tester" href='#'>
                            <SubMenu key="sub6" style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} title="Tháng 10">
                                <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="10">
                                    <Link style={{ textDecoration:'none' }} to={'#'}>Test tháng 11</Link>
                                </MenuItem>
                                <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="11">
                                    <Link style={{ textDecoration:'none' }} to={'#'}>Tháng 10 - 1</Link>
                                </MenuItem>
                            </SubMenu>
                            <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="12">
                                <Link style={{ textDecoration:'none' }} to={'#'}>Tháng 11</Link>
                            </MenuItem>
                            <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="13">
                                <Link style={{ textDecoration:'none' }} to={'#'}>Tháng 12</Link>
                            </MenuItem>
                            <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="14">
                                <Link style={{ textDecoration:'none' }} to={'#'}>Test tháng 10</Link>
                            </MenuItem>
                            <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="15">
                                <Link style={{ textDecoration:'none' }} to={'#'}>Tháng 9</Link>
                            </MenuItem>
                        </SubMenu>
                        <SubMenu key="sub6" style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} title="QA-QC">
                            <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="16">
                                <Link style={{ textDecoration:'none' }} to={'#'}>QA</Link>
                            </MenuItem>
                        </SubMenu>
                        <SubMenu key="sub7" style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} title="Thư mục test">
                            <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="17">
                                <Link style={{ textDecoration:'none' }} to={'#'}>test 1</Link>
                            </MenuItem>
                        </SubMenu>
                        <SubMenu key="sub8" style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} title="Thư mục">
                            <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="18">
                                <Link style={{ textDecoration:'none' }} to={'#'}>test</Link>
                            </MenuItem>
                        </SubMenu>
                        <SubMenu key="sub9"  style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} title="Test thư mục aaa">
                            <MenuItem style={{ backgroundColor:'#f3f2f1' }} icon={<FolderOutlined />} className='py-0 my-0' key="19">
                                <Link style={{ textDecoration:'none' }} to={'#'}>Test 11/11</Link>
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                    
                    <Button type="default" onClick={this.toggleCollapsed} 
                    style={{ 
                        marginBottom: 16, 
                        border:'none', 
                        fontSize:'25px', 
                        paddingTop: '0',
                        marginBottom:'0',
                        backgroundColor:'#f3f2f1',
                        zIndex:'3',
                        left:'-60px'
                    }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                                     
                </div>
              
                <div className='header-content' style={{ paddingLeft: 200 }}>
                    <header style={{width:'88vw' }}>
                        <div className='row'>
                            <div className='col p-0'>
                                <div className='px-5 pt-2' style={{ display:'flex' }}>
                                    <Search
                                    placeholder="Tìm kiếm tài liệu"
                                    onSearch={value => console.log(value)}
                                    style={{  }}
                                    />
                                    <Upload className='mx-3'>
                                        <Button type="primary" icon={<UploadOutlined className='m-0 p-0'/>}>Tải lên</Button>
                                    </Upload>
                                    
                                </div>
                                
                            </div>
                            <div className='col p-0'>
                                <ul className='user-name'>
                                <li className='pt-2 user-name-drop'>
                                    <b>Chào, Vũ Nguyễn Tuấn Minh</b>
                                    <img src={avatar} width={30} height={30}></img>
                                    {/* <sup style={{ width: '1px', border: '1px solid white', padding: '1px', borderRadius: '50%' }}></sup> */}
                                    
                                    <div style={{ paddingTop: 15 }}>
                                    <ul className='user-name-dropdown shadow py-1 collapse show' style={{ listStyleType: 'none',  }}>
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
                            <p className='px-5' style={{ fontSize:'18px' }}><Link to={'/qltl'} style={{ textDecoration:'none', color:'#201f1e' }}>Quản lý tài liệu</Link></p>
                        </div>
                        <div className='row px-5'>
                            <Table columns={this.columnsTable1} dataSource={this.dataTable1} />
                        </div>
                        <div className='row px-4'>
                            <Collapse defaultActiveKey={'1'}  style={{ border:'none', backgroundColor:'#fff' }} onChange={this.callback}>
                                <Panel style={{ border:'none', fontSize:'18px' }} header="Thư mục" key="1">
                                    <div className='' style={{ display:'flex' }}>
                                        
                                        <a className='px-2 link-folder' style={{ color:'#201f1e' }} title={'test thư mục aaa...'}>
                                            <div className=''>
                                                <div className='img-folder'></div>
                                                <p style={{ fontSize:'15px', marginBottom:'0', textAlign:'center' }}>test thư mục aaa...</p>
                                                <small className='px-4' style={{ fontSize:'small', color:'#605e5c' }}>15-3-2022</small>
                                            </div>
                                        </a>
                                        <a className='px-2 link-folder' style={{ color:'#201f1e' }} title={'thư mục'}>
                                            <div className=''>
                                                <div className='img-folder'></div>
                                                <p style={{ fontSize:'15px', marginBottom:'0', textAlign:'center' }}>thư mục</p>
                                                <small className='px-4' style={{ fontSize:'small', color:'#605e5c' }}>11-11-2021</small>
                                            </div>
                                        </a>
                                        <a className='px-2 link-folder' style={{ color:'#201f1e' }} title={'thư mục test'}>
                                            <div className=''>
                                                <div className='img-folder'></div>
                                                <p style={{ fontSize:'15px', marginBottom:'0', textAlign:'center' }}>thư mục test</p>
                                                <small className='px-4' style={{ fontSize:'small', color:'#605e5c' }}>12-11-2021</small>
                                            </div>
                                        </a>
                                        <a className='px-2 link-folder' style={{ color:'#201f1e' }} title={'QA-QC'}>
                                            <div className=''>
                                                <div className='img-folder'></div>
                                                <p style={{ fontSize:'15px', marginBottom:'0', textAlign:'center' }}>QA-QC</p>
                                                <small className='px-4' style={{ fontSize:'small', color:'#605e5c' }}>12-11-2021</small>
                                            </div>
                                        </a>
                                        <a className='px-2 link-folder' style={{ color:'#201f1e' }} title={'BA-Tester'}>
                                            <div className=''>
                                                <div className='img-folder'></div>
                                                <p style={{ fontSize:'15px', marginBottom:'0', textAlign:'center' }}>BA-Tester</p>
                                                <small className='px-4' style={{ fontSize:'small', color:'#605e5c' }}>11-11-2021</small>
                                            </div>
                                        </a>
                                        <a className='px-2 link-folder' style={{ color:'#201f1e' }} title={'Hành chính'}>
                                            <div className=''>
                                                <div className='img-folder'></div>
                                                <p style={{ fontSize:'15px', marginBottom:'0', textAlign:'center' }}>Hành chính</p>
                                                <small className='px-4' style={{ fontSize:'small', color:'#605e5c' }}>16-11-2021</small>
                                            </div>
                                        </a>
                                        <a className='px-2 link-folder' style={{ color:'#201f1e' }} title={'marketing'}>
                                            <div className=''>
                                                <div className='img-folder'></div>
                                                <p style={{ fontSize:'15px', marginBottom:'0', textAlign:'center' }}>marketing</p>
                                                <small className='px-4' style={{ fontSize:'small', color:'#605e5c' }}>15-3-2022</small>
                                            </div>
                                        </a>
                                        <a className='px-2 link-folder' style={{ color:'#201f1e' }} title={'Công nghệ'}>
                                            <div className=''>
                                                <div className='img-folder'></div>
                                                <p style={{ fontSize:'15px', marginBottom:'0', textAlign:'center' }}>Công nghệ</p>
                                                <small className='px-4' style={{ fontSize:'small', color:'#605e5c' }}>11-11-2021</small>
                                            </div>
                                        </a>
                                            
                                    </div>
  
                                </Panel>
                                
                            </Collapse>
                        </div>
                        <div className='row px-4'>
                            <Collapse defaultActiveKey={'2'} style={{ border:'none', backgroundColor:'#fff' }} onChange={this.callback}>
                                <Panel style={{ border:'none', fontSize:'18px' }} header="Tài liệu của tôi" key="2">
                                    <Table columns={this.columnsTable2} dataSource={this.dataTable2} />
                                </Panel>
                                
                            </Collapse>
                        </div>
                    </section>
                </div>
              
            </div>
        );
    }
    
}

export default Qltl;