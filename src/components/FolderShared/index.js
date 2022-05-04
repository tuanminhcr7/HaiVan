import xlsx from '../../images/icon/xlsx.svg';
import csv from '../../images/icon/csv.svg';
import txt from '../../images/icon/txt.svg';
import docx from '../../images/icon/docx.svg';
import pdf from '../../images/icon/pdf.svg';
import ppt from '../../images/icon/ppt.svg';
import pptx from '../../images/icon/pptx.svg';
import './style.css';
import edit from '../../images/icon/edit.svg';
import share from '../../images/icon/share.svg';
import move from '../../images/icon/move.svg';
import download from '../../images/icon/download.svg';
import del from '../../images/icon/delete.svg';
import favorite from '../../images/icon/favorite.svg';
import favorited from '../../images/icon/favorited.svg';

import { FileOutlined } from "@ant-design/icons";
import { Button, Collapse, Space, Table, Tag, Tooltip } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Time from "react-time-format";
import { downloadFile, updateFavorite } from '../../api/files';
import fileDownload from 'js-file-download';


const { Panel } = Collapse;

const FolderShared = ({ data }) => {

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
            render: (text, record) => <div className='data-file' style={{ display: 'flex', alignItems: 'center' }}>
                {renderImage(record.type)}
                <Link to={`/qltl/${record.id}/xem-tai-lieu-${record.slug}`} target={'_blank'} style={{ fontWeight: 'bold', fontSize: 15, textDecoration: 'none', color: '#000' }}>{text}.{record.type}</Link>
                <div className='button-tool'>
                    <Tooltip style={{ paddingLeft: 50 }} title={'Chỉnh sửa'}>
                        <Button style={buttonStyle}><img style={imgStyle} src={edit} /></Button>
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
                            }).catch(err => {
                                console.log(err);
                            })
                        }} style={buttonStyle}><img style={imgStyle} src={download} /></Button>
                    </Tooltip>
                    <Tooltip title={'Xóa'}>
                        <Button style={buttonStyle}><img style={imgStyle} src={del} /></Button>
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
                        }} style={buttonStyle}><img style={imgStyle} src={favorite} /></Button>
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
            render: (text, record) => <small style={{ margin: 0 }}>{(record.is_all_editor == 1 || record.is_all_viewer == 1) ? 'Đã chia sẻ' : ''}</small>
        },
        {
            title: 'Đã chỉnh sửa',
            key: 'updated_at',
            dataIndex: 'updated_at',
            render: (date) => <small><Time value={new Date(date)} format="DD-MM-YYYY" /></small>
        },

        {
            title: 'Kích cỡ',
            key: 'size',
            render: (text, record) => <small style={{ margin: 0 }}>{(record.size * 9.537 * Math.pow(10, -7)).toFixed(2)}MB</small>
        },

        {
            title: 'Sở hữu',
            key: 'create_by',
            render: (text, record) => <small>{record.create_by.name}</small>
        },
    ];

    return (
        <Collapse defaultActiveKey={'1'} style={{ border: 'none', backgroundColor: '#fff' }} >
            <Panel style={{ border: 'none', fontSize: '18px' }} header="Được chia sẻ" key="1">
                <div className='' style={{ display: 'flex' }}>
                    <Table columns={columns} dataSource={data} pagination={false} />
                </div>
            </Panel>
        </Collapse>
    );
}

export default FolderShared;

