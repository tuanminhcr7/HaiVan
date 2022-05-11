import avatar from '../../../images/T1.jpg';
import Search from 'antd/lib/transfer/search';
import './style.css';
import { logout as apiLogout } from '../../../api/auth';

import React, { useEffect, useState } from 'react';
import { Button, Input, Upload } from 'antd';
import { FolderAddOutlined, LogoutOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Header = ({ users }) => {
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const beforeUpload = (file, fileList) => {

        navigate("/qltl/upload-file", {
            state: {
                files: fileList,
            }
        });
    }

    const logout = async () => {
        await apiLogout().then(() => {
            console.log('Đăng xuất');
        });
        navigate("/login");
    };

    return (
        <header style={{ width: '88vw' }}>
            <div className='row px-0'>
                <div className='col px-0'>
                    <div className='px-5 pt-2' style={{ display: 'flex' }}>
                        <Search
                            placeholder="Tìm kiếm tài liệu"
                            onSearch={value => console.log(value)}
                        />

                        <Upload
                            beforeUpload={beforeUpload}
                            showUploadList={false}
                            multiple={true}
                            onChange={handleFileSelect}
                        >
                            <Button
                                style={{
                                    marginLeft: "15px",
                                    background: "#0078D4",
                                    border: "none", display: 'flex', alignItems: 'center'
                                }}
                                type="primary"
                                icon={<UploadOutlined />}
                            >
                                Tải lên
                            </Button>
                        </Upload>
                        {users.isAdmin == 1 &&
                            <Button
                                style={{
                                    marginLeft: "15px",
                                    background: "#008d47",
                                    border: "none", display: 'flex', alignItems: 'center', color: '#fff'
                                }}
                                icon={<FolderAddOutlined />}
                            >
                                Tạo thư mục
                            </Button>
                        }

                    </div>
                </div>

                <div className='col px-0'>
                    <ul className='user-name'>
                        <li className='pt-2 user-name-drop'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <b style={{ fontSize:14 }}>Chào, {users.name}</b>
                                <div style={{ width:30, height:30, borderRadius:'50%', background:'#fde3cf', display:'flex', alignItems:'center', paddingLeft:10, color:'#FF4D00' }}>{users.name.substring(0, 1)}</div>
                            </div>

                            <div style={{ paddingTop: 15, width:100 }}>
                                <ul className='user-name-dropdown shadow py-1 collapse show' style={{ listStyleType: 'none', width:250}}>
                                    <li><a href='/#' style={{ display: 'flex', alignItems: 'center' }}><UserOutlined />Tài khoản</a></li>
                                    {users.isAdmin == 1 && 
                                    <li><button style={{ padding: '5px 10px', display: 'flex', alignItems: 'center', width: '100%', border: 'none', background: 'transparent' }}><UserOutlined />&nbsp;&nbsp;Phân quyền</button></li>
                                    }
                                    <li><button onClick={logout} style={{ padding: '5px 10px', display: 'flex', alignItems: 'center', width: '100%', border: 'none', background: 'transparent' }}><LogoutOutlined />&nbsp;&nbsp;Đăng xuất</button></li>
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