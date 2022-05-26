import { Cascader, Input, message, Modal, Row } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { addFolder, getFolder } from "../../api/folders";


const CreateFolderForm = ({ show, cancel }) => {
    const navigate = useNavigate();

    const objNewFolder = {
        "folderId": null,
        "name": null,
        "description": null
    }

    const [state, setState] = useState(objNewFolder);
    const [listFolders, setListFolder] = useState([]);

    const getListFolder = () => {
        getFolder().then((res) => {
            setListFolder(res.data.data);
        });
    }

    const renderListFolder = (list) => {
        return list.map((items) => {
            return {
                value: items.id,
                label: items.name,
                children: renderListFolder(items.children)
            };
        });
    }

    const onChangeFolder = (value, selectedOptions) => {
        // setChooseFolder(selectedOptions);
        console.log(value, selectedOptions);
        if (value == null) {
            setState({ ...state, folderId: 0 });
        } else {
            setState({ ...state, folderId: value[value.length - 1] });
        }

    };

    const onChangeName = (event) => {
        setState({ ...state, name: event.target.value });
    }

    const onChangeDescription = (event) => {
        setState({ ...state, description: event.target.value });
    }

    const handleCreateNewFolder = (folderId, name, description) => {
        if (name == null) {
            message.error('Tên thư mục không được để trống');
        } else {
            addFolder({ folder_id: folderId, name: name, description: description }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        }
    }

    useEffect(() => {
        getListFolder();
    }, []);

    return (
        <Modal title="Thư mục"
            visible={show}
            okText='Tạo'
            cancelText='Hủy'
            onOk={() => {
                handleCreateNewFolder(state.folderId, state.name, state.description);
            }}
            onCancel={cancel}
        >
            <Row>
                <span>Thư mục</span><br />
            </Row>
            <Row>
                <span style={{ color: '#f00' }}>(*) Bỏ trống nếu muốn tạo thư mục cấp 1</span>
            </Row>
            <Row>
                <Cascader
                    style={{ width: '100%' }}
                    options={renderListFolder(listFolders)}
                    onChange={onChangeFolder}
                    placeholder="Chọn nơi muốn tạo thư mục"
                    changeOnSelect
                    expandTrigger='hover'
                    defaultValue={''}
                />
            </Row>
            <Row className="mt-2">
                <span>Tên</span>
                <Input defaultValue={state?.name} onChange={onChangeName} placeholder="Nhập tên thư mục của bạn" />
            </Row>
            <Row className="mt-2">
                <span>Mô tả</span>
                <Input defaultValue={state?.description} onChange={onChangeDescription} placeholder="Nhập mô tả" />
            </Row>
        </Modal>
    );

}

export default CreateFolderForm;