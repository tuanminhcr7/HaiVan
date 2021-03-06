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

    const smallStyle = {
        margin: 0,
        fontFamily: 'Roboto',
        color: '#605e5c'
    }

    const columns = [
        {
            title: () => {
                return <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FileOutlined style={{ fontSize: 18, color: '#605e5c' }} />
                    <p className="mx-2" style={{ margin: '0', paddingTop: 5 }}>T??n</p>
                </div>
            },
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                {renderImage(record.type)}
                <Link to={`/qltl/trash`} style={{ fontWeight: 'bold', fontSize: 14, fontFamily: 'Roboto', textDecoration: 'none', color: '#000', cursor:'pointer' }}>{text}.{record.type}</Link>
            </div>
        },
        {
            title: 'M?? t???',
            dataIndex: 'description',
            key: 'description',
            render: (text, record) => <small style={smallStyle}>{record.description}</small>
        },
        {
            title: 'Th?? m???c',
            dataIndex: 'folder',
            key: 'folder',
            render: (text, record) => <small style={smallStyle}>{record.folder?.name}</small>
        },
        {
            title: 'Ng??y t???o',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (date) => <small style={smallStyle}><Time value={new Date(date)} format="DD-MM-YYYY" /></small>
        },
        {
            title: 'S??? h???u',
            key: 'create_by',
            render: (text, record) => <small style={smallStyle}>{record.create_by?.name}</small>
        },
        {
            title: 'Ng?????i x??a',
            key: 'deleted_by',
            render: (text, record) => <small style={smallStyle}>{record.deleted_by?.name}</small>
        },
        {
            title: 'Th???i gian x??a',
            key: 'deleted_at',
            dataIndex: 'deleted_at',
            render: (date) => <small style={smallStyle}><Time value={new Date(date)} format="DD-MM-YYYY HH:mm" /></small>
        },
    ];

    return (
        <Table style={{ width: '100vw' }} columns={columns} dataSource={data} pagination={false} />
    );
}

export default FolderTrash;

