import GridData from "../../../components/GridData";
import ListData from '../../../components/ListData';
import ListDataFile from "../../../components/ListDataFile";
import BreadCrumbRender from "../../../components/BreadCrumbRender";
import { getFolderDetail } from "../../../api/folders";

import { useEffect, useState } from "react";
import { Button } from 'antd';
import { useParams } from "react-router";
import { InsertRowAboveOutlined, UnorderedListOutlined } from '@ant-design/icons';


const DetailFolder = () => {
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);
    const [breadCrumb, setBreadCrumb] = useState();
    const [viewFolder, setViewFolder] = useState(true);
    const [viewFile, setViewFile] = useState(false);

    const { id } = useParams();

    const handleDetail = () => {
        getFolderDetail(id).then(res => {
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
            <div className="row px-4">
                <BreadCrumbRender data={breadCrumb} fontSize={18} separator=">" />
            </div>

            {folders.length > 0 &&
                <>
                    <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                        <Button onClick={changeFolderGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                        <Button onClick={changeFolderList} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
                    </div>
                    <div className='row px-2'>
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

                    <div className='row px-3'>
                        {viewFile ? <GridData data={files} title={'Tệp'} /> : <ListDataFile data={files} title={'Tệp'} />}
                    </div>
                </>
            }
        </div>
    );
}

export default DetailFolder;