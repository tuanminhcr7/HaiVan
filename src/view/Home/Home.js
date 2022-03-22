import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FolderOpenOutlined, LogoutOutlined, ProfileOutlined,UserOutlined, AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  FolderOutlined,} from '@ant-design/icons';
import avatar from '../../images/T1.jpg';
import Img2 from '../../images/bg-qlnb.png';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import {Menu, Button} from 'antd';
import React from 'react';
const {SubMenu} = Menu;

class Home extends Component {
  sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + { Img2 } + ")"
  };

  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="App">
        <div style={{ width: 256, display: 'flex' }}>
        
        <Menu
          
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
          style={{ background: '#f3f2f1' }}
        >
          <h2><b>HAIVAN</b></h2>
          <Menu.Item key="1" icon={<FolderOpenOutlined />}>
            <a href='#' className='link' >Quản lý tài liệu</a>
          </Menu.Item>
          <Menu.Item key="2" icon={<ProfileOutlined />}>
            <a href='#' className='link' >Quản lý tài liệu</a>
          </Menu.Item>
          <Menu.Item key="3" icon={<ProfileOutlined />}>
            <a href='#' className='link' >Quản lý tài liệu</a>
          </Menu.Item>
          
        </Menu>
        <Button type="default" onClick={this.toggleCollapsed} style={{ marginBottom: 16, border:'none' }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
      </div>
        <div className='header-content'>
          <header style={{  }}>
            <div className='row'>
              <div className='col'></div>
              <div className='col'>
                <ul className='user-name'>
                  <li className='pt-2 user-name-drop'>
                    <b>Chào, Vũ Nguyễn Tuấn Minh</b>
                    <img src={avatar} width={30} height={30}></img>
                    {/* <sup style={{ width: '1px', border: '1px solid white', padding: '1px', borderRadius: '50%' }}></sup> */}
                    
                    <div style={{ paddingTop: 15 }}>
                      <ul className='user-name-dropdown shadow py-1 collapse show' style={{ listStyleType: 'none',  }}>
                        <li><a href=''><UserOutlined />Tài khoản</a></li>
                        <li><a href='/login'><LogoutOutlined />Đăng xuất</a></li>
                      </ul>
                    </div>
                    
                  </li>
                </ul>
              </div>
            </div>

          </header>
          <section style={ this.sectionStyle }>

          </section>
        </div>
        
      </div>
    );
  }
}

export default Home;