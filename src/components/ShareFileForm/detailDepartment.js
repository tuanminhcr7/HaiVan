import { Checkbox } from "antd";


const DetailDepartment = ({ showData }) => {
    console.log(showData);

    return (
        <>
            <div className='row px-1'>
                <div className="col-6">
                    <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Chức Danh</span>
                </div>
                <div className="col-3 text-center">
                    <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Chỉnh sửa</span>
                </div>
                <div className="col-3 text-center">
                    <span style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>Xem</span>
                </div>
            </div>

            <div style={{ height: 300, overflow: 'auto' }}>

                {showData.titles.map(items => {
                    return (
                        <><div className="row px-1 mt-2">
                            <div className="col-6">
                                <p className="m-0">{items.name}</p>
                            </div>
                            <div className="col-3 text-center">
                                <Checkbox checked={items.is_editor == 1 ? true : false}></Checkbox>
                            </div>
                            <div className="col-3 text-center">
                                <Checkbox checked={items.is_viewer == 1 ? true : false}></Checkbox>
                            </div></div>
                        </>
                    );
                })}

            </div>
        </>
    );
}

export default DetailDepartment;