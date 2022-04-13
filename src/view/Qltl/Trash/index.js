import '../Qltl.css';
import FolderTrash from '../../../components/FolderTrash';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';


class Trash extends Component {

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
        trashes: []
    };

    handleTrash = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/trash', this.adminHeaders).then(res => {
            this.setState({
                trashes: res.data.data
            })
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        document.title = "Thùng rác";
        this.handleTrash();
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
                        <Link to={'/qltl/trash'} style={{ textDecoration: 'none', color: '#201f1e' }}>Thùng rác</Link>
                    </p>
                </div>
                <div className='row px-5'>
                    <FolderTrash trashes={this.state.trashes} />
                </div>
            </div>
        );
    }
}

export default Trash;