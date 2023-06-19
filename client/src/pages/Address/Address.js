import classNames from 'classnames/bind';
import styles from './Address.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Address() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div>
                        <p>Các địa chỉ bên dưới mặc định sẽ được sử dụng ở trang thanh toán sản phẩm.</p>
                        <div className={cx('col')}>
                            <div>
                                <header>
                                    <h3>Địa chỉ thanh toán</h3>
                                    <Link to={config.routes.editAddressPay}>Sửa</Link>
                                </header>
                                <address>
                                    Họ Tên : Long Nguyễn <br />
                                    Công Ty : <br />
                                    Địa Chỉ : <br />
                                    Phường/ Xã : {`{svw_ward}`} <br />
                                    Quận/ Huyện : {`{svw_district}`} <br />
                                    Tỉnh/ Thành Phố : {`{svw_province}`} <br />
                                </address>
                            </div>
                            <div>
                                <header>
                                    <h3>Địa chỉ giao hàng</h3>
                                    <Link>Sửa</Link>
                                </header>
                                <address>
                                    Họ Tên : Long Nguyễn <br />
                                    Công Ty : <br />
                                    Địa Chỉ : <br />
                                    Phường/ Xã : {`{svw_ward}`} <br />
                                    Quận/ Huyện : {`{svw_district}`} <br />
                                    Tỉnh/ Thành Phố : {`{svw_province}`} <br />
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address;
