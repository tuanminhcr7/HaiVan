
import { Collapse } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
const {Panel} = Collapse;



const FolderGrid = ({ folders }) => {
    return (
        <Collapse defaultActiveKey={'1'} style={{ border: 'none', backgroundColor: '#fff' }} >
            <Panel style={{ border: 'none', fontSize: '18px' }} header="Thư mục" key="1">
                <div className='' style={{ display: 'flex' }}>
                    {folders.map((item3) =>
                        <Link to={`/${item3.id}/tai-lieu-${item3.slug}`} className='px-2 link-folder' style={{ color: '#201f1e' }} title={item3.name}>
                            <div className=''>
                                <div className='img-folder' style={{ position: 'relative', backgroundPosition: 'center' }}>
                                    <div style={{ position: 'absolute', fontSize: '12px', bottom: '30px', left: '25px', color: '#926e00', fontWeight: 'bold' }}>{item3.id}</div>
                                </div>
                                <p style={{ fontSize: '15px', marginBottom: '0', textAlign: 'center' }}>{item3.name}</p>
                                <small className='px-4' style={{ fontSize: 'small', color: '#605e5c' }}>
                                    {
                                        new Intl.DateTimeFormat('vn-GB', {
                                            month: 'numeric',
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

export default FolderGrid;