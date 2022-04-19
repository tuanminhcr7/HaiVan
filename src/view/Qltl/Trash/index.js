import '../Qltl.css';
import FolderTrash from '../../../components/FolderTrash';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { InsertRowAboveOutlined, UnorderedListOutlined } from '@ant-design/icons';
import GridDataFile from '../../../components/GridDataFile';


const Trash = () => {

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

    const [trash, setTrash] = useState([]);
    const [viewFile, setViewFile] = useState(false);

    // state = {
    //     collapsed: false,
    //     view: true,
    //     trashes: []
    // };

    const handleTrash = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/trash', myHeaders).then(res => {
            setTrash(res.data.data);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        document.title = "Thùng rác";
        handleTrash();
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
                    <Link to={'/qltl/trash'} style={{ textDecoration: 'none', color: '#201f1e' }}>Thùng rác</Link>
                </p>
            </div>

            <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                <Button onClick={changeFileGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                <Button onClick={changeFileList} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
            </div>
            {trash &&
                <div className='row px-5'>
                    {viewFile ? <GridDataFile data={trash}/> : <FolderTrash data={trash} />}    
                </div>
            }

        </div>
    );
}

export default Trash;