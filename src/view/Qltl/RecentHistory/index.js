import '../Qltl.css';
import FolderRecent from '../../../components/FolderRecent';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';


class RecentHistory extends Component {

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
        recents: [],
        view: true
    };

    handleRecent = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/recent', this.myHeaders).then(res => {
            this.setState({
                recents: res.data.data
            })
        }).catch(err => {
            console.log(err);
        });
    }


    componentDidMount() {
        document.title = "Tài liệu gần đây";
        this.handleRecent();
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
                <div className='row px-1' style={{ display: 'inline-block' }}>
                    <p className='px-5' style={{ fontSize: '18px' }}>
                        <Link to={'/qltl'} style={{ textDecoration: 'none', color: '#8c8c8c' }}>Quản lý tài liệu</Link>
                        {' > '}
                        <Link to={'/qltl/recent-history'} style={{ textDecoration: 'none', color: '#201f1e' }}>Gần đây</Link>
                    </p>

                </div>
                <div className='row px-3'>
                    <FolderRecent data={this.state.recents} />
                </div>
            </div>


        );
    }

}

export default RecentHistory;