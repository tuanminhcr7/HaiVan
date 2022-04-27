import folder from '../../images/icon/folder.svg';
import edit from '../../images/icon/edit.svg';
import share from '../../images/icon/share.svg';
import move from '../../images/icon/move.svg';
import download from '../../images/icon/download.svg';
import del from '../../images/icon/delete.svg';
import favorite from '../../images/icon/favorite.svg';
import '../ListData/style.css';

import { FileOutlined, FolderOpenFilled } from "@ant-design/icons";
import { Button, Collapse, Space, Table, Tag, Tooltip } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Time from 'react-time-format';

const { Panel } = Collapse;

const ListData = ({ data, title }) => {

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
        return  <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FileOutlined style={{ fontSize: 18, color: '#605e5c' }} />
                  <p className="mx-2" style={{ margin: '0', paddingTop: 5 }}>Tên</p>
                </div>
      },
      dataIndex: 'name',
      key: 'name',
      render: (text, record) =>   <div className='data-folder' style={{ display: 'flex', alignItems: 'center', width: 400 }}>
                                    <img src={folder} width={20} height={20} />&nbsp;&nbsp;
                                    <Link to={`/qltl/${record.id}/tai-lieu-${record.slug}`} style={{ fontWeight: 'lighter', fontSize: 16, textDecoration: 'none', color: '#000' }}><b>{text}</b></Link>
                                    <div className='button-tool'>
                                      <Tooltip title={'Xóa'}>
                                        <Button style={buttonStyle}><img style={imgStyle} src={del} /></Button>
                                      </Tooltip>
                                      <Tooltip style={{ paddingLeft: 50 }} title={'Chỉnh sửa'}>
                                        <Button style={buttonStyle}><img style={imgStyle} src={edit} /></Button>
                                      </Tooltip>
                                      <Tooltip title={'Chia sẻ'}>
                                        <Button style={buttonStyle}><img style={imgStyle} src={share} /></Button>
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
      title: 'Đã chỉnh sửa',
      key: 'updated_at',
      dataIndex: 'updated_at',
      render: (date, record) => <>
        {record.edit_by &&
          <small><Time value={new Date(date)} format="DD-MM-YYYY" /></small>
        }
      </>
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

export default ListData;