import { RightOutlined } from '@ant-design/icons';
import { Button, Checkbox, Modal } from 'antd';


const ShareForm = ({ show, cancel, showData }) => {
    console.log(showData);

    const changeIsEditor = () => {

    }

    return (
        <Modal
            width={600}

            title='Chia sẻ'
            visible={show}
            okText='Chia sẻ'
            cancelText='Hủy'
            onCancel={cancel}
        >
            <div style={{ height: 450 }}>
                <div className="row px-1">
                    <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Tên tài liệu</span>
                    {showData?.type != 'folder' ?
                        <p className="mt-3">{showData?.name}.{showData?.type}</p> :
                        <p className="mt-3">{showData?.name}</p>
                    }

                </div>

                <div className="row px-1">
                    <div className='col-6'>
                        <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Chia sẻ cho</span>
                    </div>
                    <div className='col-2 text-center'>
                        <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Chỉnh sửa</span>
                    </div>
                    <div className='col-2 text-center'>
                        <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Xem</span>
                    </div>
                    <div className='col-2 text-center'>
                        <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Chi tiết</span>
                    </div>
                </div>

                <div className='row px-1 mt-3'>
                    <div className='col-6'>
                        <p>Tất cả mọi người</p>
                    </div>
                    <div className='col-2 text-center'>
                        <Checkbox checked={showData?.is_all_editor == 1 ? true : false}></Checkbox>
                    </div>
                    <div className='col-2 text-center'>
                        <Checkbox checked={showData?.is_all_viewer == 1 ? true : false}></Checkbox>
                    </div>
                    <div className='col-2 text-center'>
                        <Button style={{ border: 'none' }} icon={<RightOutlined />}></Button>
                    </div>
                </div>

                <div className='row px-1'>
                    <div className='col-6'>
                        <p>Tất cả phòng ban</p>
                    </div>
                    <div className='col-2 text-center'>
                        <Checkbox checked={showData?.is_all_department_editor == 1 ? true : false}></Checkbox>
                    </div>
                    <div className='col-2 text-center'>
                        <Checkbox checked={showData?.is_all_department_viewer == 1 ? true : false}></Checkbox>
                    </div>
                    <div className='col-2 text-center'>
                        <Button style={{ border: 'none' }} icon={<RightOutlined />}></Button>
                    </div>
                </div>
            </div>

        </Modal>
    );
}

export default ShareForm;