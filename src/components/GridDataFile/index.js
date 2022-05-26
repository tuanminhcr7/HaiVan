import xlsx from '../../images/icon/xlsx.svg';
import csv from '../../images/icon/csv.svg';
import txt from '../../images/icon/txt.svg';
import docx from '../../images/icon/docx.svg';
import pdf from '../../images/icon/pdf.svg';
import ppt from '../../images/icon/ppt.svg';
import pptx from '../../images/icon/pptx.svg';
import folder from '../../images/icon/folder.svg';
import share from '../../images/icon/share.svg';
import move from '../../images/icon/move.svg';
import download from '../../images/icon/download.svg';
import del from '../../images/icon/delete.svg';
import './style.css';
import MoveForm from '../MoveForm';
import DeleteFileForm from '../DeleteFileForm';
import { downloadFile, removeFile } from '../../api/files';

import { Button, Collapse, message, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Time from 'react-time-format';
import fileDownload from 'js-file-download';
import ShareForm from '../ShareForm';


const { Panel } = Collapse;

const GridDataFile = ({ data, tool }) => {
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

    const [fileChoose, setFileChoose] = useState();
    const [dataFile, setDataFile] = useState(data);
    const [isModalDeleteFile, setIsModalDeleteFile] = useState(false);
    const [isModalMoveFile, setIsModalMoveFile] = useState(false);
    const [idMoveFile, setIdMoveFile] = useState();
    const [isModalShareFile, setIsModalShareFile] = useState();

    const showModalDeleteFile = () => {
        setIsModalDeleteFile(true);
    };

    const showModalMoveFile = () => {
        setIsModalMoveFile(true);
    };

    const showModalShareFile = () => {
        setIsModalShareFile(true);
    }

    const handleCancel = () => {
        setIsModalDeleteFile(false);
        setIsModalMoveFile(false);
        setIsModalShareFile(false);
    };

    const handleRemoveFile = (id) => {
        setDataFile(
            dataFile.filter(item => item.id != id)
        );
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

    useEffect(() => {
        setDataFile(data);
    }, data);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {dataFile && dataFile.map((item3) =>
                <div className='data-file'>
                    {tool ?
                        <Link to={`/qltl/${item3.id}/xem-tai-lieu-${item3.slug}`} target={'_blank'} className='px-2 link-folder' style={{ color: '#201f1e' }} title={item3.name}>
                            <div>
                                <div style={{ padding: '5px 15px' }}>
                                    {renderImage(item3.type)}
                                </div>
                                <p style={{ fontSize: '15px', marginBottom: '0', textAlign: 'center', maxWidth: 100 }}>{item3.name.length > 12 ? `${item3.name.substring(0, 12)}...` : item3.name}</p>
                                <small className='px-3' style={{ fontSize: 'small', color: '#605e5c' }}>
                                    <Time value={new Date(item3.created_at)} format="DD-MM-YYYY" />
                                </small>
                            </div>
                        </Link> :
                        <Link to={`/qltl/trash`} className='px-2 link-folder' style={{ color: '#201f1e' }} title={item3.name}>
                            <div>
                                <div style={{ padding: '5px 15px' }}>
                                    {renderImage(item3.type)}
                                </div>
                                <p style={{ fontSize: '15px', marginBottom: '0', textAlign: 'center', maxWidth: 100 }}>{item3.name.length > 12 ? `${item3.name.substring(0, 12)}...` : item3.name}</p>
                                <small className='px-3' style={{ fontSize: 'small', color: '#605e5c' }}>
                                    <Time value={new Date(item3.created_at)} format="DD-MM-YYYY" />
                                </small>
                            </div>
                        </Link>
                    }

                    {tool &&
                        <div className='tool-file-grid'>
                            <Tooltip title={'Chia sẻ'}>
                                <Button onClick={() => {
                                    showModalShareFile();
                                    setFileChoose(item3);
                                }} style={buttonStyle}><img style={imgStyle} src={share} /></Button>
                            </Tooltip>
                            <Tooltip title={'Di chuyển'}>
                                <Button
                                    onClick={() => {
                                        showModalMoveFile();
                                        setIdMoveFile(item3.folder_id);
                                    }}
                                    style={buttonStyle}
                                >
                                    <img style={imgStyle} src={move} />
                                </Button>
                            </Tooltip>
                            <Tooltip title={'Tải xuống'}>
                                <Button
                                    onClick={() => {
                                        downloadFile(item3.id).then(res => {
                                            fileDownload(res.data, `${item3.name}.${item3.type}`);
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
                                <Button onClick={() => {
                                    showModalDeleteFile();
                                    setFileChoose(item3);
                                }} style={buttonStyle}><img style={imgStyle} src={del} /></Button>
                            </Tooltip>
                        </div>
                    }
                </div>
            )}

            {isModalDeleteFile &&
                <DeleteFileForm show={isModalDeleteFile} cancel={handleCancel} showData={fileChoose} save={deleteFileChoose} />
            }

            {isModalMoveFile &&
                <MoveForm id={idMoveFile} show={isModalMoveFile} cancle={handleCancel} />
            }

            {isModalShareFile &&
                <ShareForm show={isModalShareFile} showData={fileChoose} cancel={handleCancel} />
            }
        </div>
    );
}

export default GridDataFile;