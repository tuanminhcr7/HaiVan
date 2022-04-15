import xlsx from '../../images/icon/xlsx.svg';
import csv from '../../images/icon/csv.svg';
import txt from '../../images/icon/txt.svg';
import docx from '../../images/icon/docx.svg';
import pdf from '../../images/icon/pdf.svg';
import ppt from '../../images/icon/ppt.svg';
import pptx from '../../images/icon/pptx.svg';

import { FileOutlined } from "@ant-design/icons";
import { Collapse, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Time from "react-time-format";


const { Panel } = Collapse;

const ListDataFile = ({ data }) => {
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
            render: (text, record) =>   <div style={{ display:'flex', alignItems:'center' }}>
                                            {renderImage(record.type)}
                                            <Link to={`/qltl/${record.id}/xem-tai-lieu-${record.slug}`} target={'_blank'} style={{ fontWeight: 'bold', fontSize: 15, textDecoration: 'none', color: '#000' }}>{text.length > 26 ? `${text.substring(0, 26)}...` : text}</Link>
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
            render: (text, record) => <small style={{ margin: 0 }}>{record.is_all_viewer == 1 ? 'Đã chia sẻ' : 'Riêng tư'}</small>
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
            render: (text, record) => <small style={{ margin: 0 }}>{(record.size * 1 * Math.pow(10, -6)).toFixed(2)}MB</small>
        },
        {
            title: 'Sở hữu',
            key: 'create_by',
            render: (text, record) => <small>{record.create_by.name}</small>
        },
    ];

    return (
        <Collapse defaultActiveKey={'1'} style={{ border: 'none', backgroundColor: '#fff' }} >
            <Panel style={{ border: 'none', fontSize: '18px' }} header="Tệp" key="1">
                <div style={{ display: 'flex' }}>
                    <Table style={{ width:'100vw' }} columns={columns} dataSource={data} pagination={false} />
                </div>
            </Panel>
        </Collapse>
    );
}

export default ListDataFile;