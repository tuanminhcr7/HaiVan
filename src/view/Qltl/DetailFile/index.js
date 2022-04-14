import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BreadCrumbRender from "../../../components/BreadCrumbRender";



const DetailFile = () => {
    const [file, setFile] = useState();
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

    const {id} = useParams();

    const handleBreadCrumb = () => {
        axios.get(`https://dev.api.qlnb.haivanexpress.vn/api/files/${id}`, myHeaders).then(res => {
            console.log(res.data.data.breadCrumb);
            setBreadCrumb(res.data.data.breadCrumb);
        }).catch(err => {
            console.log(err);
        })
    }

    const handleDetailFile = () => {
        axios.get(`https://dev.api.qlnb.haivanexpress.vn/api/get-share-file/${id}`, myHeaders).then(res => {
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        document.title = 'Chi tiết tệp';
        handleBreadCrumb();
        handleDetailFile();
    }, [id]);

    return (
        <div>
            <div className="row px-5">
                <BreadCrumbRender data={breadCrumb} separator=">"/>
            </div>
            
            <div className="row px-5">
                
            </div>
        </div>
    );
}

export default DetailFile;