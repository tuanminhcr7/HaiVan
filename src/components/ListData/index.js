import folder from '../../images/icon/folder.svg';

import { FileOutlined, FolderOpenFilled } from "@ant-design/icons";
import { Collapse, Space, Table, Tag } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

const FolderList = ({ data, title }) => {
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
      render: (text, record) => <div style={{ display: 'flex', alignItems: 'center' }}>
                                  <img src={folder} width={20} height={20} />&nbsp;&nbsp;
                                  <Link to={`/qltl/${record.id}/tai-lieu-${record.slug}`} style={{ fontWeight: 'lighter', fontSize: 16, textDecoration: 'none', color: '#000' }}><b>{text}</b></Link>
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
      render: (date) => <small>{new Intl.DateTimeFormat('vn-GB', { month: 'numeric', day: '2-digit', year: 'numeric' }).format(new Date(date))}</small>
    },
    {
      title: 'Chỉnh sửa',
      key: 'edit_by_name',
      render: (text, record) => <small style={{ margin: 0 }}>{record.edit_by?.name}</small>
    },
    {
      title: 'Đã chỉnh sửa',
      key: 'updated_at',
      dataIndex: 'updated_at',
      render: (date) => <small>{new Intl.DateTimeFormat('vn-GB', { month: 'numeric', day: '2-digit', year: 'numeric' }).format(new Date(date))}</small>
    },
    {
      title: 'Sở hữu',
      key: 'create_by',
      render: (text, record) => <small>{record.create_by.name}</small>
    },
  ];

  return (
    <Collapse defaultActiveKey={'1'} style={{ border: 'none', backgroundColor: '#fff' }} >
      <Panel style={{ border: 'none', fontSize: '18px' }} header={title} key="1">
        <div className='' style={{ display: 'flex' }}>
          <Table style={{ width: '100vw' }} columns={columns} dataSource={data} pagination={false} />
        </div>
      </Panel>
    </Collapse>
  );
};

export default FolderList;