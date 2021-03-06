import GridData from '../../../components/GridData';
import ListData from '../../../components/ListData';
import FolderRecent from '../../../components/FolderRecent';
import ListDataFile from '../../../components/ListDataFile';
import { getDataHome } from '../../../api/folders';
import EditForm from '../../../components/EditForm';

import { InsertRowAboveOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';


const Home = () => {

    const [recents, setRecent] = useState([]);
    const [folders, setFolder] = useState([]);
    const [shared, setShared] = useState([]);
    const [myDoc, setMyDoc] = useState([]);
    const [viewFolder, setViewFolder] = useState(true);
    const [viewMyDoc, setViewMyDoc] = useState(false);
    const [viewShared, setViewShared] = useState(false);

    const handleRecent = () => {
        getDataHome().then(res => {
            setRecent(res.data.recent);
        }).catch(err => {
            console.log(err);
        });
    }

    const handleShared = () => {
        getDataHome().then(res => {
            setShared(res.data.shared);
        }).catch(err => {
            console.log(err);
        });
    }

    const handleFolder = () => {
        getDataHome().then(res => {
            setFolder(res.data.folder);
        }).catch(err => {
            console.log(err);
        });
    }

    const handleMyDoc = () => {
        getDataHome().then(res => {
            setMyDoc(res.data.file);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        document.title = 'Quản lý tài liệu';
        handleRecent();
        handleFolder();
        handleShared();
        handleMyDoc();
    }, []);

    const changeFolderGird = () => {
        setViewFolder(true);
    }

    const changeFolderList = () => {
        setViewFolder(false);
    }

    const changeMyDocGird = () => {
        setViewMyDoc(true);
    }

    const changeMyDocList = () => {
        setViewMyDoc(false);
    }

    const changeSharedGird = () => {
        setViewShared(true);
    }

    const changeSharedList = () => {
        setViewShared(false);
    }

    return (
        <div>
            {/* <EditForm/> */}
            <div className='row px-3'>
                <p className='px-4' style={{ fontSize: '18px' }}><Link to={'/qltl'} style={{ textDecoration: 'none', color: '#201f1e' }}>{document.title}</Link></p>
            </div>

            {recents.length > 0 &&
                <>
                    <div className='row px-4'>
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
                    <div className='row px-2 m-0'>
                        {viewFolder ? <GridData data={folders} title={'Thư mục'} /> : <ListData data={folders} title={'Thư mục'} />}
                    </div>
                </>
            }

            {myDoc.length > 0 &&
                <>
                    <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                        <Link to={'/qltl/cua-toi'} style={{ textDecoration: 'none', fontSize: 13, color: '#201f1e' }}>Xem tất cả</Link>
                        <Button onClick={changeMyDocGird} className='mx-2' style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                        <Button onClick={changeMyDocList} style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
                    </div>
                    <div className='row px-2'>
                        {viewMyDoc ? <GridData data={myDoc} title={'Tài liệu của tôi'} /> : <ListDataFile data={myDoc} title={'Tài liệu của tôi'} />}
                    </div>
                </>
            }

            {shared.length > 0 &&
                <>
                    <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                        <Link to={'/qltl/chia-se'} style={{ textDecoration: 'none', fontSize: 13, color: '#201f1e' }}>Xem tất cả</Link>
                        <Button onClick={changeSharedGird} className='mx-2' style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                        <Button onClick={changeSharedList} style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
                    </div>

                    <div className='row px-2'>
                        {viewShared ? <GridData data={shared} title={'Được chia sẻ'} /> : <ListDataFile key={'2'} data={shared} title={'Được chia sẻ'} />}
                    </div>
                </>
            }
        </div>
    );
};

export default Home;