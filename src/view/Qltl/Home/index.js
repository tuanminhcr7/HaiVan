import GridData from '../../../components/GridData';
import ListData from '../../../components/ListData';
import FolderRecent from '../../../components/FolderRecent';
import ListDataFile from '../../../components/ListDataFile';

import { InsertRowAboveOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';
import FolderShared from '../../../components/FolderShared';



const Home = () => {

    const [recents, setRecent] = useState([]);
    const [folders, setFolder] = useState([]);
    const [shared, setShared] = useState([]);
    const [viewFolder, setViewFolder] = useState(true);
    const [viewFile, setViewFile] = useState(false);

    const myToken = '662|yoj4Xgyc3za4o50IlPZdibSESGoPmQWSpsdpAKMx';
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

    const handleRecent = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/home', myHeaders).then(res => {
            setRecent(res.data.recent);
        }).catch(err => {
            console.log(err);
        });
    }

    const handleShared = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/home', myHeaders).then(res => {
            setShared(res.data.shared);
        }).catch(err => {
            console.log(err);
        });
    }

    const handleFolder = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/home', myHeaders).then(res => {
            setFolder(res.data.folder);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        document.title = 'Quản lý tài liệu';
        handleRecent();
        handleFolder();
        handleShared();
    }, [])

    const changeFolderGird = () => {
        setViewFolder(true);
    }

    const changeFolderList = () => {
        setViewFolder(false);
    }

    const changeFileGird = () => {
        setViewFile(true);
    }

    const changeFileList = () => {
        setViewFile(false);
    }

    return (
        <div>
            <div className='row px-3'>
                <p className='px-5' style={{ fontSize: '18px' }}><Link to={'/qltl'} style={{ textDecoration: 'none', color: '#201f1e' }}>{document.title}</Link></p>
            </div>

            {recents.length > 0 &&
                <>
                    <div className='row px-5'>
                        <FolderRecent data={recents} />
                    </div>
                </>
            }

            {folders.length > 0 &&
                <>
                    <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                        <Button onClick={changeFolderGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                        <Button onClick={changeFolderList} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
                    </div>
                    <div className='row px-3 m-0'>
                        {viewFolder ? <GridData data={folders} title={'Thư mục'} /> : <ListData data={folders} title={'Thư mục'} />}
                    </div>
                </>
            }

            {shared.length > 0 &&
                <>
                    <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                        <Link to={'/qltl/chia-se'} style={{ textDecoration: 'none', fontSize: 13, color: '#201f1e' }}>Xem tất cả</Link>
                        <Button onClick={changeFileGird} className='mx-2' style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                        <Button onClick={changeFileList} style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
                    </div>

                    <div className='row px-4'>
                        {viewFile ? <GridData data={shared} title={'Được chia sẻ'}  /> : <ListDataFile data={shared} title={'Được chia sẻ'} />}
                    </div>
                </>
            }
        </div>
    );
};

export default Home;