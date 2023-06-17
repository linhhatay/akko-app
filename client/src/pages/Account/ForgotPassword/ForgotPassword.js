import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import styles from './ForgotPassword.module.scss';
import Button from '~/components/Button/Button';
import { forgotPassword } from '~/redux/actions/authAction';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const { auth } = useSelector((state) => state);

    const dispatch = useDispatch();

    const { errors, values, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Required')
                .matches(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/),
        }),
        onSubmit: (values, resetForm) => {
            dispatch(forgotPassword(values));
            resetForm();
        },
    });

    return (
        <div className={cx('wrapper')}>
            <div>
                <div className={cx('inner')}>
                    {auth.forgotPasswordData ? (
                        <div className={cx('reset-sent-link')}>
                            <div>
                                <FaCheck /> Email khôi phục mật khẩu đã được gửi.
                            </div>
                            <p>
                                Một thư email khôi phục mật khẩu đã được gửi cho địa chỉ email tài khoản của bạn, nhưng
                                có thể sẽ mất vài phút để hiển thị trong Inbox của hộp thư. Vui lòng đợi ít nhất 10 phút
                                trước khi gửi một yêu cầu khôi phục mật khẩu khác.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <p>
                                Quên mật khẩu? Vui lòng nhập tên đăng nhập hoặc địa chỉ email. Bạn sẽ nhận được một liên
                                kết tạo mật khẩu mới qua email.
                            </p>
                            <p className={cx('form-group')}>
                                <label>Tên đăng nhập hoặc email</label>
                                <input
                                    className={errors.email && touched.email && cx('error')}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </p>
                            <p className={'actions'}>
                                <Button type="submit" primary className={cx('reset-password-btn')}>
                                    Đặt lại mật khẩu
                                </Button>
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
