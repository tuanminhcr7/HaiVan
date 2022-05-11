import folder from '../../images/icon/folder.svg';
import edit from '../../images/icon/edit.svg';
import share from '../../images/icon/share.svg';
import move from '../../images/icon/move.svg';
import download from '../../images/icon/download.svg';
import del from '../../images/icon/delete.svg';
import favorite from '../../images/icon/favorite.svg';
import '../ListData/style.css';

import { FileOutlined, FolderOpenFilled } from "@ant-design/icons";
import { Button, Collapse, message, Space, Table, Tag, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Time from 'react-time-format';
import EditForm from '../EditForm';
import { editFolder } from '../../api/folders';

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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataFolder, setDataFolder] = useState(data);
  const [statusFavorite, setStatusFavorite] = useState();
  const [idFavorite, setIdFavorite] = useState();
  const [folderChoose, setFolderChoose] = useState();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
          <p className="mx-2" style={{ margin: '0', paddingTop: 5 }}>Tên</p>
        </div>
      },
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <div className='data-folder' style={{ display: 'flex', alignItems: 'center', width: 400 }}>
        <img src={folder} width={20} height={20} />&nbsp;&nbsp;
        <Link to={`/qltl/${record.id}/tai-lieu-${record.slug}`} style={{ fontWeight: 300, fontSize: 15, fontFamily: 'Roboto', textDecoration: 'none', color: '#000' }}><b>{text}</b></Link>
        <div className='button-tool'>
          <Tooltip title={'Xóa'}>
            <Button style={buttonStyle}><img style={imgStyle} src={del} /></Button>
          </Tooltip>
          <Tooltip style={{ paddingLeft: 50 }} title={'Chỉnh sửa'}>
            <Button onClick={() => {
              showModal();
              setFolderChoose(record);
            }} style={buttonStyle}><img style={imgStyle} src={edit} /></Button>
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
      render: (text, record) => <small style={smallStyle}>{record.description}</small>
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date) => <small style={smallStyle}><Time value={new Date(date)} format="DD-MM-YYYY" /></small>
    },
    {
      title: 'Chỉnh sửa',
      key: 'edit_by_name',
      render: (text, record) => <small style={smallStyle}>{record.edit_by?.name}</small>
    },
    {
      title: 'Đã chỉnh sửa',
      key: 'updated_at',
      dataIndex: 'updated_at',
      render: (date, record) => <>
        {record.edit_by &&
          <small style={smallStyle}><Time value={new Date(date)} format="DD-MM-YYYY" /></small>
        }
      </>
    },
    {
      title: 'Sở hữu',
      key: 'create_by',
      render: (text, record) => <small style={smallStyle}>{record.create_by.name}</small>
    },
  ];

  const editFolderChoose = (id, name, description) => {
    setDataFolder(dataFolder.map(item => {
      if (item.id == id) {
        return { ...item, name: name, description: description };
      }
      return item;
    }));
    editFolder({ id: id, name: name, description: description }).then(res => {
      setIsModalVisible(false);
      message.success('Cập nhật thành công');
    }).catch(err => {
      let findFolder = data.find(item => item.id == id)
      setDataFolder(dataFolder.map(item => {
        if (item.id == id) {
          return findFolder;
        }
        return item;
      }));
    });
  }

  useEffect(() => {
    setDataFolder(data);
  }, data);

  return (
    <div>
      <Collapse defaultActiveKey={'1'} style={{ border: 'none', backgroundColor: '#fff' }} >
        <Panel style={{ border: 'none', fontSize: '18px' }} header={title} key="1">
          <div className='' style={{ display: 'flex' }}>
            <Table style={{ width: '100vw' }} columns={columns} dataSource={dataFolder} pagination={false} />
          </div>
        </Panel>
      </Collapse>
      <EditForm show={isModalVisible} cancel={handleCancel} showData={folderChoose} save={editFolderChoose} />
    </div>

  );
};

export default ListData;