import folder from '../../images/icon/folder.svg';
import './style.css';

import { FolderAddOutlined, LeftOutlined } from "@ant-design/icons";
import { Modal, Row, Col, Button, Input, message } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { addFolder, getFolderDetail } from '../../api/folders';
import { moveFile } from '../../api/files';


const MoveForm = ({ show, cancle, id, fileChoosed }) => {

    const [file, setFile] = useState();
    const [idFileChoosed, setIdFileChoosed] = useState(fileChoosed?.id);
    const [isCreateFolder, setIsCreateFolder] = useState(false);
    const [folderSelected, setFolderSelected] = useState(file?.bread_crumb[file?.bread_crumb.length - 1].id);
    const [stateFileName, setStateFileName] = useState();
    const [stateFileDescription, setStateFileDescription] = useState();

    const showCreateFolder = () => {
        setIsCreateFolder(true);
    }

    const hideCreateFolder = () => {
        setIsCreateFolder(false);
    }

    const getDataFile = (id) => {
        getFolderDetail(id).then(res => {
            setFile(res.data.data);
            setFolderSelected(
                res.data.data.bread_crumb[res.data.data.bread_crumb.length - 1].id
            );
        }).catch(err => {
            console.log(err);
        });
    }

    const handleBack = (idFolder) => {
        getDataFile(idFolder);
        setFolderSelected(idFolder);
    }

    const handleMove = (idFile, idFolder) => {
        moveFile({
            id: idFile,
            folder_id: idFolder
        }).then(res => {
            console.log(res);
            message.success('File successfully moved');
        }).catch(err => {
            console.log(err);
        });
    }

    const handleChangeName = (value) => {
        setStateFileName(value.target.value);
    }

    const handleChangeDescription = (value) => {
        setStateFileDescription(value.target.value);
    }

    const handleAddFolder = (folderId, name, description) => {
        addFolder({
            folder_id: folderId,
            name: name,
            description: description
        }).then(res => {
            setIsCreateFolder(false);
            message.success('Tạo folder thành công');
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        getDataFile(id);
        setFile(file);
    }, [id], [file]);


    return (
        <Modal
            title={
                <Row>
                    <Col>
                        <div style={{ width: 35 }}>
                            <div
                                style={{
                                    backgroundColor: `${file?.bread_crumb.length > 1 ? '#f3f2f1' : '#fff'}`,
                                    width: 30,
                                    height: 30,
                                    textAlign: 'center',
                                    borderRadius: '50%',
                                    cursor: `${file?.bread_crumb.length > 1 ? 'pointer' : 'context-menu'}`,
                                }}
                            >
                                {file?.bread_crumb.length > 1 &&
                                    <LeftOutlined
                                        onClick={() => {
                                            handleBack(file?.bread_crumb[file?.bread_crumb.length - 2].id);
                                        }}
                                    />
                                }
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginLeft: 10 }}>
                        {file &&
                            <p style={{ padding: 5 }}>{file?.bread_crumb[file?.bread_crumb.length - 1].name}</p>
                        }
                    </Col>
                </Row>
            }
            visible={show}
            onCancel={cancle}
            footer={
                <Row>
                    <Col style={{ width: '50%', textAlign: 'left' }}>
                        <FolderAddOutlined
                            style={{ fontSize: 25, color: '#0a7dd6' }}
                            onClick={() => {
                                showCreateFolder();
                            }}
                        />
                        <Modal
                            title="Tạo folder"
                            visible={isCreateFolder}
                            onCancel={hideCreateFolder}
                            okText="Tạo"
                            cancelText="Hủy"
                            onOk={() => {
                                handleAddFolder(folderSelected, stateFileName, stateFileDescription)
                            }}
                        >
                            <Row>
                                <span>Tên (*)</span>
                                <Input defaultValue={''} onChange={handleChangeName} placeholder="Tên folder" />
                            </Row>
                            <Row className="mt-2">
                                <span>Mô tả</span>
                                <Input defaultValue={''} onChange={handleChangeDescription} placeholder="Mô tả" />
                            </Row>
                        </Modal>

                    </Col>
                    <Col style={{ width: '50%' }}>
                        <Button
                            onClick={() => {
                                handleMove(idFileChoosed, folderSelected);
                            }}
                            type="primary"
                            style={{ border: 'none' }}
                        >
                            Di chuyển đến đây
                        </Button>
                    </Col>
                </Row>
            }
        >
            <div style={{ height: 150 }}>
                {file &&
                    file.folders.map(item => {
                        return (
                            <div
                                onDoubleClick={() => {
                                    getDataFile(item.id);
                                }}
                                className="row px-5"
                            >
                                <span
                                    className='folder'
                                    style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        padding: '2px 5px' 
                                    }}
                                >
                                    <img src={folder} width={20} height={20} />&nbsp;&nbsp;
                                    <span>{item.name}</span>
                                </span>
                            </div>
                        );
                    })
                }
            </div>
        </Modal>

    );
}

export default MoveForm;