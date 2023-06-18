import classNames from 'classnames/bind';
import styles from './Pay.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Pay() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div>
                        <form>
                            <h3>Địa chỉ thanh toán</h3>
                            <div>
                                <p className={cx('row-first')}>
                                    <label>
                                        Tên <span>*</span>
                                    </label>
                                    <input type="text" />
                                </p>
                                <p className={cx('row-last')}>
                                    <label>
                                        Họ <span>*</span>
                                    </label>
                                    <input type="text" />
                                </p>
                                <p>
                                    <label>
                                        Quốc gia/Khu vực <span>*</span>
                                    </label>
                                    <span>
                                        <strong>Việt Nam</strong>
                                    </span>
                                </p>
                                <p>
                                    <label>
                                        Địa chỉ <span>*</span>
                                    </label>
                                    <input type="text" />
                                </p>
                                <p>
                                    <label>
                                        Mã bưu điện (tùy chọn) <span>*</span>
                                    </label>
                                    <input type="text" />
                                </p>
                                <p>
                                    <label>
                                        Tỉnh / Thành phố <span>*</span>
                                    </label>
                                    <input type="text" />
                                </p>
                                <p>
                                    <label>
                                        Số điện thoại <span>*</span>
                                    </label>
                                    <input type="text" />
                                </p>
                                <p>
                                    <label>
                                        Địa chỉ email <span>*</span>
                                    </label>
                                    <input type="text" />
                                </p>
                            </div>
                            <p>
                                <Button primary className={cx('save')}>
                                    LƯU ĐỊA CHỈ
                                </Button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pay;
