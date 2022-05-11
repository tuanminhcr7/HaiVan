import xlsx from '../../images/icon/xlsx.svg';
import csv from '../../images/icon/csv.svg';
import txt from '../../images/icon/txt.svg';
import docx from '../../images/icon/docx.svg';
import pdf from '../../images/icon/pdf.svg';
import ppt from '../../images/icon/ppt.svg';
import pptx from '../../images/icon/pptx.svg';
import edit from '../../images/icon/edit.svg';
import share from '../../images/icon/share.svg';
import move from '../../images/icon/move.svg';
import download from '../../images/icon/download.svg';
import del from '../../images/icon/delete.svg';
import favorite from '../../images/icon/favorite.svg';
import favorited from '../../images/icon/favorited.svg';

import { FileOutlined } from "@ant-design/icons";
import { Button, message, Table, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Time from 'react-time-format';
import { downloadFile, editFile, removeFile, updateFavorite } from '../../api/files';
import fileDownload from 'js-file-download';
import EditForm from '../EditForm';
import DeleteForm from '../DeleteForm';


const FolderDocFavorite = ({ data }) => {
    const renderImage = (type) => {
        switch (type) {
            case 'xlsx':
                return (
                    <img height={25} width={25} style={{ marginRight: 5 }} src={xlsx} />
                );
                break;
            case 'csv':
                return (
                    <img height={25} width={25} style={{ marginRight: 5 }} src={csv} />
                );
                break;
            case 'txt':
                return (
                    <img height={25} width={25} style={{ marginRight: 5 }} src={txt} />
                );
                break;
            case 'docx':
                return (
                    <img height={25} width={25} style={{ marginRight: 5 }} src={docx} />
                );
                break;
            case 'pdf':
                return (
                    <img height={25} width={25} style={{ marginRight: 5 }} src={pdf} />
                );
                break;
            case 'ppt':
                return (
                    <img height={25} width={25} style={{ marginRight: 5 }} src={ppt} />
                );
                break;
            case 'pptx':
                return (
                    <img height={25} width={25} style={{ marginRight: 5 }} src={pptx} />
                );
                break;
            default:
                break;
        }
    }

    const [dataFile, setDataFile] = useState(data);
    const [statusFavorite, setStatusFavorite] = useState();
    const [idFavorite, setIdFavorite] = useState();
    const [fileChoose, setFileChoose] = useState();
    const [isModalEditFile, setIsModalEditFile] = useState(false);
    const [isModalDeleteFile, setIsModalDeleteFile] = useState(false);

    const showModalEditFile = () => {
        setIsModalEditFile(true);
    };

    const showModalDeleteFile = () => {
        setIsModalDeleteFile(true);
    };

    const handleCancel = () => {
        setIsModalEditFile(false);
        setIsModalDeleteFile(false);
    };

    const buttonStyle = {
        padding: 0,
        height: 25,
        width: 25,
        border: 'none',
        background: 'transparent'
    }

    const imgStyle = {
        margin: 0,
        padding: 0,
        marginBottom: 6,
        width: '100%',
        height: '100%'
    }

    const columns = [
        {
            title: () => {
                return <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FileOutlined style={{ fontSize: 18, color: '#605e5c' }} />
                    <p className="mx-2" style={{ margin: '0', paddingTop: 5 }}>Tên</p>
                </div>
            },
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <div className='data-file' style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', width: 450 }}>
                {renderImage(record.type)}
                <Link to={`/qltl/${record.id}/xem-tai-lieu-${record.slug}`} target={'_blank'} style={{ fontWeight: 'bold', fontSize: 15, fontFamily: 'Roboto', textDecoration: 'none', color: '#000' }}>{text}</Link>
                <div className='button-tool'>
                    <Tooltip style={{ paddingLeft: 50 }} title={'Chỉnh sửa'}>
                        <Button onClick={() => {
                            showModalEditFile();
                            setFileChoose(record);
                        }} style={buttonStyle}><img style={imgStyle} src={edit} /></Button>
                    </Tooltip>
                    <Tooltip title={'Chia sẻ'}>
                        <Button style={buttonStyle}><img style={imgStyle} src={share} /></Button>
                    </Tooltip>
                    <Tooltip title={'Di chuyển'}>
                        <Button style={buttonStyle}><img style={imgStyle} src={move} /></Button>
                    </Tooltip>
                    <Tooltip title={'Tải xuống'}>
                        <Button onClick={() => {

                            downloadFile(record.id).then(res => {
                                fileDownload(res.data, `${record.name}.${record.type}`);
                                message.success('Tệp đã được tải xuống');
                            }).catch(err => {
                                console.log(err);
                            })
                        }} style={buttonStyle}><img style={imgStyle} src={download} /></Button>
                    </Tooltip>
                    <Tooltip title={'Xóa'}>
                        <Button onClick={() => {
                            showModalDeleteFile();
                            setFileChoose(record);
                        }} style={buttonStyle}><img style={imgStyle} src={del} /></Button>
                    </Tooltip>
                    <Tooltip title={(record.favorite == 1) ? 'Bỏ yêu thích' : 'Yêu thích'}>
                        <Button onClick={() => {
                            setStatusFavorite(!record.favorite);
                            updateFavorite(record.id).then(res => {
                                console.log(res);
                                record.id = res.data.data.id;
                                setIdFavorite(record.id);
                                record.favorite = res.data.data.favorite;
                                setStatusFavorite(record.favorite);
                            }).catch(err => {
                                setStatusFavorite(record.favorite);
                            });
                        }} style={buttonStyle}><img style={imgStyle} src={(record.favorite == 1) ? favorited : favorite} /></Button>
                    </Tooltip>
                </div>
            </div>
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            render: (text, record) => <small style={{ margin: 0 }}>{record.description}</small>
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (date) => <small><Time value={new Date(date)} format="DD-MM-YYYY" /></small>
        },
        {
            title: 'Chỉnh sửa',
            key: 'edit_by_name',
            render: (text, record) => <small style={{ margin: 0 }}>{record.edit_by?.name}</small>
        },
        {
            title: 'Chia sẻ',
            key: 'is_editor',
            render: (text, record) => <small style={{ margin: 0 }}>{(record.is_all_viewer == 1 && record.is_all_editor == 1) ? 'Đã chia sẻ' : 'Riêng tư'}</small>
        },
        {
            title: 'Đã chỉnh sửa',
            key: 'updated_at',
            dataIndex: 'updated_at',
            render: (date, record) => { record.edit_by && <small><Time value={new Date(date)} format="DD-MM-YYYY" /></small> }
        },

        {
            title: 'Kích cỡ',
            key: 'size',
            render: (text, record) => <small style={{ margin: 0 }}>{(record.size * 9.537 * Math.pow(10, -7)).toFixed(2)}MB</small>
        },
        {
            title: 'Sở hữu',
            key: 'create_by',
            render: (text, record) => <small>{record.create_by?.name}</small>
        },
    ];

    const editFileChoose = (id, name, description) => {
        setDataFile(dataFile.map(item => {
            if (item.id == id) {
                return { ...item, name: name, description: description };
            }
            return item;
        }));
        editFile({ id: id, name: name, description: description }).then(res => {
            setIsModalEditFile(false);
            message.success('Cập nhật file thành công');
        }).catch(err => {
            let findFile = data.find(item => item.id == id)
            setDataFile(dataFile.map(item => {
                if (item.id == id) {
                    return findFile;
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
        }).catch(err => {

        });
    }

    return (
        <>
            <Table columns={columns} dataSource={dataFile} pagination={false} />
            <EditForm show={isModalEditFile} cancel={handleCancel} showData={fileChoose} save={editFileChoose} />
            <DeleteForm show={isModalDeleteFile} cancel={handleCancel} showData={fileChoose} save={deleteFileChoose} />
        </>

    );
}

export default FolderDocFavorite;

