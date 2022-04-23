import { getFolder } from '../../../api/folders.js';


import { useEffect, useState } from "react";
import { Form, Input, Button, Radio, Cascader } from 'antd';
import { useLocation } from "react-router";


const FormUploadFile = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = "Tải tệp";
    }, []);

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


    const getListFolder = () => {
        getFolder().then((res) => {
            setListFolder(res.data.data);
        });
    }

    const onChange = (value, selectedOptions) => {
        console.log(value, selectedOptions);
    };

    const saveFileUpload = (id, name) => {
        console.log(id);
        console.log(name);
    }

    useEffect(() => {
        getListFolder();
    }, [])

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
                        <label className="p-0"><span style={{ marginRight: 4, color: '#f00', fontSize: 18 }}>*</span>Chọn danh mục muốn tải tệp lên</label><br />
                        <Cascader
                            className="px-1"
                            options={renderListFolder(listFolders)}
                            onChange={onChange}
                            placeholder="Chọn danh mục muốn tải tệp lên"
                            changeOnSelect
                            expandTrigger='hover'
                        />
                    </div>
                    <div className="row mx-5 mb-3">
                        <label className="p-0">Mô tả</label>
                        <Input
                            placeholder="Mô tả ngắn tệp tin"
                            name="name"
                        />
                    </div>
                    <div className="row mx-5 mb-3">
                        <label className="p-0">Nơi lưu trữ</label>
                        <Input
                            placeholder="Nơi lưu trữ bản cứng. Ví dụ: hòm 1, hòm 2, ..."
                            name="name"
                        />
                    </div>
                    <div className="row mx-5">
                        <div className="col-5"></div>
                        <div className="col-2"><Button style={{ backgroundColor: '#1890ff', border: 'none', display: 'flex', alignItems: 'center', color: '#fff' }} type="default">Lưu</Button></div>
                        <div className="col-5"></div>

                    </div>
                </div>
            </div>

        </>
    );

}

export default FormUploadFile;