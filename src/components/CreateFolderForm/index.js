import { Modal } from "antd";


const CreateFolderForm = ({ show, cancel }) => {
    <Modal title="Thư mục"
        visible={show}
        okText='Tạo'
        cancelText='Hủy'
        // onOk={() => {
        //     save(showData?.id, stateFileName, stateFileDescription);
        // }}
        onCancel={cancel}
    >
        dfsfs
    </Modal>
}

export default CreateFolderForm;