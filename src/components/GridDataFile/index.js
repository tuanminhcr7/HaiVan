import xlsx from '../../images/icon/xlsx.svg';
import csv from '../../images/icon/csv.svg';
import txt from '../../images/icon/txt.svg';
import docx from '../../images/icon/docx.svg';
import pdf from '../../images/icon/pdf.svg';
import ppt from '../../images/icon/ppt.svg';
import pptx from '../../images/icon/pptx.svg';
import folder from '../../images/icon/folder.svg';
import share from '../../images/icon/share.svg';
import move from '../../images/icon/move.svg';
import download from '../../images/icon/download.svg';
import del from '../../images/icon/delete.svg';
import './style.css';

import { Button, Collapse, Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Time from 'react-time-format';
import { downloadFile } from '../../api/files';
import fileDownload from 'js-file-download';

const { Panel } = Collapse;



const GridDataFile = ({ data, tool }) => {
    const renderImage = (type) => {
        switch (type) {
            case 'xlsx':
                return (
                    <img style={{ marginRight: 5 }} src={xlsx} />
                );
                break;
            case 'csv':
                return (
                    <img style={{ marginRight: 5 }} src={csv} />
                );
                break;
            case 'txt':
                return (
                    <img style={{ marginRight: 5 }} src={txt} />
                );
                break;
            case 'docx':
                return (
                    <img style={{ marginRight: 5 }} src={docx} />
                );
                break;
            case 'pdf':
                return (
                    <img style={{ marginRight: 5 }} src={pdf} />
                );
                break;
            case 'ppt':
                return (
                    <img style={{ marginRight: 5 }} src={ppt} />
                );
                break;
            case 'pptx':
                return (
                    <img style={{ marginRight: 5 }} src={pptx} />
                );
                break;
            case 'folder':
                return (
                    <img style={{ marginRight: 5 }} src={folder} />
                );
                break;
            default:
                break;
        }
    }

    const buttonStyle = {
        padding: 0,
        height: 23,
        width: 23,
        border: 'none',
        background: 'transparent'
    };

    const imgStyle = {
        padding: 0,
        height: 23,
        width: 23,
        border: 'none',
        background: 'transparent'
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data && data.map((item3) =>
                <div className='data-file'>
                    <Link to={`/qltl/${item3.id}/xem-tai-lieu-${item3.slug}`} target={'_blank'} className='px-2 link-folder' style={{ color: '#201f1e' }} title={item3.name}>
                        <div>
                            <div style={{ padding: '5px 15px' }}>
                                {renderImage(item3.type)}
                            </div>
                            <p style={{ fontSize: '15px', marginBottom: '0', textAlign: 'center', maxWidth: 100 }}>{item3.name.length > 12 ? `${item3.name.substring(0, 12)}...` : item3.name}</p>
                            <small className='px-3' style={{ fontSize: 'small', color: '#605e5c' }}>
                                <Time value={new Date(item3.created_at)} format="DD-MM-YYYY" />
                            </small>
                        </div>
                    </Link>
                    {tool &&
                        <div className='tool-file-grid'>
                            <Tooltip title={'Chia sẻ'}>
                                <Button style={buttonStyle}><img style={imgStyle} src={share} /></Button>
                            </Tooltip>
                            <Tooltip title={'Di chuyển'}>
                                <Button style={buttonStyle}><img style={imgStyle} src={move} /></Button>
                            </Tooltip>
                            <Tooltip onClick={() => {
                                downloadFile(item3.id).then(res => {
                                    fileDownload(res.data, `${item3.name}.${item3.type}`);
                                }).catch(err => {
                                    console.log(err);
                                })
                            }} title={'Tải xuống'}>
                                <Button style={buttonStyle}><img style={imgStyle} src={download} /></Button>
                            </Tooltip>
                            <Tooltip title={'Xóa'}>
                                <Button style={buttonStyle}><img style={imgStyle} src={del} /></Button>
                            </Tooltip>
                        </div>
                    }
                </div>
            )}
        </div>
    );
}

export default GridDataFile;