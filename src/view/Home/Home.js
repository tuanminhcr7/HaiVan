import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../../images/T1.jpg';
import Img2 from '../../images/bg-qlnb.png';
import { logout as apiLogout } from '../../api/auth';

import { Link } from 'react-router-dom';
import {
  FolderOpenOutlined, LogoutOutlined, ProfileOutlined, 
  UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Menu, Button } from 'antd';
import React from 'react';
import MenuItem from 'antd/lib/menu/MenuItem';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Quản lý nội bộ";

  });
  const sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + { Img2 } + ")"
  };

  const [collapsed, setCollapsed] = useState(false);

  // state = {
  //   collapsed: false,
  // };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const logout = async () => {
    apiLogout().then(() => {
        console.log('Đăng xuất');
    });
    navigate("/login");
};

  return (
    <div className="App">
      <div style={{ width: 200, display: 'flex', position: 'fixed' }}>
        <Menu
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          style={{ background: '#f3f2f1', zIndex: '2', height: '100vh' }}
        >
          <MenuItem>
            <Link to={'/'} className='pt-3' style={{ display: 'block', textDecoration: 'none', fontWeight: 'bold', color: '#58595b' }}><h2 style={{ fontWeight: 'bold' }}>{!collapsed && <b>HAIVAN</b>}</h2></Link>
          </MenuItem>

          <MenuItem key="1" icon={<FolderOpenOutlined />}>
            <Link to={'/qltl'} className='link' title='Quản lý tài liệu'>Quản lý tài liệu</Link>
          </MenuItem>

          <MenuItem key="2" icon={<ProfileOutlined />}>
            <Link to={'/qlcv'} className='link' title='Quản lý công việc'>Quản lý công việc</Link>
          </MenuItem>

          <MenuItem key="3" icon={<ProfileOutlined />}>
            <Link to={'#'} className='link' title='Quản lý chấm công'>Quản lý chấm công</Link>
          </MenuItem>

          <MenuItem key="4" icon={<ProfileOutlined />}>
            <Link to={'#'} className='link' title='Quản lý chấm công'>Quản lý quy trình</Link>
          </MenuItem>
        </Menu>

        <Button type="default" onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
            border: 'none',
            fontSize: '25px',
            paddingTop: '0',
            marginBottom: '0',
            backgroundColor: 'transparent',
            zIndex: '3',
            left: '-60px'
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
      </div>

      <div className='header-content' style={{ paddingLeft: 200 }}>
        <header style={{ width: '88vw' }}>
          <div className='row'>
            <div className='col p-0'></div>
            <div className='col p-0'>
              <ul className='user-name'>
                <li className='pt-2 user-name-drop'>
                  <b>Chào, Vũ Nguyễn Tuấn Minh</b>
                  <img src={avatar} width={30} height={30}></img>

                  <div style={{ paddingTop: 15 }}>
                    <ul className='user-name-dropdown shadow py-1 collapse show' style={{ listStyleType: 'none', }}>
                      <li><a href=''><UserOutlined />Tài khoản</a></li>
                      <li><button onClick={logout} style={{ padding: '5px 10px', display: 'flex', alignItems: 'center', width: '100%', border: 'none', background: 'transparent' }}><LogoutOutlined />&nbsp;&nbsp;Đăng xuất</button></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <section className='section-home' style={sectionStyle}></section>
      </div>
    </div>
  );
}

export default Home;