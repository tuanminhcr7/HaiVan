import '../Qltl.css';
import FolderRecent from '../../../components/FolderRecent';
import GridDataFile from '../../../components/GridDataFile';
import { getRecentHistory } from '../../../api/files';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { InsertRowAboveOutlined, UnorderedListOutlined } from '@ant-design/icons';


const RecentHistory = () => {

    const [recents, setRecent] = useState([]);
    const [viewFile, setViewFile] = useState(false);

    const handleRecent = () => {
        getRecentHistory().then(res => {
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