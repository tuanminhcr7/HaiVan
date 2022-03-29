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
import MenuItem from 'antd/lib/menu/MenuItem';
// import { Link } from 'react-router-dom';
const {SubMenu} = Menu;

class Home extends Component {
  componentDidMount(){
    document.title = "Quản lý nội bộ";
  }  
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
      style: {
        left: '-50'
      }
    });
  };

  render() {
    return (
      <div className="App">
        <div style={{ width:200, display: 'flex', position:'fixed' }}>
        
        <Menu
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
          style={{ background: '#f3f2f1', zIndex: '2', height: '100vh'}}
        >
          <MenuItem>
          <Link to={'/'} className='px-4 py-1' style={{ display:'block', textDecoration:'none', fontWeight: 'bold', color: '#58595b' }}><h2 style={{ fontWeight:'bold' }}><b>HAIVAN</b></h2></Link>
          </MenuItem>
          
            
          
          
          <MenuItem key="1" icon={<FolderOpenOutlined />}>
            <Link to={'/qltl'} className='link' >Quản lý tài liệu</Link>
          </MenuItem>
          <MenuItem key="2" icon={<ProfileOutlined />}>
            <Link to={'#'} className='link' >Quản lý tài liệu</Link>
          </MenuItem>
          <MenuItem key="3" icon={<ProfileOutlined />}>
            <Link to={'#'} className='link' >Quản lý tài liệu</Link>
          </MenuItem>
          
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
        <div className='header-content'style={{ paddingLeft: 200 }}>
          <header style={{ width:'88vw' }}>
            <div className='row'>
              <div className='col p-0'></div>
              <div className='col p-0'>
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
          <section className='section-home' style={ this.sectionStyle }>
            
          </section>
        </div>
        
      </div>
    );
  }
}

export default Home;