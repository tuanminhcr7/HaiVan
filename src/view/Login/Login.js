import './Login.css';
import { Input, Image, Form, Checkbox, Anchor, Button } from 'antd';
// import {Link} from 'Anchor';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import Img from '../../images/bg-login.jpg';
import axios from 'axios';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { Navigate, useNavigate } from 'react-router';

class Login extends Component {
  

  // onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   this.history.push('/');
  // }

  state = {
    name: '',
    password: ''
  }

  

  handleSubmit = event => {
    const navigate = useNavigate();
    event.preventDefault();

    const user = {
      name: this.state.name,
      password: this.state.password
    };

    axios.post(`https://dev.api.qlnb.haivanexpress.vn/api/login`, { user })
      .then(res => {
        navigate('/')
      })
    
    
  }

  render () {
    return (
      <div className="App">
        <div class="background">
          <img src={Img} alt="Hải Vân"/>
        </div>
        <div class="form-login">
          <form method='POST' >
            <p>Chào bạn!</p>
            <h2>Vui lòng đăng nhập</h2>
  
            
            <Input size="large" placeholder='Tên tài khoản' name='name' prefix={<UserOutlined />}  style={{ width: "100%" }} /><br/><br/>
            <Input size="large" type={'password'} name='password' placeholder='Mật khẩu' prefix={<LockOutlined />}  style={{ width: "100%" }} /><br/><br/>
            <Checkbox defaultChecked>Ghi nhớ tài khoản</Checkbox>
            {/* <Anchor><Link href="#" title="Quên mật khẩu?"/></Anchor> */}
            <br/><br/>
            <Button size='large' color='#fadb14' htmlType='submit' onClick={this.handleSubmit} style={{ background: "#faad14" }} block>
              Đăng nhập
            </Button>
            <br/><br/>
            <p>Liên hệ tổng đài 1900 6763 để được tư vấn</p>
            
            
          </form>
        </div>
      </div>
    );
  }
  

}



export default Login;
