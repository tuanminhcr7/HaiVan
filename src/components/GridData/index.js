import xlsx from '../../images/icon/xlsx.svg';
import csv from '../../images/icon/csv.svg';
import txt from '../../images/icon/txt.svg';
import docx from '../../images/icon/docx.svg';
import pdf from '../../images/icon/pdf.svg';
import ppt from '../../images/icon/ppt.svg';
import pptx from '../../images/icon/pptx.svg';
import folder from '../../images/icon/folder.svg';
import edit from '../../images/icon/edit.svg';
import share from '../../images/icon/share.svg';
import move from '../../images/icon/move.svg';
import download from '../../images/icon/download.svg';
import del from '../../images/icon/delete.svg';
import './style.css';

import { Button, Collapse, message, Tooltip } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Time from 'react-time-format';
import { downloadFile, removeFile } from '../../api/files';
import fileDownload from 'js-file-download';
import EditForm from '../EditForm';
import { editFolder, removeFolder } from '../../api/folders';
import DeleteFolderForm from '../DeleteFolderForm';
import DeleteFileForm from '../DeleteFileForm';
import MoveForm from '../MoveForm';
import ShareForm from '../ShareForm';

const { Panel } = Collapse;

const GridData = ({ data, title }) => {

    const renderImage = (type) => {
        switch (type) {
            case 'xlsx':
                return (
                    <img style={{ marginRight: 5 }} src={xlsx} />
                );
                break;
            case 'csv':
                return (
                    <img style={{ marginRight: 5 }} src={csv} />
                );
                break;
            case 'txt':
                return (
                    <img style={{ marginRight: 5 }} src={txt} />
                );
                break;
            case 'docx':
                return (
                    <img style={{ marginRight: 5 }} src={docx} />
                );
                break;
            case 'pdf':
                return (
                    <img style={{ marginRight: 5 }} src={pdf} />
                );
                break;
            case 'ppt':
                return (
                    <img style={{ marginRight: 5 }} src={ppt} />
                );
                break;
            case 'pptx':
                return (
                    <img style={{ marginRight: 5 }} src={pptx} />
                );
                break;
            case 'folder':
                return (
                    <img style={{ marginRight: 5 }} src={folder} />
                );
                break;
            default:
                break;
        }
    }

    const buttonStyle = {
        padding: 0,
        height: 23,
        width: 23,
        border: 'none',
        background: 'transparent'
    };

    const imgStyle = {
        padding: 0,
        height: 23,
        width: 23,
        border: 'none',
        background: 'transparent', cursor: 'default'
    };

    const [dataFolder, setDataFolder] = useState(data);
    const [folderChoose, setFolderChoose] = useState();
    const [isModalEditFolder, setIsModalEditFolder] = useState(false);
    const [isModalDeleteFile, setIsModalDeleteFile] = useState(false);
    const [isModalDeleteFolder, setIsModalDeleteFolder] = useState(false);
    const [fileChoose, setFileChoose] = useState();
    const [dataFile, setDataFile] = useState(data);
    const [isModalMoveFile, setIsModalMoveFile] = useState(false);
    const [idMoveFile, setIdMoveFile] = useState();
    const [isModalShareFile, setIsModalShareFile] = useState(false);
    const [isModalShareFolder, setIsModalShareFolder] = useState(false);

    const showModalEditFolder = () => {
        setIsModalEditFolder(true);
    };

    const showModalDeleteFile = () => {
        setIsModalDeleteFile(true);
    };

    const showModalDeleteFolder = () => {
        setIsModalDeleteFolder(true);
    };

    const showModalMoveFile = () => {
        setIsModalMoveFile(true);
    };

    const showModalShareFile = () => {
        setIsModalShareFile(true);
    }

    const showModalShareFolder = () => {
        setIsModalShareFolder(true);
    }

    const handleCancel = () => {
        setIsModalEditFolder(false);
        setIsModalDeleteFile(false);
        setIsModalDeleteFolder(false);
        setIsModalMoveFile(false);
        setIsModalShareFile(false);
        setIsModalShareFolder(false);
    };

    const handleRemoveFile = (id) => {
        setDataFile(
            dataFile.filter(item => item.id != id)
        );
    }

    const handleRemoveFolder = (id) => {
        setDataFolder(
            dataFolder.filter(item => item.id != id)
        );
    }

    const editFolderChoose = (id, name, description) => {
        setDataFolder(dataFolder.map(item => {
            if (item.id == id) {
                return { ...item, name: name, description: description };
            }
            return item;
        }));
        editFolder({ id: id, name: name, description: description }).then(res => {
            setIsModalEditFolder(false);
            message.success('Cập nhật thành công');
        }).catch(err => {
            let findFolder = data.find(item => item.id == id)
            setDataFolder(dataFolder.map(item => {
                if (item.id == id) {
                    return findFolder;
                }
                return item;
            }));
        });
    }

    const deleteFileChoose = (id) => {
        setDataFile(dataFile.map(item => {
            if (item.id == id) {
                return { ...item, id: id };
            }
            return item;
        }));
        removeFile(id).then(res => {
            setIsModalDeleteFile(false);
            message.success('Xóa file thành công');
            handleRemoveFile(id);
        }).catch(err => {

        });
    }

    const deleteFolderChoose = (id) => {
        setDataFolder(dataFolder.map(item => {
            if (item.id == id) {
                return { ...item, id: id };
            }
            return item;
        }));
        removeFolder(id).then(res => {
            setIsModalDeleteFolder(false);
            message.success('Xóa thư mục thành công');
            handleRemoveFolder(id);
        }).catch(err => {

        });
    }

    useEffect(() => {
        setDataFolder(data);
        setDataFile(data);
    }, data);

    return (
        <>
            <Collapse
                defaultActiveKey={'1'}
                style={{ border: 'none', backgroundColor: '#fff' }}
            >
                <Panel
                    style={{ border: 'none', fontSize: '18px' }}
                    header={title}
                    key="1"
                >
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <>
                            {(title == 'Được chia sẻ' || title == 'Tệp' || title == 'Tài liệu của tôi') ?
                                <>
                                    {dataFile && dataFile.map((item) =>
                                        <div className='data-file'>
                                            <Link
                                                target={'_blank'}
                                                to={`/qltl/${item.id}/xem-tai-lieu-${item.slug}`}
                                                className='px-2 link-file-grid'
                                                style={{ color: '#201f1e', textDecoration: 'none' }}
                                                title={item.name}
                                            >
                                                <div className='file'>
                                                    <div style={{ padding: '5px 15px' }}>
                                                        {renderImage(item.type)}
                                                    </div>
                                                    <p style={{ fontSize: '15px', marginBottom: '0', textAlign: 'center', maxWidth: 100 }}>{item.name.length > 10 ? `${item.name.substring(0, 10)}...` : item.name}</p>
                                                    <small className='px-4' style={{ fontSize: 'small', color: '#605e5c' }}>
                                                        <Time value={new Date(item.created_at)} format="DD-MM-YYYY" />
                                                    </small>
                                                </div>
                                            </Link>
                                            <div className='tool-file-grid'>
                                                <Tooltip title={'Chia sẻ'}>
                                                    <Button onClick={() => {
                                                        showModalShareFile();
                                                        setFileChoose(item);
                                                    }} style={buttonStyle}><img style={imgStyle} src={share} /></Button>
                                                </Tooltip>
                                                <Tooltip title={'Di chuyển'}>
                                                    <Button
                                                        onClick={() => {
                                                            showModalMoveFile();
                                                            setIdMoveFile(item.folder_id);
                                                        }}
                                                        style={buttonStyle}
                                                    >
                                                        <img style={imgStyle} src={move} />
                                                    </Button>
                                                </Tooltip>
                                                <Tooltip title={'Tải xuống'}>
                                                    <Button
                                                        onClick={() => {
                                                            downloadFile(item.id).then(res => {
                                                                fileDownload(res.data, `${item.name}.${item.type}`);
                                                                message.success('Tệp đã được tải xuống');
                                                            }).catch(err => {
                                                                console.log(err);
                                                            })
                                                        }}
                                                        style={buttonStyle}
                                                    >
                                                        <img style={imgStyle} src={download} />
                                                    </Button>
                                                </Tooltip>
                                                <Tooltip title={'Xóa'}>
                                                    <Button
                                                        onClick={() => {
                                                            showModalDeleteFile();
                                                            setFileChoose(item);
                                                        }}
                                                        style={buttonStyle}
                                                    >
                                                        <img style={imgStyle} src={del} />
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    )}
                                </> :
                                <>
                                    {dataFolder && dataFolder.map((item) =>
                                        <div className='data-folder'>
                                            <Link to={`/qltl/${item.id}/tai-lieu-${item.slug}`} className='px-2 link-folder-grid' style={{ color: '#201f1e', textDecoration: 'none' }} title={item.name}>
                                                <div className='file'>
                                                    <div style={{ padding: '5px 15px' }}>
                                                        {renderImage(item.type)}
                                                    </div>
                                                    <p style={{ fontSize: 15, marginBottom: '0', textAlign: 'center', maxWidth: 100 }}>{item.name.length > 13 ? `${item.name.substring(0, 13)}...` : item.name}</p>
                                                    <small className='px-4' style={{ fontSize: 'small', color: '#605e5c' }}>
                                                        <Time value={new Date(item.created_at)} format="DD-MM-YYYY" />
                                                    </small>
                                                </div>
                                            </Link>
                                            <div className='tool-folder-grid'>
                                                <Tooltip title={'Xóa'}>
                                                    <Button
                                                        onClick={() => {
                                                            showModalDeleteFolder();
                                                            setFolderChoose(item);
                                                        }}
                                                        style={buttonStyle}
                                                    >
                                                        <img style={imgStyle} src={del} />
                                                    </Button>
                                                </Tooltip>
                                                <Tooltip title={'Đổi tên'}>
                                                    <Button
                                                        onClick={() => {
                                                            showModalEditFolder();
                                                            setFolderChoose(item);
                                                        }}
                                                        style={buttonStyle}
                                                    >
                                                        <img style={imgStyle} src={edit} />
                                                    </Button>
                                                </Tooltip>
                                                <Tooltip title={'Chia sẻ'}>
                                                    <Button onClick={() => {
                                                        showModalShareFolder();
                                                        setFolderChoose(item);
                                                    }} style={buttonStyle}><img style={imgStyle} src={share} /></Button>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    )}

                                </>
                            }
                        </>
                    </div>
                </Panel >
            </Collapse >
            <EditForm show={isModalEditFolder} showData={folderChoose} cancel={handleCancel} save={editFolderChoose} />

            {isModalDeleteFolder &&
                <DeleteFolderForm save={deleteFolderChoose} show={isModalDeleteFolder} showData={folderChoose} cancel={handleCancel} />
            }

            {isModalDeleteFile &&
                <DeleteFileForm save={deleteFileChoose} show={isModalDeleteFile} showData={fileChoose} cancel={handleCancel} />
            }

            {isModalMoveFile &&
                <MoveForm id={idMoveFile} show={isModalMoveFile} cancle={handleCancel} />
            }

            {isModalShareFile &&
                <ShareForm show={isModalShareFile} showData={fileChoose} cancel={handleCancel} />
            }

            {isModalShareFolder &&
                <ShareForm show={isModalShareFolder} showData={folderChoose} cancel={handleCancel} />
            }
        </>

    );
}

export default GridData;