import '../Qltl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListDataFile from '../../../components/ListDataFile';
import GridData from '../../../components/GridData';
import ListData from '../../../components/ListData'
import { getMyDoc } from '../../../api/files';

import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { InsertRowAboveOutlined, UnorderedListOutlined } from '@ant-design/icons';


const MyDoc = () => {

    const [myFiles, setMyFile] = useState([]);
    const [myFolders, setMyFolder] = useState([]);
    const [viewFolder, setViewFolder] = useState(true);
    const [viewFile, setViewFile] = useState(false);

    const handleMyDoc = () => {
        getMyDoc().then(res => {
            setMyFile(res.data.data.file);
            setMyFolder(res.data.data.folder);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        document.title = "Tài liệu của tôi";
        handleMyDoc();
    }, []);

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
            <div className='row px-1'>
                <p className='px-5' style={{ fontSize: '18px' }}>
                    <Link to={'/qltl'} style={{ textDecoration: 'none', color: '#8c8c8c' }}>Quản lý tài liệu</Link>
                    {' > '}
                    <Link to={'/qltl/cua-toi'} style={{ textDecoration: 'none', color: '#201f1e' }}>Tài liệu của tôi</Link>
                </p>
            </div>

            <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                <Button onClick={changeFolderGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                <Button onClick={changeFolderList} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
            </div>
            {myFolders &&
                <div className='row px-4'>
                    {viewFolder ? <GridData title={'Thư mục'} data={myFolders} /> : <ListData title={'Thư mục'} data={myFolders} />}    
                </div>
            }

            <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                <Button onClick={changeFileGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                <Button onClick={changeFileList} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
            </div>
            {myFiles &&
                <div className='row px-4'>
                    {viewFile ? <GridData title={'Tệp'} data={myFiles} /> : <ListDataFile data={myFiles} title={'Tệp'} />}    
                </div>
            }

        </div>
    );
}

export default MyDoc;