import { Input, Modal } from 'antd';
import { useEffect, useState } from 'react';

const DeleteFolderForm = ({ show, save, cancel, showData }) => {

    return (
        <Modal title="Xóa thư mục"
            visible={show}
            okText='Đồng ý'
            cancelText='Hủy'
            onOk={() => {
                save(showData?.id);
            }}
            onCancel={cancel}
        >
            <div className='edit-form-name'>
                <p>Bạn có muốn xoá thư mục không?</p>
            </div>
            
        </Modal>

    );
}

export default DeleteFolderForm;