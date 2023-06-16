import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function ForgotPassword() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <div className={cx('inner')}>
                    <form>
                        <p>
                            Quên mật khẩu? Vui lòng nhập tên đăng nhập hoặc địa chỉ email. Bạn sẽ nhận được một liên kết
                            tạo mật khẩu mới qua email.
                        </p>
                        <p className={cx('form-group')}>
                            <label>Tên đăng nhập hoặc email</label>
                            <input type="text" />
                        </p>
                        <p className={'actions'}>
                            <Button primary className={cx('reset-password-btn')}>
                                Đặt lại mật khẩu
                            </Button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
