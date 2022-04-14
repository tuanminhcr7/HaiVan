import GridData from "../../../components/GridData";
import ListDataFile from "../../../components/ListDataFile";

import { useEffect, useState } from "react";
import { Breadcrumb } from 'antd';
import axios from "axios";
import { useParams } from "react-router"; 
import BreadCrumbRender from "../../../components/BreadCrumbRender";


const DetailFolder = () => {
    const [folders, setFolders] = useState();
    const [files, setFiles] = useState();
    const [breadCrumb, setBreadCrumb] = useState();

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
    console.log(id);

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

    return (
        <div>
            <div className="row px-5">
                <BreadCrumbRender data={breadCrumb} separator=">"/>
            </div>

            <div className='row px-4'>
                <GridData data={folders} />
            </div>            

            <div className='row px-4'>     
                <ListDataFile data={files} />
            </div>
        </div>
    );
}

export default DetailFolder;