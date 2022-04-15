import GridData from '../../../components/GridData';
import ListData from '../../../components/ListData';
import FolderRecent from '../../../components/FolderRecent';
import ListDataFile from '../../../components/ListDataFile';

import { InsertRowAboveOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';



class Home extends Component {

    myToken = '596|Z33Poatv6hG7p0TsKErFFjaTg1X4cjZJUfs9Ixad';
    adminToken = '615|WDEA4EByOSvXW8Jfu7ou1J5N7jYi4HGfyfiqBlUT';

    myHeaders = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.myToken}`
        }
    }

    adminHeaders = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.adminToken}`
        }
    }

    state = {
        collapsed: false,
        folders: [],
        shareds: [],
        recents: [],
        viewFolder: true,
        viewFile: false
    };


    handleRecent = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/home', this.myHeaders).then(res => {
            this.setState({
                recents: res.data.recent
            })
        }).catch(err => {
            console.log(err);
        });
    }

    handleShared = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/home', this.myHeaders).then(res => {

            this.setState({
                shareds: res.data.shared
            })
        }).catch(err => {
            console.log(err);
        });
    }

    handleHome = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/home', this.myHeaders).then(res => {
            this.setState({
                folders: res.data.folder
            })
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount = () => {
        document.title = 'Quản lý tài liệu';
        this.handleRecent();
        this.handleShared();
        this.handleHome();
    }

    changeFolderGird = () => {
        this.setState({
            viewFolder: true
        });
    }

    changeFolderList = () => {
        this.setState({
            viewFolder: false
        });
    }

    changeFileGird = () => {
        this.setState({
            viewFile: true
        });
    }

    changeFileList = () => {
        this.setState({
            viewFile: false
        });
    }

    render() {
        return (
            <div>
                <div className='row px-3'>
                    <p className='px-5' style={{ fontSize: '18px' }}><Link to={'/qltl'} style={{ textDecoration: 'none', color: '#201f1e' }}>{document.title}</Link></p>
                </div>
                
                {this.state.recents.length > 0 &&
                    <>
                        <div className='row px-5'>
                            <FolderRecent data={this.state.recents} />
                        </div>
                    </>
                }

                {this.state.folders.length > 0 &&
                    <>
                        <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                            <Button onClick={this.changeFolderGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                            <Button onClick={this.changeFolderList} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
                        </div>
                        <div className='row px-3 m-0'>
                            {this.state.viewFolder ? <GridData data={this.state.folders} title={'Thư mục'} /> : <ListData data={this.state.folders} title={'Thư mục'} />}
                        </div>
                    </>
                }
                {this.state.shareds.length > 0 &&
                    <>
                        <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                            <Link to={'/qltl/chia-se'} style={{ textDecoration: 'none', fontSize: 13, color: '#201f1e' }}>Xem tất cả</Link>
                            <Button onClick={this.changeFileGird} className='mx-2' style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                            <Button onClick={this.changeFileList} style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
                        </div>

                        <div className='row px-4'>
                            {this.state.viewFile ? <GridData data={this.state.shareds} title={'Tệp'} /> : <ListDataFile data={this.state.shareds} />}
                        </div>
                    </>
                }


            </div>
        );
    }

};

export default Home;