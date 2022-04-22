import '../Qltl.css';
import FolderRecent from '../../../components/FolderRecent';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { InsertRowAboveOutlined, UnorderedListOutlined } from '@ant-design/icons';
import GridDataFile from '../../../components/GridDataFile';


const RecentHistory = () => {

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

    const [recents, setRecent] = useState([]);
    const [viewFile, setViewFile] = useState(false);

    const handleRecent = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/recent', myHeaders).then(res => {
            setRecent(res.data.data);
        }).catch(err => {
            console.log(err);
        });
    }


    useEffect(() => {
        document.title = 'Tài liệu gần đây';
        handleRecent();
    }, []);

    const changeFileGird = () => {
        setViewFile(true);
    }

    const changeFileList = () => {
        setViewFile(false);
    }

    return (
        <div>
            <div className='row px-1' style={{ display: 'inline-block' }}>
                <p className='px-5' style={{ fontSize: '18px' }}>
                    <Link to={'/qltl'} style={{ textDecoration: 'none', color: '#8c8c8c' }}>Quản lý tài liệu</Link>
                    {' > '}
                    <Link to={'/qltl/recent-history'} style={{ textDecoration: 'none', color: '#201f1e' }}>Gần đây</Link>
                </p>
            </div>

            <div className='mt-1' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                <Button onClick={changeFileGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                <Button onClick={changeFileList} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
            </div>
            {recents && 
                <div className='row px-3'>
                    {viewFile ? <GridDataFile data={recents}/> : <FolderRecent data={recents} />}                
                </div>
            }
            
        </div>


    );
}

export default RecentHistory;