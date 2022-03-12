import './Frame1731.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FolderOpenOutlined, LogoutOutlined, ProfileOutlined,UserOutlined} from '@ant-design/icons';
import avatar from '../../images/T1.jpg';
import Img2 from '../../images/bg-qlnb.png';

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + { Img2 } + ")"
};

function App() {
    return (
      <div className="App">
        <div style={{width: '15%',background: '#f3f2f1', height: '100vh'}} className='toggle-menu'>
          <h2>
            <a href='' className='px-4 py-1' style={{ display:'block', textDecoration:'none', fontWeight: 'bold', color: '#58595b' }}><b>HAIVAN</b></a>
          </h2>
          <ul className='menu'>
            <li><a href='' className='px-4 py-2 mb-1'><FolderOpenOutlined className='px-2'/>Quản lý tài liệu</a></li>
            <li><a href='' className='px-4 py-2 mb-1'><ProfileOutlined className='px-2'/>Quản lý công việc</a></li>
            <li><a href='' className='px-4 py-2 mb-1'><ProfileOutlined className='px-2'/>Quản lý chấm công</a></li>
          </ul>
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
                      <ul className='user-name-dropdown shadow py-1' style={{ listStyleType: 'none',  }}>
                        <li><a href=''><UserOutlined />Tài khoản</a></li>
                        <li><a href=''><LogoutOutlined />Đăng xuất</a></li>
                      </ul>
                    </div>
                    
                  </li>
                </ul>
              </div>
            </div>

          </header>
          <section style={ sectionStyle }>

          </section>
        </div>
        
      </div>
    );
  }
  
  export default App;