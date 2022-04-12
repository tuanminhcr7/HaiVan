import { FileOutlined } from "@ant-design/icons";
import { Collapse, Space, Table, Tag } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
const {Panel} = Collapse;

const FolderMyDoc = ({ myDocFiles }, {myDocFolders}) => {
    const columnsFiles = [
        {
            title: () => {
                return  <div style={{ display:'flex', alignItems:'center' }}>
                            <FileOutlined style={{ fontSize:18, color:'#605e5c' }} />
                            <p className="mx-2" style={{ margin:'0', paddingTop:5 }}>Tên</p>
                            
                        </div>
            },
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <Link to={`${record.id}/xem-tai-lieu-${record.slug}`} style={{ fontWeight: 'bold', fontSize: 15, textDecoration: 'none', color: '#000' }}>{text}.{record.type}</Link>
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
            render: (date) => <small>{new Intl.DateTimeFormat('vn-GB', { month: 'numeric', day: '2-digit', year: 'numeric' }).format(new Date(date))}</small>
        },
        {
            title: 'Chỉnh sửa',
            key: 'edit_by_name',
            render: (text, record) => <small style={{ margin: 0 }}>{record.edit_by?.name}</small>
        },
        {
            title: 'Chia sẻ',
            key: 'is_editor',
            render: (text, record) => <small style={{ margin:0 }}>{(record.is_all_viewer == 1 && record.is_all_editor == 1) ? 'Đã chia sẻ' : 'Riêng tư'}</small>
        },
        {
            title: 'Đã chỉnh sửa',
            key: 'updated_at',
            dataIndex: 'updated_at',
            render: (date) => <small>{new Intl.DateTimeFormat('en-GB', { month: 'numeric', day: '2-digit', year: 'numeric' }).format(new Date(date))}</small>
        },
        {
            title: 'Kích cỡ',
            key: 'size',
            render: (text, record) => <small style={{ margin:0 }}>{(record.size*1*Math.pow(10, -6)).toFixed(2)}MB</small>
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
                <div className='' style={{ display: 'flex' }}>
                    <Table columns={columnsFiles} dataSource={myDocFiles} pagination={false} />
                </div>
            </Panel>
        </Collapse>
    );
}

export default FolderMyDoc;

