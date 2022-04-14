import { Collapse } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import xlsx from '../../images/icon/xlsx.svg';
import csv from '../../images/icon/csv.svg';
import txt from '../../images/icon/txt.svg';
import docx from '../../images/icon/docx.svg';
import pdf from '../../images/icon/pdf.svg';
import ppt from '../../images/icon/ppt.svg';
import pptx from '../../images/icon/pptx.svg';
import folder from '../../images/icon/folder.svg';
const { Panel } = Collapse;



const GridData = ({ data, title }) => {
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

    return (
        <Collapse defaultActiveKey={'1'} style={{ border: 'none', backgroundColor: '#fff' }} >
            <Panel style={{ border: 'none', fontSize: '18px' }} header={title} key="1">
                <div style={{ display: 'flex' }}>
                    {data && data.map((item3) =>
                        <Link to={`/qltl/${item3.id}/tai-lieu-${item3.slug}`} className='px-2 link-folder' style={{ color: '#201f1e' }} title={item3.name}>
                            <div>
                                <div style={{ padding:'5px 15px' }}>
                                    {renderImage(item3.type)}
                                </div>
                                <p style={{ fontSize: '15px', marginBottom: '0', textAlign: 'center' }}>{item3.name}</p>
                                <small className='px-4' style={{ fontSize: 'small', color: '#605e5c' }}>
                                    {
                                        new Intl.DateTimeFormat('vn-GB', {
                                            month: '2-digit',
                                            day: '2-digit',
                                            year: 'numeric',
                                        }).format(new Date(item3.updated_at))
                                    }
                                </small>
                            </div>
                        </Link>
                    )}
                </div>
            </Panel>
        </Collapse>
    );
}

export default GridData;