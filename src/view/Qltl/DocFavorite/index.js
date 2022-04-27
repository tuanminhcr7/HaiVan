import '../Qltl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FolderDocFavorite from '../../../components/FolderDocFavorite';
import GridDataFile from '../../../components/GridDataFile';
import { docFavorite } from '../../../api/files';

import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { InsertRowAboveOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button } from 'antd';


const DocFavorite = () => {

    const [docFavorites, setDocFavorite] = useState([]);
    const [viewFile, setViewFile] = useState(false);

    const handleDocFavorite = () => {
        docFavorite().then(res => {
            setDocFavorite(res.data.data);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        document.title = 'Tài liệu yêu thích';
        handleDocFavorite();
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
                    <Link to={'/qltl/yeu-thich'} style={{ textDecoration: 'none', color: '#201f1e' }}>Yêu thích</Link>
                </p>
            </div>

            <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                <Button onClick={changeFileGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                <Button onClick={changeFileList} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
            </div>
            {docFavorites && 
                <div className='row px-3 m-0'>
                    {viewFile ? <GridDataFile data={docFavorites} /> : <FolderDocFavorite data={docFavorites} />}
                </div>
            }
        </div>
    );
}

export default DocFavorite;