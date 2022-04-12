import { Component } from "react";
import { Menu, Button, Upload, Space, Tag, Table } from 'antd';
import Search from 'antd/lib/transfer/search';
import { LogoutOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import avatar from '../../../images/T1.jpg';

const Header = ({ users }) => {

    return (
        <header style={{ width: '88vw' }}>
            <div className='row'>
                <div className='col p-0'>
                    <div className='px-5 pt-2' style={{ display: 'flex' }}>
                        <Search
                            placeholder="Tìm kiếm tài liệu"
                            onSearch={value => console.log(value)}
                        />
                        <Upload className='mx-3'>
                            <Button type="primary" style={{ display: 'flex', alignItems: 'center' }} icon={<UploadOutlined className='m-0 p-0' />}>Tải lên</Button>
                        </Upload>
                    </div>
                </div>

                <div className='col p-0'>
                    <ul className='user-name'>
                        <li className='pt-2 user-name-drop'>
                            <div style={{ display:'flex', alignItems:'center' }}>
                                <b>Chào, {users.name}</b>
                                <img src={avatar} width={30} height={30} />
                            </div>

                            <div style={{ paddingTop: 15 }}>
                                <ul className='user-name-dropdown shadow py-1 collapse show' style={{ listStyleType: 'none', }}>
                                    <li><a href='/#' style={{ display:'flex', alignItems:'center' }}><UserOutlined />Tài khoản</a></li>
                                    <li><a href='/login' style={{ display:'flex', alignItems:'center' }}><LogoutOutlined />Đăng xuất</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;