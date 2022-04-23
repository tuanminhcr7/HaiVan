import GridData from "../../../components/GridData";
import ListData from '../../../components/ListData';
import ListDataFile from "../../../components/ListDataFile";
import BreadCrumbRender from "../../../components/BreadCrumbRender";

import { useEffect, useState } from "react";
import { Breadcrumb, Button } from 'antd';
import axios from "axios";
import { useParams } from "react-router";
import { InsertRowAboveOutlined, UnorderedListOutlined } from '@ant-design/icons';



const DetailFolder = () => {
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);
    const [breadCrumb, setBreadCrumb] = useState();
    const [viewFolder, setViewFolder] = useState(true);
    const [viewFile, setViewFile] = useState(false);

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

    const { id } = useParams();

    const handleDetail = () => {
        axios.get(`https://dev.api.qlnb.haivanexpress.vn/api/folders/${id}`, myHeaders).then(res => {
            setFolders(res.data.data.folders);
            setFiles(res.data.data.files);
            setBreadCrumb(res.data.data.bread_crumb);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        document.title = "Chi tiết thư mục";
        handleDetail();
    }, [id]);

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
            <div className="row px-5">
                <BreadCrumbRender data={breadCrumb} fontSize={18} separator=">" />
            </div>

            {folders.length > 0 &&
                <>
                    <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                        <Button onClick={changeFolderGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                        <Button onClick={changeFolderList} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
                    </div>
                    <div className='row px-4'>
                        {viewFolder ? <GridData data={folders} title={'Thư mục'} /> : <ListData data={folders} title={'Thư mục'} />}
                    </div>
                </>
            }

            {files.length > 0 &&
                <>
                    <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                        <Button onClick={changeFileGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                        <Button onClick={changeFileList} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
                    </div>

                    <div className='row px-4'>
                        {viewFile ? <GridData data={files} title={'Tệp'} /> : <ListDataFile data={files} title={'Tệp'} />}
                    </div>
                </>
            }
        </div>
    );
}

export default DetailFolder;