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

const {Panel} = Collapse;

const FolderMyDoc = ({ myDocFiles }, {myDocFolders}) => {
    
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

    const columnsFiles = [
        {
            title: () => {
                return  <div style={{ display:'flex', alignItems:'center' }}>
                            <FileOutlined style={{ fontSize:18, color:'#605e5c' }} />
                            <p className="mx-2" style={{ margin:'0', paddingTop:5 }}>T??n</p>                            
                        </div>
            },
            dataIndex: 'name',
            key: 'name',
            render: (text, record) =>   <div style={{ display: 'flex', alignItems: 'center' }}>
                                            {renderImage(record.type)}
                                            <Link to={`/qltl/${record.id}/xem-tai-lieu-${record.slug}`} target={'_blank'} style={{ fontWeight: 'bold', fontSize: 15, textDecoration: 'none', color: '#000' }}>{text}.{record.type}</Link>
                                        </div>
        },
        {
            title: 'M?? t???',
            dataIndex: 'description',
            key: 'description',
            render: (text, record) => <small style={{ margin: 0 }}>{record.description}</small>
        },
        {
            title: 'Ng??y t???o',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (date) => <small>{new Intl.DateTimeFormat('vn-GB', { month: 'numeric', day: '2-digit', year: 'numeric' }).format(new Date(date))}</small>
        },
        {
            title: 'Ch???nh s???a',
            key: 'edit_by_name',
            render: (text, record) => <small style={{ margin: 0 }}>{record.edit_by?.name}</small>
        },
        {
            title: 'Chia s???',
            key: 'is_editor',
            render: (text, record) => <small style={{ margin:0 }}>{(record.is_all_viewer == 1 || record.is_all_editor == 1) ? '???? chia s???' : 'Ri??ng t??'}</small>
        },
        {
            title: '???? ch???nh s???a',
            key: 'updated_at',
            dataIndex: 'updated_at',
            render: (date) => <small>{new Intl.DateTimeFormat('en-GB', { month: 'numeric', day: '2-digit', year: 'numeric' }).format(new Date(date))}</small>
        },
        {
            title: 'K??ch c???',
            key: 'size',
            render: (text, record) => <small style={{ margin:0 }}>{(record.size*1*Math.pow(10, -6)).toFixed(2)}MB</small>
        },
        {
            title: 'S??? h???u',
            key: 'create_by',
            render: (text, record) => <small>{record.create_by.name}</small>
        },
    ];

    return (
        <Collapse defaultActiveKey={'1'} style={{ border: 'none', backgroundColor: '#fff' }} >
            <Panel style={{ border: 'none', fontSize: '18px' }} header="T???p" key="1">
                <div className='' style={{ display: 'flex' }}>
                    <Table style={{ width:'100vw' }} columns={columnsFiles} dataSource={myDocFiles} pagination={false} />
                </div>
            </Panel>
        </Collapse>
    );
}

export default FolderMyDoc;

