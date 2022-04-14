import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadCrumbRender = ({data}) => {
    console.log(data);
    return (
        <div className="bread-crumb">
            <Breadcrumb separator=">">
                {
                    data && data.map((item, index) => {
                        return (
                            <Breadcrumb.Item key={index} style={{ fontSize: `18px` }}><Link to={`${item?.slug}`} style={{textDecoration:'none'}}>{item?.name}</Link></Breadcrumb.Item>
                        );

                    })
                }
            </Breadcrumb>
        </div>
    );
}

export default BreadCrumbRender;