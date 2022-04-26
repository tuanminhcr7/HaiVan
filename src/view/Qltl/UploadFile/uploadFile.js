import { getFolder } from '../../../api/folders.js';


import { useEffect, useState } from "react";
import { Form, Input, Button, Radio, Cascader } from 'antd';
import { useLocation } from "react-router";
import { uploadFile } from '../../../api/files.js';


const FormUploadFile = () => {
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

    const getListFolder = () => {
        getFolder().then((res) => {
            setListFolder(res.data.data);
        });
    }

    const onChange = (value, selectedOptions) => {
        setChooseFolder(selectedOptions);
        console.log(value, selectedOptions);
    };

    const saveFileUpload = () => {

        // const formData = new FormData();
        
        // // formData.append('files');
        // formData.append('name', location.state.files[0].name);
        // formData.append('description', description);
        // formData.append('storage', locationFile);
        // formData.append('folder_id', chooseFolder[chooseFolder.length - 1].value);
        
        
        const formData = {
            'name': location.state.files[0].name,
            'folder_id':chooseFolder[chooseFolder.length-1].value,
            'description': description,
            'storage': locationFile
        }
        console.log(formData);

        uploadFile(formData, {headers: {
            'content-type': 'multipart/form-data',
          }}).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
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
                </div>
            </div>

        </>
    );

}

export default FormUploadFile;