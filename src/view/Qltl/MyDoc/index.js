import '../Qltl.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import { Component } from 'react';
import { Menu } from 'antd';
import React from 'react';
import { Collapse } from 'antd';
import axios from 'axios';

import Header from '../Header';
import FolderMyDoc from '../../../components/FolderMyDoc';
import MenuFolder from '../MenuFolder';

const { Panel } = Collapse;
const { SubMenu } = Menu;

class MyDoc extends Component {

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
        view: true,
        myDocFiles: [],
        myDocFolders: []
    };

    handleMyDoc = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/my-doc', this.myHeaders).then(res => {
            console.log(res.data.data);
            this.setState({
                myDocFiles: res.data.data.file,
                // myDocFolders: res.data.folder
            })
        }).catch(err => {
            console.log(err);
        });
    }


    componentDidMount() {
        document.title = "Tài liệu của tôi";
        this.handleMyDoc();
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
                <div className='row px-1'>
                    <p className='px-5' style={{ fontSize: '18px' }}>
                        <Link to={'/qltl'} style={{ textDecoration: 'none', color: '#8c8c8c' }}>Quản lý tài liệu</Link>
                        {' > '}
                        <Link to={'/qltl/cua-toi'} style={{ textDecoration: 'none', color: '#201f1e' }}>Tài liệu của tôi</Link>
                    </p>
                </div>
                <div className='row px-5'>
                    <FolderMyDoc myDocFiles={this.state.myDocFiles} />
                </div>
            </div>
        );
    }

}

export default MyDoc;