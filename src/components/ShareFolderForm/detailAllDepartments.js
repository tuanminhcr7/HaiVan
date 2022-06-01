import { RightOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import { useState } from "react";
import DetailDepartment from "./detailDepartment";


const DetailALlDepartments = ({ showData }) => {

    const [isDetailDepartment, setIsDetailDepartment] = useState(false);
    const [department, setDepartment] = useState();

    const showDetailDepartment = () => {
        setIsDetailDepartment(true);
    }

    return (
        <>
            {!isDetailDepartment &&
                <>
                    <div className="row px-1">
                        <div className='col-6'>
                            <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Phòng ban</span>
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

                    <div className="row px-1 mt-2" style={{ height: 300, overflow: 'auto' }}>
                        {showData.departments.map(items => {
                            return (
                                <>
                                    <div className="col-6">
                                        <p className="m-0">{items.name}</p>
                                    </div>
                                    <div style={{ paddingLeft: 35 }} className="col-2 text-center">
                                        <Checkbox checked={items.is_editor == 1 ? true : false}></Checkbox>
                                    </div>
                                    <div style={{ paddingLeft: 35 }} className="col-2 text-center">
                                        <Checkbox checked={items.is_viewer == 1 ? true : false}></Checkbox>
                                    </div>
                                    <div style={{ paddingLeft: 35 }} className='col-2 text-center'>
                                        <Button onClick={() => {
                                            setDepartment(items);
                                            showDetailDepartment();
                                        }} style={{ border: 'none' }} icon={<RightOutlined />}></Button>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </>
            }


            {isDetailDepartment &&
                <DetailDepartment showData={department} />
            }

        </>
    );
}

export default DetailALlDepartments;