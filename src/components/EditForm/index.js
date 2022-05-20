import { Input, Modal } from 'antd';
import { useEffect, useState } from 'react';
import './style.css';

const EditForm = ({ show, save, cancel, showData }) => {

    const [stateFileName, setStateFileName] = useState(showData?.name);
    const [stateFileDescription, setStateFileDescription] = useState(showData?.description);

    console.log(showData);

    const handleChangeName = (value) => {
        setStateFileName(value.target.value);
    }

    const handleChangeDescription = (value) => {
        setStateFileDescription(value.target.value);
    }

    useEffect(() => {
        setStateFileName(showData?.name);
        setStateFileDescription(showData?.description);
    }, [showData]);

    return (
        <Modal title="Chỉnh sửa"
            visible={show}
            okText='Lưu'
            cancelText='Hủy'
            onOk={() => {
                save(showData?.id, stateFileName, stateFileDescription);
            }}
            onCancel={cancel}
        >
            <div className='edit-form-name'>
                <label>Tên</label><br />
                <Input value={stateFileName} onChange={handleChangeName} />
            </div>
            <div className='edit-form-description mt-2'>
                <label>Mô tả</label><br />
                <Input value={stateFileDescription} onChange={handleChangeDescription} />
            </div>
        </Modal>

    );
}

export default EditForm;