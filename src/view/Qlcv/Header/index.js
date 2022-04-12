import { Component } from "react";
import { Menu, Button, Upload, Space, Tag, Table } from 'antd';
import Search from 'antd/lib/transfer/search';
import { LogoutOutlined, PlusSquareOutlined, ProjectOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
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
                        <Button style={{ border: 'none', marginLeft: 15, backgroundColor: '#1890ff', borderRadius: 3, color: '#fff', alignItems: 'center', display: 'flex' }} icon={<ProjectOutlined className='m-0 p-0' />}>Tạo dự án</Button>
                        <Button style={{ border: 'none', marginLeft: 15, backgroundColor: '#237804', borderRadius: 3, color: '#fff', alignItems: 'center', display: 'flex' }} icon={<PlusSquareOutlined className='m-0 p-0' />}>Tạo nhóm</Button>
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
                                <ul className='user-name-dropdown shadow py-1 collapse show' style={{ listStyleType: 'none'}}>
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