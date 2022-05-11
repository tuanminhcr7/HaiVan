import { Input, Modal } from 'antd';
import { useEffect, useState } from 'react';

const DeleteForm = ({ show, save, cancel, showData }) => {

    return (
        <Modal title="Xóa tệp"
            visible={show}
            okText='Đồng ý'
            cancelText='Hủy'
            onOk={() => {
                save(showData?.id);
            }}
            onCancel={cancel}
        >
            <div className='edit-form-name'>
                <p>Bạn có chắc muốn xoá tệp không?</p>
            </div>
            
        </Modal>

    );
}

export default DeleteForm;