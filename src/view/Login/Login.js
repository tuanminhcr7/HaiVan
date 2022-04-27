import './Login.css';
import Img from '../../images/bg-login.jpg';
import { apiLogin } from '../../api/auth';

import { Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


const Login = () => {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    let navigate = useNavigate();

    const handleChangeUsername = (event) => {
        setForm({ ...form, username: event.target.value });
    };

    const handleChangePassword = (event) => {
        setForm({ ...form, password: event.target.value });
    };

    const handleSubmit = () => {
        apiLogin(form).then((res) => {
            navigate("/");
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        document.title = 'Quản lý nội bộ';
    }, []);

    return (
        <div className="App">
            <div className="background">
                <img src={Img} alt="Hải Vân" />
            </div>
            <div className="form-login">
                <div className='form'>
                    <p>Chào bạn!</p>
                    <h2>Vui lòng đăng nhập</h2>

                    <Input
                        size="large"
                        onChange={handleChangeUsername}
                        placeholder="Tên tài khoản"
                        name="username"
                        prefix={<UserOutlined />}
                        style={{ width: "100%" }}
                    />
                    <br /><br />

                    <Input
                        size="large"
                        onChange={handleChangePassword}
                        type={"password"}
                        name="password"
                        placeholder="Mật khẩu"
                        prefix={<LockOutlined />}
                        style={{ width: "100%" }}
                    />
                    <br /><br />

                    <Checkbox defaultChecked>Ghi nhớ tài khoản</Checkbox>
                    <br /><br />

                    <Button
                        size="large"
                        color="#fadb14"
                        htmlType="submit"
                        onClick={handleSubmit}
                        style={{ background: "#faad14" }}
                        block
                    >
                        Đăng nhập
                    </Button>
                    <br /><br />

                    <p>Liên hệ tổng đài 1900 6763 để được tư vấn</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
