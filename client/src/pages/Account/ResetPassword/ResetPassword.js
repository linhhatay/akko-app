import classNames from 'classnames/bind';
import styles from './ResetPassword.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ResetPassword() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <div className={cx('inner')}>
                    <form>
                        <p>Nhập mật khẩu mới bên dưới.</p>
                        <p>
                            <label>
                                Mật khẩu mới <span>*</span>
                            </label>
                            <input type="text" />
                        </p>
                        <p className={cx('form-group-last')}>
                            <label>
                                Nhập lại mật khẩu mới <span>*</span>
                            </label>
                            <input type="text" />
                        </p>
                        <p className={'actions'}>
                            <Button primary className={cx('save-password-btn')}>
                                Lưu
                            </Button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
