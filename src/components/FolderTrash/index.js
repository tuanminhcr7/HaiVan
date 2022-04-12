import { FileOutlined } from "@ant-design/icons";
import { Collapse, Space, Table, Tag } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Time from 'react-time-format';
const { Panel } = Collapse;

const FolderShared = ({ trashes }) => {
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
            render: (text, record) => <Link to={`${record.id}/xem-tai-lieu-${record.slug}`} style={{ fontWeight: 'bold', fontSize: 15, textDecoration: 'none', color: '#000' }}>{text}.{record.type}</Link>
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
        <Table columns={columns} dataSource={trashes} pagination={false} />
    );
}

export default FolderShared;

