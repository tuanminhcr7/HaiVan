import { getFolder } from '../../../api/folders.js';
import { uploadFile } from '../../../api/files.js';

import { useEffect, useState } from "react";
import { Form, Input, Button, Radio, Cascader } from 'antd';
import { useLocation } from "react-router";



const FormUploadFile = (props) => {
    const location = useLocation();

    const renderListFolder = (list) => {
        return list.map((items) => {
            return {
                value: items.id,
                label: items.name,
                children: renderListFolder(items.children)
            };
        });
    }

    const [listFolders, setListFolder] = useState([]);
    const [description, setDescription] = useState('');
    const [locationFile, setLocationFile] = useState('');
    const [chooseFolder, setChooseFolder] = useState();
    const [selectedFile, setSelectedFile] = useState(null);

    const getListFolder = () => {
        getFolder().then((res) => {
            setListFolder(res.data.data);
        });
    }

    const onChange = (value, selectedOptions) => {
        setChooseFolder(selectedOptions);
        console.log(value, selectedOptions);
    };

    const saveFileUpload = (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('files', location.state.files[0]);
        formData.append('name', location.state.files[0].name);
        formData.append('description', description);
        formData.append('storage', locationFile);
        formData.append('folder_id', chooseFolder[chooseFolder.length - 1].value);

        try {
            uploadFile(formData, {
                headers: {
                    'Content-Type': location.state.files.type,
                }
            }).then(res => {
                const notification = document.getElementsByClassName("notification");
                notification[0].innerHTML = "Tải tệp lên thành công";
            }).catch(err => {
                console.log(err);
            });
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        document.title = "Tải tệp";
        getListFolder();
    }, []);

    return (
        <>
            <div className="container p-5">
                <div className="p-5" style={{ border: '1px solid #ddd' }}>
                    <div className="row mx-5 mb-3">
                        <label className="p-0"><span style={{ marginRight: 4, color: '#f00', fontSize: 18 }}>*</span>Tên tài liệu</label>
                        <Input
                            placeholder="Nhập tên file"
                            name="name"
                            value={location.state.files[0].name}
                        />
                    </div>

                    <div className="row mx-5 mb-3">
                        <label className="p-0"><span style={{ marginRight: 4, color: '#f00', fontSize: 18 }}>*</span>Chọn thư mục muốn tải tệp lên</label><br />
                        <Cascader
                            className="px-1"
                            options={renderListFolder(listFolders)}
                            onChange={onChange}
                            placeholder="Chọn thư mục muốn tải tệp lên"
                            changeOnSelect
                            expandTrigger='hover'
                        />
                    </div>
                    <div className="row mx-5 mb-3">
                        <label className="p-0">Mô tả</label>
                        <Input
                            placeholder="Mô tả ngắn tệp tin"
                            name="description"
                            onChange={e => setDescription(e.target.value)}
                      
                        />
                    </div>
                    <div className="row mx-5 mb-3">
                        <label className="p-0">Nơi lưu trữ</label>
                        <Input
                            placeholder="Nơi lưu trữ bản cứng. Ví dụ: hòm 1, hòm 2, ..."
                            name="location"
                            onChange={e => setLocationFile(e.target.value)}
                        />
                    </div>
                    <div className="row mx-5">
                        <div className="col-5"></div>
                        <div className="col-2"><Button onClick={saveFileUpload} style={{ backgroundColor: '#1890ff', border: 'none', display: 'flex', alignItems: 'center', color: '#fff' }} type="default">Lưu</Button></div>
                        <div className="col-5"></div>
                    </div>
                    <div className="row mx-5">
                        <span className='notification text-success'></span>
                    </div>
                </div>
            </div>

        </>
    );

}

export default FormUploadFile;