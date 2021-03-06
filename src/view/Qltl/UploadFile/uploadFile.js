import { getFolder } from '../../../api/folders.js';
import { uploadFile } from '../../../api/files.js';

import { useEffect, useState } from "react";
import { Form, Input, Button, Radio, Cascader, notification, message } from 'antd';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';



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
        // console.log(value, selectedOptions);
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
                setSelectedFile(res.data.data);
                message.success('File successfully uploaded');
            }).catch(err => {
                console.log(err);
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        document.title = "T???i t???p";
        getListFolder();
    }, []);

    return (
        <>
            <div className="container p-5">
                <div className="p-5" style={{ border: '1px solid #ddd' }}>
                    <div className="row mx-5 mb-3">
                        <label className="p-0"><span style={{ marginRight: 4, color: '#f00', fontSize: 18 }}>*</span>T??n t??i li???u</label>
                        {(selectedFile != null) ?
                            <Input
                                placeholder="Nh???p t??n file"
                                name="name"
                                value={location.state.files[0].name}
                                disabled={true}
                            /> :
                            <Input
                                placeholder="Nh???p t??n file"
                                name="name"
                                value={location.state.files[0].name}
                            />
                        }

                    </div>

                    <div className="row mx-5 mb-3">
                        <label className="p-0"><span style={{ marginRight: 4, color: '#f00', fontSize: 18 }}>*</span>Ch???n th?? m???c mu???n t???i t???p l??n</label><br />
                        {(selectedFile != null) ?
                            <Cascader
                                className="px-1"
                                options={renderListFolder(listFolders)}
                                onChange={onChange}
                                placeholder="Ch???n th?? m???c mu???n t???i t???p l??n"
                                changeOnSelect
                                expandTrigger='hover'
                                disabled={true}
                            /> :
                            <Cascader
                                className="px-1"
                                options={renderListFolder(listFolders)}
                                onChange={onChange}
                                placeholder="Ch???n th?? m???c mu???n t???i t???p l??n"
                                changeOnSelect
                                expandTrigger='hover'
                            />
                        }

                    </div>
                    <div className="row mx-5 mb-3">
                        <label className="p-0">M?? t???</label>
                        {(selectedFile != null) ?
                            <Input
                                placeholder="M?? t??? ng???n t???p tin"
                                name="description"
                                onChange={e => setDescription(e.target.value)}
                                disabled={true}
                            /> :
                            <Input
                                placeholder="M?? t??? ng???n t???p tin"
                                name="description"
                                onChange={e => setDescription(e.target.value)}

                            />
                        }

                    </div>
                    <div className="row mx-5 mb-3">
                        <label className="p-0">N??i l??u tr???</label>
                        {(selectedFile != null) ?
                            <Input
                                placeholder="N??i l??u tr??? b???n c???ng. V?? d???: h??m 1, h??m 2, ..."
                                name="location"
                                onChange={e => setLocationFile(e.target.value)}
                                disabled={true}
                            /> :
                            <Input
                                placeholder="N??i l??u tr??? b???n c???ng. V?? d???: h??m 1, h??m 2, ..."
                                name="location"
                                onChange={e => setLocationFile(e.target.value)}
                            />
                        }

                    </div>
                    <div className="row mx-5">
                        <div className="col-4"></div>
                        <div className="col-4" style={{ display: 'flex' }}>
                            {(selectedFile != null) ?
                                <>
                                    <Button disabled={true} onClick={saveFileUpload} style={{ backgroundColor: '#ccc', border: 'none', display: 'flex', alignItems: 'center', color: '#fff' }} type="default">L??u</Button>
                                    <Button className='mx-2' style={{ backgroundColor: '#1890ff', border: 'none', display: 'flex', alignItems: 'center', color: '#fff' }} type="default">
                                        <Link to={`/qltl/${chooseFolder[chooseFolder.length - 1].value}/tai-lieu-${slugify(chooseFolder[chooseFolder.length - 1].label)}`} style={{ textDecoration: 'none' }}>??i ?????n th?? m???c</Link>
                                    </Button>
                                    <Button className='mx-2' style={{ backgroundColor: '#1890ff', border: 'none', display: 'flex', alignItems: 'center', color: '#fff' }} type="default">
                                        <Link target={'_blank'} to={`/qltl/${selectedFile.id}/xem-tai-lieu-${selectedFile.slug}`} style={{ textDecoration: 'none' }}>Xem t??i li???u</Link>
                                    </Button>
                                </>
                                :
                                <Button onClick={saveFileUpload} style={{ backgroundColor: '#1890ff', border: 'none', display: 'flex', alignItems: 'center', color: '#fff' }} type="default">L??u</Button>
                            }
                        </div>
                        <div className="col-4"></div>
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