import xlsx from '../../images/icon/xlsx.svg';
import csv from '../../images/icon/csv.svg';
import txt from '../../images/icon/txt.svg';
import docx from '../../images/icon/docx.svg';
import doc from '../../images/icon/docx.svg';
import pdf from '../../images/icon/pdf.svg';
import ppt from '../../images/icon/ppt.svg';
import pptx from '../../images/icon/pptx.svg';

import { FileOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Time from 'react-time-format';


const FolderTrash = ({ data }) => {

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
            case 'doc':
                return (
                    <img height={25} width={25} style={{ marginRight: 5 }} src={doc} />
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

    const columns = [
        {
            title: () => {
                return  <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FileOutlined style={{ fontSize: 18, color: '#605e5c' }} />
                            <p className="mx-2" style={{ margin: '0', paddingTop: 5 }}>Tên</p>
                        </div>
            },
            dataIndex: 'name',
            key: 'name',
            render: (text, record) =>   <div style={{ display: 'flex', alignItems: 'center', flexWrap:'wrap' }}>
                                            {renderImage(record.type)}
                                            <Link to={`/qltl/trash`} target={'_blank'} style={{ fontWeight: 'bold', fontSize: 14, textDecoration: 'none', color: '#000' }}>{text}.{record.type}</Link>
                                        </div>
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            render: (text, record) => <small style={{ margin: 0 }}>{record.description}</small>
        },
        {
            title: 'Thư mục',
            dataIndex: 'folder',
            key: 'folder',
            render: (text, record) => <small style={{ margin: 0 }}>{record.folder?.name}</small>
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (date) => <small><Time value={new Date(date)} format="DD-MM-YYYY" /></small>
        },
        {
            title: 'Sở hữu',
            key: 'create_by',
            render: (text, record) => <small>{record.create_by?.name}</small>
        },
        {
            title: 'Người xóa',
            key: 'deleted_by',
            render: (text, record) => <small style={{ margin: 0 }}>{record.deleted_by?.name}</small>
        },
        {
            title: 'Thời gian xóa',
            key: 'deleted_at',
            dataIndex: 'deleted_at',
            render: (date) => <small>
                <Time value={new Date(date)} format="DD-MM-YYYY HH:mm" />
            </small>
        },
    ];

    return (
        <Table style={{ width:'100vw' }} columns={columns} dataSource={data} pagination={false} />
    );
}

export default FolderTrash;

