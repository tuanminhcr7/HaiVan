import { FileOutlined } from "@ant-design/icons";
import { Collapse, Space, Table, Tag } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Time from "react-time-format";
const { Panel } = Collapse;

const FolderMyFileShared = ({ fileShareds }) => {
    const columns = [
        {
            title: () => {
                return  <div style={{ display:'flex', alignItems:'center' }}>
                            <FileOutlined style={{ fontSize:18, color:'#605e5c' }} />
                            <p className="mx-2" style={{ margin:'0', paddingTop:5 }}>Tên</p>
                        </div>
            },
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => {
                // const limit = text.subString(0, 20) + '...';
                return <Link to={`${record.id}/xem-tai-lieu-${record.slug}`} style={{ fontWeight: 'bold', fontSize: 15, textDecoration: 'none', color: '#000' }}>{text}.{record.type}</Link>    
            }
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
            render: (date) => <small>{new Intl.DateTimeFormat('vn-GB', { month: '2-digit', day: '2-digit', year: 'numeric' }).format(new Date(date))}</small>
        },
        {
            title: 'Chỉnh sửa',
            key: 'edit_by_name',
            render: (text, record) => <small style={{ margin: 0 }}>{record.edit_by?.name}</small>
        },
        {
            title: 'Chia sẻ',
            key: 'is_editor',
            render: (text, record) => <small style={{ margin: 0 }}>{(record.is_editor == 1) ? 'Đã chia sẻ' : ''}</small>
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
        <Table columns={columns} dataSource={fileShareds} pagination={false} />
    );
}

export default FolderMyFileShared;

