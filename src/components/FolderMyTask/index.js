import { FileOutlined, SwapRightOutlined } from "@ant-design/icons";
import { Collapse, Input, Progress, Space, Table, Tag } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Time from "react-time-format";
const { Panel } = Collapse;

const FolderMyTask = ({ myTasks }) => {
    const columns = [
        {
            title: () => {
                return  <div style={{ display:'flex', alignItems:'center' }}>
                            <FileOutlined style={{ fontSize:18, color:'#605e5c' }} />
                            <p className="mx-2" style={{ margin:'0', paddingTop:5 }}>Tên công việc</p>
                        </div>
            },
            dataIndex: 'name',
            key: 'name',
            // render: (text, record) => <Link to={`${record.id}/xem-tai-lieu-${record.slug}`} style={{ fontWeight: 'bold', fontSize: 15, textDecoration: 'none', color: '#000' }}>{text}.{record.type}</Link>
        },
        {
            title: 'Thời gian thực hiện',
            key: 'time',
            render: (text, record) =>   <div style={{ display:'flex', alignItems:'center' }}>
                                            <p style={{  }}><Time value={new Date(record?.start_date)} format="DD/MM" /></p>&nbsp;
                                                <SwapRightOutlined style={{ color:'#ccc' }} />&nbsp;
                                            <p><Time value={new Date(record?.due_date)} format="DD/MM" /></p>
                                        </div>
        },
        {
            title: 'Dự án',
            key: 'project_name',
            render: (record) => <p style={{ margin:0, padding:0, paddingLeft:5, backgroundColor:`${record.project?.color}`, border: '1px solid #ccc', display:'flex', alignItems:'center'}}>
                                    <small>{record.project?.name}</small>
                                </p>
        },
        {
            title: 'Tiến độ',
            dataIndex: 'progress',
            key: 'progress',
            render: (text, record) =>   <div style={{ width: 50 }}>
                                            <Progress type="line" percent={record.progress} size="" />
                                        </div>
        }
    ];

    return (
        <Table columns={columns} dataSource={myTasks} pagination={true} />
    );
}

export default FolderMyTask;

