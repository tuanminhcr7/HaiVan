import '../Qltl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FolderDocFavorite from '../../../components/FolderDocFavorite';

import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';


class DocFavorite extends Component {

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
        docFavorites: []
    };

    handleDocFavorite = () => {
        axios.get('https://dev.api.qlnb.haivanexpress.vn/api/doc-favorite', this.myHeaders).then(res => {
            console.log(res.data.data);
            this.setState({
                docFavorites: res.data.data
            })
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        document.title = 'Tài liệu yêu thích';
        this.handleDocFavorite();
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
                        <Link to={'/qltl/yeu-thich'} style={{ textDecoration: 'none', color: '#201f1e' }}>Yêu thích</Link>
                    </p>
                </div>
                <div className='row px-5'>
                    {(this.state.docFavorites == null) ? '' : <FolderDocFavorite data={this.state.docFavorites} />}
                </div>

            </div>
        );
    }

}

export default DocFavorite;