import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '~/components/Button';
import { login, register } from '~/redux/actions/authAction';
import styles from './Account.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function Account() {
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    const formLogin = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required(),
            password: Yup.string().required().min(6),
        }),
        onSubmit: (values, { resetForm, setFieldValue }) => {
            const isSuccess = dispatch(login(values));

            if (isSuccess) {
                resetForm();
            } else {
                formLogin.setFieldValue('password', '');
            }
        },
    });

    const formRegister = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Required')
                .matches(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/),
        }),
        onSubmit: (values, { resetForm, setFieldValue }) => {
            const isSuccess = dispatch(register(values));

            if (isSuccess) {
                resetForm();
            } else {
                formLogin.setFieldValue('email', '');
            }
        },
    });

    return (
        <div className={cx('wrapper')}>
            <div>
                <div className={cx('inner')}>
                    {auth.isAuthenticated ? (
                        <div className={cx('dashboard')}>
                            <p>
                                Xin chào <strong>lng14092</strong> (không phải tài khoản <strong>lng14092</strong>? Hãy{' '}
                                <a href="/">thoát ra</a> và đăng nhập vào tài khoản của bạn)
                            </p>
                            <p>
                                Từ trang quản lý tài khoản bạn có thể xem <a href="/">đơn hàng mới</a>, quản lý{' '}
                                <a href="/">địa chỉ giao hàng và thanh toán</a>, and{' '}
                                <a href="/">sửa mật khẩu và thông tin tài khoản</a>.
                            </p>
                            <ul>
                                <li>
                                    <a href="/">Đơn hàng</a>
                                </li>
                                <li>
                                    <a href="/">Tải xuống</a>
                                </li>
                                <li>
                                    <Link to={config.routes.editAddress}>Địa chỉ</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.editAccount}>Tài khoản</Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className={cx('content')}>
                            <div className={cx('login')}>
                                <div className={cx('login-inner')}>
                                    <h3>Đăng nhập</h3>
                                    <form onSubmit={formLogin.handleSubmit}>
                                        <p>
                                            <label>
                                                Tên tài khoản hoặc địa chỉ email <span>*</span>
                                            </label>
                                            <input
                                                className={
                                                    formLogin.errors.username &&
                                                    formLogin.touched.username &&
                                                    cx('error')
                                                }
                                                type="text"
                                                id="username"
                                                name="username"
                                                value={formLogin.values.username}
                                                onChange={formLogin.handleChange}
                                                onBlur={formLogin.handleBlur}
                                            />
                                        </p>
                                        <p>
                                            <label>
                                                Mật khẩu <span>*</span>
                                            </label>
                                            <input
                                                className={
                                                    formLogin.errors.password &&
                                                    formLogin.touched.password &&
                                                    cx('error')
                                                }
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={formLogin.values.password}
                                                onChange={formLogin.handleChange}
                                                onBlur={formLogin.handleBlur}
                                            />
                                        </p>
                                        <p className={cx('actions')}>
                                            <label className={cx('save-password')}>
                                                <input type="checkbox" />
                                                <span>Ghi nhớ mật khẩu</span>
                                            </label>
                                            <Button type="submit" primary className={cx('login-btn')}>
                                                Đăng nhập
                                            </Button>
                                        </p>
                                        <p>
                                            <Link className={cx('forgot-password')} to={config.routes.forgotPassword}>
                                                Quên mật khẩu?
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                            <div className={cx('register')}>
                                <div className={cx('register-inner')}>
                                    <h3>Đăng ký</h3>
                                    <form onSubmit={formRegister.handleSubmit}>
                                        <p>
                                            <label>
                                                Địa chỉ email <span>*</span>
                                            </label>
                                            <input
                                                className={
                                                    formRegister.errors.email &&
                                                    formRegister.touched.email &&
                                                    cx('error')
                                                }
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formRegister.values.email}
                                                onChange={formRegister.handleChange}
                                                onBlur={formRegister.handleBlur}
                                            />
                                        </p>
                                        <p>A password will be sent to your email address.</p>
                                        <div className={cx('privacy-text')}>
                                            <p>
                                                Tất cả thông tin của bạn chỉ được sử dụng cho việc đặt hàng và cải thiện
                                                trải nghiệm sản phẩm. Ngoài ra được Akko đảm bảo về quyền riêng tư cá
                                                nhân theo quy định luật pháp.
                                            </p>
                                        </div>
                                        <p>
                                            <Button type="submit" primary className={cx('register-btn')}>
                                                Đăng ký
                                            </Button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Account;
