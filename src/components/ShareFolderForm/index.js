import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Modal, Row } from 'antd';
import { useEffect, useState } from 'react';
import DetailALlDepartments from './detailAllDepartments';
import DetailALlMembers from './detailAllMembers';
import { getDetailShareFile } from '../../api/files.js';
import { getDetailShareFolder } from '../../api/folders';


const ShareFolderForm = ({ show, cancel, showData }) => {
    console.log(showData);

    const [isAllEditor, setIsAllEditor] = useState(showData?.is_all_editor);
    const [status, setStatus] = useState(showData?.is_all_editor == 1 ? true : false);
    const [isDetailAllMembers, setIsDetailAllMembers] = useState(false);
    const [isDetailAllDepartments, setIsDetailAllDepartments] = useState(false);
    const [dataShareFolder, setDataShareFolder] = useState();

    const changeIsAllEditor = (event) => {

        if (showData?.is_all_editor == 0) {
            setIsAllEditor(1);
            setStatus(true);
        } else if (showData?.is_all_editor == 1) {
            setIsAllEditor(0);
            setStatus(false);
        }

    }

    const getDataShareFolder = () => {
        getDetailShareFolder(showData?.id).then(res => {
            setDataShareFolder(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const showDetailALlMembers = () => {
        setIsDetailAllMembers(true);
    }

    const showDetailALlDepartments = () => {
        setIsDetailAllDepartments(true);
    }

    const backForm = () => {
        setIsDetailAllMembers(false);
        setIsDetailAllDepartments(false);
    }

    console.log(dataShareFolder);

    useEffect(() => {
        getDataShareFolder();
    }, []);

    return (
        <Modal
            width={600}
            title={
                <Row>
                    <Col>
                        <div style={{ width: 35 }}>
                            <div
                                style={{
                                    backgroundColor: `${(isDetailAllMembers || isDetailAllDepartments) ? '#f3f2f1' : '#fff'}`,
                                    width: 30,
                                    height: 30,
                                    textAlign: 'center',
                                    borderRadius: '50%',
                                    // cursor: `${file?.bread_crumb.length > 1 ? 'pointer' : 'context-menu'}`,
                                }}
                            >
                                {(isDetailAllMembers || isDetailAllDepartments) &&
                                    <LeftOutlined
                                        onClick={() => {
                                            backForm();
                                        }}
                                    />
                                }
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginLeft: 10 }}>
                        <p style={{ padding: 5 }}>Chia sẻ</p>
                    </Col>
                </Row>
            }
            visible={show}
            okText='Chia sẻ'
            cancelText='Hủy'
            onCancel={cancel}
        >
            <div style={{ height: 400 }}>
                <div className="row px-1">
                    <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Tên tài liệu</span>
                    <p className="mt-3">{showData?.name}</p>
                </div>
                {isDetailAllMembers &&
                    <DetailALlMembers showData={dataShareFolder} />
                }

                {isDetailAllDepartments &&
                    <DetailALlDepartments showData={dataShareFolder} />
                }

                {(!isDetailAllMembers && !isDetailAllDepartments) &&
                    <>
                        <div className="row px-1">
                            <div className='col-6'>
                                <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Chia sẻ cho</span>
                            </div>
                            <div className='col-2 text-center'>
                                <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Chỉnh sửa</span>
                            </div>
                            <div className='col-2 text-center'>
                                <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Xem</span>
                            </div>
                            <div className='col-2 text-center'>
                                <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Chi tiết</span>
                            </div>
                        </div>

                        <div className='row px-1 mt-3'>
                            <div className='col-6'>
                                <p>Tất cả mọi người</p>
                            </div>
                            <div className='col-2 text-center'>
                                <Checkbox onChange={changeIsAllEditor} checked={dataShareFolder?.all_user.is_editor == 1 ? true : false}></Checkbox>
                            </div>
                            <div className='col-2 text-center'>
                                <Checkbox checked={dataShareFolder?.all_user.is_viewer == 1 ? true : false}></Checkbox>
                            </div>
                            <div className='col-2 text-center'>
                                <Button onClick={() => {
                                    showDetailALlMembers();
                                }} style={{ border: 'none' }} icon={<RightOutlined />}></Button>
                            </div>
                        </div>

                        <div className='row px-1'>
                            <div className='col-6'>
                                <p>Tất cả phòng ban</p>
                            </div>
                            <div className='col-2 text-center'>
                                <Checkbox checked={showData?.is_all_department_editor == 1 ? true : false}></Checkbox>
                            </div>
                            <div className='col-2 text-center'>
                                <Checkbox checked={showData?.is_all_department_viewer == 1 ? true : false}></Checkbox>
                            </div>
                            <div className='col-2 text-center'>
                                <Button onClick={() => {
                                    showDetailALlDepartments();
                                }} style={{ border: 'none' }} icon={<RightOutlined />}></Button>
                            </div>
                        </div>
                    </>
                }
            </div>

        </Modal>
    );
}

export default ShareFolderForm;