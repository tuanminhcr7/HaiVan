import '../Qltl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FolderMyFileShared from '../../../components/FolderMyFileShared';

import { Link } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import GridDataFile from '../../../components/GridDataFile';
import { Button } from 'antd';
import { InsertRowAboveOutlined, UnorderedListOutlined } from '@ant-design/icons';


const MyFileShared = () => {

    const myToken = '596|Z33Poatv6hG7p0TsKErFFjaTg1X4cjZJUfs9Ixad';
    const adminToken = '615|WDEA4EByOSvXW8Jfu7ou1J5N7jYi4HGfyfiqBlUT';

    const myHeaders = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${myToken}`
        }
    }

    const adminHeaders = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${adminToken}`
        }
    }

    const [shared, setShared] = useState([]);
    const [viewFile, setViewFile] = useState(false);

    const handleFileShared = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/my-file-shared', myHeaders).then(res => {
            setShared(res.data.data);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        document.title = "Tài liệu được chia sẻ";
        handleFileShared();
    }, []);

    const changeFileGird = () => {
        setViewFile(true);
    }

    const changeFileList = () => {
        setViewFile(false);
    }

    return (
        <div>
            <div className='row px-1'>
                <p className='px-5' style={{ fontSize: '18px' }}>
                    <Link to={'/qltl'} style={{ textDecoration: 'none', color: '#8c8c8c' }}>Quản lý tài liệu</Link>
                    {' > '}
                    <Link to={'/qltl/chia-se'} style={{ textDecoration: 'none', color: '#201f1e' }}>Được chia sẻ</Link>
                </p>
            </div>

            <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                <Button onClick={changeFileGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                <Button onClick={changeFileList} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
            </div>
            {shared && 
                <div className='row px-4'>
                    {viewFile ? <GridDataFile data={shared} /> :<FolderMyFileShared data={shared} />}
                </div>
            }
            
        </div>
    );
}

export default MyFileShared;