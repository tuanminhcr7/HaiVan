import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    return (
        <div className="bread-crumb">
            <Breadcrumb separator=">">
                {
                    props?.data.map((item, index) => {
                        return (
                            <Breadcrumb.Item key={index} style={{ fontSize: `${props.fontSize ? "14px" : "18px"}` }} ><Link to={`${item?.slug}`}>{item?.name}</Link></Breadcrumb.Item>
                        );

                    })
                }
            </Breadcrumb>
        </div>
    );
}

export default BreadCrumb;