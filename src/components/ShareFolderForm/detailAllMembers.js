import { Checkbox } from "antd";


const DetailALlMembers = ({ showData }) => {
    return (
        <>
            <div className='row px-1'>
                <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Chia sẻ cho</span>
            </div>

            <div className='row px-1'>
                <div className="col-6">
                    <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Đã chia sẻ cho</span>
                </div>
                <div className="col-3 text-center">
                    <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Chỉnh sửa</span>
                </div>
                <div className="col-3 text-center">
                    <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Xem</span>
                </div>
            </div>

            <div style={{ height: 300, overflow: 'auto' }}>
                <div className="row px-1 mt-2">
                    {showData.users.map(item => {
                        return (
                            <>
                                <div className="col-6">
                                    <p className="m-0">{item.name}</p>
                                </div>
                                <div className="col-3 text-center">
                                    <Checkbox checked={item.is_editor == 1 ? true : false}></Checkbox>
                                </div>
                                <div className="col-3 text-center">
                                    <Checkbox checked={item.is_viewer == 1 ? true : false}></Checkbox>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>

        </>
    );
}

export default DetailALlMembers;