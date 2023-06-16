import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import Button from '~/components/Button/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <div className={cx('inner')}>
                    <div>
                        <div className={cx('login')}>
                            <div className={cx('login-inner')}>
                                <h3>Đăng nhập</h3>
                                <form>
                                    <p>
                                        <label>
                                            Tên tài khoản hoặc địa chỉ email <span>*</span>
                                        </label>
                                        <input type="text" />
                                    </p>
                                    <p>
                                        <label>
                                            Mật khẩu <span>*</span>
                                        </label>
                                        <input type="text" />
                                    </p>
                                    <p className={cx('actions')}>
                                        <label className={cx('save-password')}>
                                            <input type="checkbox" />
                                            <span>Ghi nhớ mật khẩu</span>
                                        </label>
                                        <Button primary className={cx('login-btn')}>
                                            Đăng nhập
                                        </Button>
                                    </p>
                                    <p>
                                        <Link className={cx('forgot-password')}>Quên mật khẩu?</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className={cx('register')}>
                            <div className={cx('register-inner')}>
                                <h3>Đăng ký</h3>
                                <form>
                                    <p>
                                        <label>
                                            Địa chỉ email <span>*</span>
                                        </label>
                                        <input type="text" />
                                    </p>
                                    <p>A password will be sent to your email address.</p>
                                    <div className={cx('privacy-text')}>
                                        <p>
                                            Tất cả thông tin của bạn chỉ được sử dụng cho việc đặt hàng và cải thiện
                                            trải nghiệm sản phẩm. Ngoài ra được Akko đảm bảo về quyền riêng tư cá nhân
                                            theo quy định luật pháp.
                                        </p>
                                    </div>
                                    <p>
                                        <Button primary className={cx('register-btn')}>
                                            Đăng ký
                                        </Button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
