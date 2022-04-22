import { useEffect } from "react";
import { Form, Input, Button, Radio, Cascader } from 'antd';
import { useLocation } from "react-router";


const FormUploadFile = () => {
    const location = useLocation();
    console.log(location);
    console.log(location.state.files[0], 'files');

    useEffect(() => {
        document.title = "Tải tệp";
    }, []);

    const options = [
        {
            value: 'dsffs',
            label: 'Zhejdsfsdfsiang',
            children: [
                {
                    value: 'hasángzhou',
                    label: 'Hangzhou',
                },
            ],
        },
    ]

    return (
        <>
            <div className="container p-5">
                <div className="p-5" style={{ border: '1px solid #ddd' }}>
                    <div className="row mx-5 mb-3">
                        <label className="p-0"><span style={{ marginRight: 4, color: '#f00', fontSize: 18 }}>*</span>Tên tài liệu</label>
                        <Input
                            placeholder="Nhập tên file"
                            name="name"
                            value={location.state.files[0].name}
                        />
                    </div>

                    <div className="row mx-5 mb-3">
                        <label className="p-0"><span style={{ marginRight: 4, color: '#f00', fontSize: 18 }}>*</span>Chọn danh mục muốn tải tệp lên</label><br />
                        <Cascader
                            defaultValue={['zhejiang', 'hangzhou']}
                            className="px-1"
                            options={options}
                            placeholder="Chọn danh mục muốn tải tệp lên"
                        />
                    </div>
                    <div className="row mx-5 mb-3">
                        <label className="p-0">Mô tả</label>
                        <Input
                            placeholder="Mô tả ngắn tệp tin"
                            name="name"
                        />
                    </div>
                    <div className="row mx-5 mb-3">
                        <label className="p-0">Nơi lưu trữ</label>
                        <Input
                            placeholder="Nơi lưu trữ bản cứng. Ví dụ: hòm 1, hòm 2, ..."
                            name="name"
                        />
                    </div>
                    <div className="row mx-5">
                        <div className="col-5"></div>
                        <div className="col-2"><Button style={{ backgroundColor: '#1890ff', border: 'none', display: 'flex', alignItems: 'center', color: '#fff' }} type="default">Lưu</Button></div>
                        <div className="col-5"></div>

                    </div>
                </div>
            </div>

        </>
    );

}

export default FormUploadFile;