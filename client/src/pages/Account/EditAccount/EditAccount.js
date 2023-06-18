import classNames from 'classnames/bind';
import styles from './EditAccount.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function EditAccount() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('inner')}>
                    <form>
                        <p className={cx('form-group-first')}>
                            <label>
                                Tên <span>*</span>
                            </label>
                            <input type="text" />
                        </p>
                        <p className={cx('form-group-last')}>
                            <label>
                                Họ <span>*</span>
                            </label>
                            <input type="text" />
                        </p>
                        <p>
                            <label>
                                Tên hiển thị <span>*</span>
                            </label>
                            <input type="text" />
                            <span>
                                <em>Tên này sẽ hiển thị trong trang Tài khoản và phần Đánh giá sản phẩm</em>
                            </span>
                        </p>
                        <p>
                            <label>
                                Địa chỉ email <span>*</span>
                            </label>
                            <input type="text" />
                        </p>
                        <fieldset>
                            <legend>Thay đổi mật khẩu</legend>
                            <p>
                                <label>Mật khẩu hiện tại (bỏ trống nếu không đổi)</label>
                                <input type="text" />
                            </p>
                            <p>
                                <label>Mật khẩu mới (bỏ trống nếu không đổi)</label>
                                <input type="text" />
                            </p>
                            <p>
                                <label>Xác nhận mật khẩu mới</label>
                                <input type="text" />
                            </p>
                        </fieldset>
                        <p>
                            <Button primary className={cx('save')}>
                                LƯU THAY ĐỔI
                            </Button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditAccount;
