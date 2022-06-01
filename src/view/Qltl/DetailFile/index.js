import BreadCrumbRender from "../../../components/BreadCrumbRender";
import share from "../../../images/icon/share.svg";
import download from "../../../images/icon/download.svg";
import move from "../../../images/icon/move.svg";
import edit from "../../../images/icon/edit.svg";
import del from "../../../images/icon/delete.svg";
import xlsx from '../../../images/icon/xlsx.svg';
import csv from '../../../images/icon/csv.svg';
import txt from '../../../images/icon/txt.svg';
import docx from '../../../images/icon/docx.svg';
import pdf from '../../../images/icon/pdf.svg';
import ppt from '../../../images/icon/ppt.svg';
import pptx from '../../../images/icon/pptx.svg';
import folder from '../../../images/icon/folder.svg';
import './style.css';
import { downloadFile, editFile, getFileDetail, removeFile } from "../../../api/files";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, message } from "antd";
import Time from 'react-time-format';
import { Breadcrumb } from "antd";
import fileDownload from "js-file-download";
import EditForm from "../../../components/EditForm";
import DeleteFileForm from "../../../components/DeleteFileForm";
import MoveForm from "../../../components/MoveForm";
import ShareFileForm from "../../../components/ShareFileForm";


const DetailFile = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState();
    const [breadCrumb, setBreadCrumb] = useState();
    const [isModalEditFile, setIsModalEditFile] = useState(false);
    const [isModalDeleteFile, setIsModalDeleteFile] = useState(false);
    const [isModalMoveFile, setIsModalMoveFile] = useState(false);
    const [dataFile, setDataFile] = useState(file);
    const [fileChoose, setFileChoose] = useState();
    const [idMoveFile, setIdMoveFile] = useState();
    const [isModalShareFile, setIsModalShareFile] = useState(false);

    const showModalEditFile = () => {
        setIsModalEditFile(true);
    };

    const showModalDeleteFile = () => {
        setIsModalDeleteFile(true);
    };

    const showModalMoveFile = () => {
        setIsModalMoveFile(true);
    }

    const showModalShareFile = () => {
        setIsModalShareFile(true);
    }

    const handleCancel = () => {
        setIsModalEditFile(false);
        setIsModalDeleteFile(false);
        setIsModalMoveFile(false);
        setIsModalShareFile(false);
    };

    const renderImage = (type) => {
        switch (type) {
            case 'xlsx':
                return (
                    <img style={{ marginTop: -15 }} src={xlsx} />
                );
                break;
            case 'csv':
                return (
                    <img style={{ marginTop: -15 }} src={csv} />
                );
                break;
            case 'txt':
                return (
                    <img style={{ marginTop: -15 }} src={txt} />
                );
                break;
            case 'docx':
                return (
                    <img style={{ marginTop: -15 }} src={docx} />
                );
                break;
            case 'pdf':
                return (
                    <img style={{ marginTop: -15 }} src={pdf} />
                );
                break;
            case 'ppt':
                return (
                    <img style={{ marginTop: -15 }} src={ppt} />
                );
                break;
            case 'pptx':
                return (
                    <img style={{ marginTop: -15 }} src={pptx} />
                );
                break;
            case 'folder':
                return (
                    <img style={{ marginTop: -15 }} src={folder} />
                );
                break;
            default:
                break;
        }
    }

    const { id } = useParams();

    const handleBreadCrumb = () => {
        getFileDetail(id).then(res => {
            setBreadCrumb(res.data.data.breadCrumb);
        }).catch(err => {
            console.log(err);
        })
    }

    const handleDetailFile = () => {
        getFileDetail(id).then(res => {
            setFile(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const buttonStyle = {
        color: '#000',
        alignItems: 'center',
        fontSize: 14,
        border: 'none',
    }

    const editFileChoose = (id, name, description) => {

        editFile({ id: id, name: name, description: description }).then(res => {
            console.log(res);
            setIsModalEditFile(false);
            message.success('Cập nhật file thành công');
            setFile(res.data.data);
            setBreadCrumb(res.data.data.breadCrumb);
        }).catch(err => {
            let findFile = file.find(item => item.id == id)
            setDataFile(dataFile.map(item => {
                if (item.id == id) {
                    return findFile;
                }
                return item;
            }));
        });
    }

    const deleteFileChoose = (id) => {
        // setDataFile(dataFile.map(item => {
        //     if (item.id == id) {
        //         return { ...item, id: id };
        //     }
        //     return item;
        // }));
        removeFile(id).then(res => {
            setIsModalDeleteFile(false);
            message.success('Xóa file thành công');
            navigate(`/qltl/${breadCrumb[breadCrumb.length - 2].id}/tai-lieu-${breadCrumb[breadCrumb.length - 2].name}`);
        }).catch(err => {
            let findFile = file.find(item => item.id == id)
            setDataFile(dataFile.map(item => {
                if (item.id == id) {
                    return findFile;
                }
                return item;
            }));
        });
    }

    useEffect(() => {
        window.document.title = 'Chi tiết tệp';
        handleBreadCrumb();
        handleDetailFile();
        setFile(file);
    }, [id], [file]);

    return (
        <div>

            {file &&
                <>
                    <div className="row px-5">
                        <BreadCrumbRender data={breadCrumb} fontSize={18} separator=">" />
                    </div>

                    <div className="row px-5">
                        <div className="col-8">
                            <div className="row my-3" style={{ display: 'flex' }}>
                                <div className="col-2">
                                    <Button onClick={() => {
                                        showModalShareFile();
                                        setFileChoose(file);
                                    }} style={buttonStyle} className="px-0"><img src={share} width={20} height={20} />&nbsp;Chia sẻ</Button>
                                </div>
                                <div className="col-2">
                                    <Button onClick={() => {
                                        downloadFile(file.id).then(res => {
                                            fileDownload(res.data, `${file.name}.${file.type}`);
                                            message.success('Tệp đã được tải xuống');
                                        }).catch(err => {
                                            console.log(err);
                                        })
                                    }} style={buttonStyle} className="px-0"><img src={download} width={20} height={20} />&nbsp;Tải xuống</Button></div>
                                <div className="col-2">
                                    <Button onClick={() => {
                                        showModalMoveFile();
                                        setFileChoose(file);
                                        setIdMoveFile(file.folder_id);
                                    }} style={buttonStyle} className="px-0"><img src={move} width={20} height={20} />&nbsp;Di chuyển tới</Button>
                                </div>
                                <div className="col-2">
                                    <Button onClick={() => {
                                        showModalEditFile();
                                        setFileChoose(file);
                                    }} style={buttonStyle} className="px-0"><img src={edit} width={20} height={20} />&nbsp;Chỉnh sửa</Button>
                                </div>

                                <div className="col-2">
                                    <Button onClick={() => {
                                        showModalDeleteFile();
                                        setFileChoose(file);
                                    }} style={buttonStyle} className="px-0"><img src={del} width={20} height={20} />&nbsp;Xóa</Button>
                                </div>
                            </div>
                            <div className="row">
                                {file?.url && file?.type != "pdf" && file?.type != "txt" && file?.type != "csv" ? (
                                    <iframe
                                        style={{ height: '70vh' }}
                                        src={
                                            "//view.officeapps.live.com/op/embed.aspx?src=" +
                                            file?.url
                                        }
                                        title="Embedded Document"
                                        className="ead-iframe"
                                    ></iframe>
                                ) : (
                                    <iframe
                                        style={{ height: '70vh' }}
                                        title={file?.name}
                                        className="iframe-viewer"
                                        src={
                                            "https://docs.google.com/gview?url=" +
                                            file?.url +
                                            "&embedded=true"
                                        }
                                    ></iframe>
                                )}
                            </div>

                        </div>
                        <div className="col-4 mt-4 pt-4">
                            <h5 className="pt-1" >{file.name}</h5>
                            <p style={{ fontSize: 14, color: '#8c8c8c' }}>{file.description}</p>

                            <h5 className="pt-2">Chi tiết</h5>

                            <h6 className="pt-2" style={{ fontSize: 14 }}>Dạng</h6>
                            <div className="mt-4">
                                {renderImage(file.type)}
                            </div>

                            <h6 className="pt-2" style={{ fontSize: 14 }}>Chủ sở hữu</h6>
                            <p style={{ fontSize: 14, color: '#8c8c8c' }}>{file.create_by.name}</p>

                            <h6 style={{ fontSize: 14 }}>Chỉnh sửa gần đây</h6>
                            {
                                file.edit_by &&
                                <p style={{ fontSize: 14, color: '#8c8c8c' }}>
                                    <Time value={new Date(file.updated_at)} format="DD-MM-YYYY HH:mm" /> bởi {file.edit_by.name}
                                </p>
                            }

                            <h6 style={{ fontSize: 14 }}>Ngày tạo</h6>
                            <p style={{ fontSize: 14, color: '#8c8c8c' }}>
                                <Time value={new Date(file.created_at)} format="DD/MM/YYYY HH:mm" />
                            </p>

                            <h6 style={{ fontSize: 14 }}>Nơi lưu trữ bản cứng</h6>
                            <h6 style={{ fontSize: 14 }}>Đường dẫn</h6>
                            <Breadcrumb separator=">">
                                {
                                    file.breadCrumb && file.breadCrumb.map((item, index) => {
                                        return (
                                            <Breadcrumb.Item key={index} style={{ fontSize: 14 }}>{item?.name}</Breadcrumb.Item>
                                        );
                                    })
                                }
                            </Breadcrumb>

                            <h6 className="pt-3" style={{ fontSize: 14 }}>Kích thước</h6>
                            <p style={{ fontSize: 14, color: '#8c8c8c' }}>{(file.size * 1 * Math.pow(10, -6)).toFixed(2)}MB</p>
                        </div>
                    </div>
                </>
            }

            {isModalEditFile &&
                <EditForm show={isModalEditFile} cancel={handleCancel} showData={fileChoose} save={editFileChoose} />
            }

            {isModalDeleteFile &&
                <DeleteFileForm show={isModalDeleteFile} cancel={handleCancel} showData={fileChoose} save={deleteFileChoose} />
            }

            {isModalMoveFile &&
                <MoveForm show={isModalMoveFile} cancle={handleCancel} fileChoosed={fileChoose} id={idMoveFile} />
            }

            {isModalShareFile &&
                <ShareFileForm show={isModalShareFile} cancel={handleCancel} showData={fileChoose} />
            }
        </div>
    );
}

export default DetailFile;