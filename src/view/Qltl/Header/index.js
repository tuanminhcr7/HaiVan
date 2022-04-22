import avatar from '../../../images/T1.jpg';
import Search from 'antd/lib/transfer/search';

import React, { useState } from 'react';
import { Button, Input, Upload } from 'antd';
import { FolderAddOutlined, LogoutOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Header = ({ users }) => {
    const navigate = useNavigate();

    const myToken = users.token;
    const adminToken = '615|WDEA4EByOSvXW8Jfu7ou1J5N7jYi4HGfyfiqBlUT';

    const myHeaders = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${myToken}`
        }
    }

    const adminHeaders = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${adminToken}`
        }
    }

    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("files", selectedFile);
        formData.append("folder_id", 1);
        // axios.post('https://dev.api.qlnb.haivanexpress.vn/api/files',  formData, myHeaders).then(res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err);
        // })
        try {
            const response = axios({
                method: "post",
                url: "https://dev.api.qlnb.haivanexpress.vn/api/files",
                data: formData,
                headers: { "Content-Type": "multipart/form-data", 'Authorization': `Bearer ${myToken}` },
            });
        } catch (error) {
            console.log(error)
        }


    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const beforeUpload = (file, fileList) => {

        navigate("/qltl/upload-file", {
            state: {
                files: fileList,
            }
        });
    }

    return (
        <header style={{ width: '88vw' }}>
            <div className='row'>
                <div className='col p-0'>
                    <div className='px-5 pt-2' style={{ display: 'flex' }}>
                        <Search
                            placeholder="Tìm kiếm tài liệu"
                            onSearch={value => console.log(value)}
                        />

                        {/* <form onSubmit={handleSubmit} style={{ display:'flex' }}>
                            <Input type="file" onChange={handleFileSelect} />
                            <Input type="submit" value="Upload File" />
                        </form> */}
                        <Upload
                            beforeUpload={beforeUpload}
                            showUploadList={false}
                            multiple={true}
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
                                    border: "none", display: 'flex', alignItems: 'center', color:'#fff'
                                }}
                                icon={<FolderAddOutlined />}
                            >
                                Tạo thư mục
                            </Button>
                        }
                        
                    </div>
                </div>

                <div className='col p-0'>
                    <ul className='user-name'>
                        <li className='pt-2 user-name-drop'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <b>Chào, {users.name}</b>
                                <img src={avatar} width={30} height={30} />
                            </div>

                            <div style={{ paddingTop: 15 }}>
                                <ul className='user-name-dropdown shadow py-1 collapse show' style={{ listStyleType: 'none', }}>
                                    <li><a href='/#' style={{ display: 'flex', alignItems: 'center' }}><UserOutlined />Tài khoản</a></li>
                                    <li><a href='/login' style={{ display: 'flex', alignItems: 'center' }}><LogoutOutlined />Đăng xuất</a></li>
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