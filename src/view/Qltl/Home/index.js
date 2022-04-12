

import { InsertRowAboveOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import FolderGrid from '../../../components/FolderGrid';
import FolderList from '../../../components/FolderList';
import FolderRecent from '../../../components/FolderRecent';
import FolderShared from '../../../components/FolderShared';
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
        view: true
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
            view: true
        });
    }

    changeFolderList = () => {
        this.setState({
            view: false
        });
    }

    render() {
        return (
            <div>
                <div className='row px-3'>
                    <p className='px-5' style={{ fontSize: '18px' }}><Link to={'/qltl'} style={{ textDecoration: 'none', color: '#201f1e' }}>{document.title}</Link></p>
                </div>
                <div className='row px-5'>
                    <FolderRecent recents={this.state.recents} />
                </div>
                <div className='mt-3' style={{ textAlign: 'right', width: '100%', paddingRight: 50 }}>
                    <Button onClick={this.changeFolderGird} style={{ width: 25, height: 25 }} icon={<InsertRowAboveOutlined />}></Button>
                    <Button onClick={this.changeFolderList} className='mx-2' style={{ width: 25, height: 25 }} icon={<UnorderedListOutlined />}></Button>
                </div>
                <div className='row px-3 m-0'>
                    {this.state.view ? <FolderGrid folders={this.state.folders} /> : <FolderList folders={this.state.folders} />}
                </div>
                <div className='row px-4'>
                    <FolderShared shareds={this.state.shareds} />
                </div>
            </div>
        );
    }

};

export default Home;