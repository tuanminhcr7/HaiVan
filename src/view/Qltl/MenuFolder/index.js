import MenuItem from 'antd/lib/menu/MenuItem';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Button } from 'antd';
import { 
    MenuUnfoldOutlined, 
    MenuFoldOutlined, 
    DeleteOutlined, 
    HistoryOutlined, 
    FolderOutlined, 
    TeamOutlined, 
    HeartOutlined 
} from '@ant-design/icons';

const { SubMenu } = Menu;

const MenuFolder = ({ menus, collapsed, toggleCollapsed }) => {

    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', position: 'fixed' }}>
            <Menu
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
                style={{
                    background: '#f3f2f1',
                    zIndex: '2',
                    height: '100vh',
                    overflow: 'auto',
                    scrollbarWidth: 'thin',
                    maxWidth: 200
                }}
            >
                <MenuItem>
                    <Link to={'/'} className='' style={{ display: 'block', textDecoration: 'none', fontWeight: 'bold', color: '#58595b', position: 'fixed', top: 10 }}><h2 style={{ fontWeight: 'bold' }}>{!collapsed && <b>HAIVAN</b>}</h2></Link>
                </MenuItem>

                {!collapsed &&
                    <div className='py-3 px-4'>
                        <Link to={'/qltl'} style={{ textDecoration: 'none', color: '#201f1e', fontSize: '15px' }}>{!collapsed && <b>Quản lý tài liệu</b>}</Link>
                    </div>
                }

                <MenuItem className='py-0 my-0' icon={<FolderOutlined />}>
                    <Link to={'/qltl/cua-toi'} className='link' title='Tài liệu của tôi'>Tài liệu của tôi</Link>
                </MenuItem>
                <MenuItem className='py-0 my-0' icon={<HistoryOutlined />}>
                    <Link to={'/qltl/recent-history'} className='link' title='Gần đây'>Gần đây</Link>
                </MenuItem>
                <MenuItem className='py-0 my-0' icon={<DeleteOutlined />}>
                    <Link to={'/qltl/trash'} className='link' title='Thùng rác'>Thùng rác</Link>
                </MenuItem>
                <MenuItem className='py-0 my-0' icon={<TeamOutlined />}>
                    <Link to={'/qltl/chia-se'} className='link' title='Được chia sẻ'>Được chia sẻ</Link>
                </MenuItem>
                <MenuItem className='py-0 my-0' icon={<HeartOutlined />}>
                    <Link to={'/qltl/yeu-thich'} className='link' title='Yêu thích'>Yêu thích</Link>
                </MenuItem>

                {menus.map((folder) =>
                    <SubMenu
                        icon={<FolderOutlined />}
                        to={`${folder.slug}`}
                        className='py-0 my-0'
                        title={folder.name}
                        onTitleClick={(id, slug) => {
                            id = folder.id;
                            slug = folder.slug;
                            const url = `/qltl/${id}/tai-lieu-${slug}`;
                            navigate(url);
                        }}
                    >
                        {folder.children.map((item) =>
                            <SubMenu
                                icon={<FolderOutlined />}
                                title={item.name}
                                onTitleClick={(id, slug) => {
                                    id = item.id;
                                    slug = item.slug;
                                    const url = `/qltl/${id}/tai-lieu-${slug}`;
                                    navigate(url);
                                }}
                            >
                                {item.children.map((item2) =>
                                    <MenuItem icon={<FolderOutlined />} className='py-0 my-0'>
                                        <Link 
                                            style={{ textDecoration: 'none' }} 
                                            to={`/qltl/${item2.id}/tai-lieu-${item2.slug}`}
                                        >
                                            {item2.name}
                                        </Link>
                                    </MenuItem>
                                )}
                            </SubMenu>
                        )}
                    </SubMenu>
                )}
            </Menu>

            <Button 
                type="default" 
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                    border: 'none',
                    fontSize: '25px',
                    paddingTop: '0',
                    paddingBottom: '10px',
                    backgroundColor: 'transparent',
                    zIndex: '3',
                    left: '-60px'
                }}
            >
                {React.createElement(
                    (collapsed) ? MenuUnfoldOutlined : MenuFoldOutlined
                )}
            </Button>
        </div>
    );
}

export default MenuFolder;