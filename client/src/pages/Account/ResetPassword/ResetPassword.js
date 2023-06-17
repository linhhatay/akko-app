import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import Button from '~/components/Button';
import { resetPassword } from '~/redux/actions/authAction';
import styles from './ResetPassword.module.scss';

const cx = classNames.bind(styles);

function ResetPassword() {
    const location = useLocation();
    const resetToken = location.search.split('=')[1];

    const dispatch = useDispatch();

    const { errors, values, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            password: '',
            passwordConfirm: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required()
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{12,}$/),
            passwordConfirm: Yup.string().required().min(6),
        }),
        onSubmit: (values, resetForm) => {
            dispatch(resetPassword({ ...values, resetToken }));
            resetForm();
        },
    });

    return (
        <div className={cx('wrapper')}>
            <div>
                <div className={cx('inner')}>
                    <form onSubmit={handleSubmit}>
                        <p>Nhập mật khẩu mới bên dưới.</p>
                        <p>
                            <label>
                                Mật khẩu mới <span>*</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {values.password.length > 0 && errors.password && touched.password && (
                                <>
                                    <div>Rất yếu - Vui lòng nhập mật khẩu khó hơn.</div>
                                    <small>
                                        Gợi ý: Mật khẩu phải có ít nhất 12 ký tự. Để nâng cao độ bảo mật, sử dụng chữ in
                                        hoa, in thường, chữ số và các ký tự đặc biệt như ! " ? $ % ^ & ).
                                    </small>
                                </>
                            )}
                        </p>
                        <p className={cx('form-group-last')}>
                            <label>
                                Nhập lại mật khẩu mới <span>*</span>
                            </label>
                            <input
                                type="password"
                                className={errors.passwordConfirm && touched.passwordConfirm && cx('error')}
                                id="passwordConfirm"
                                name="passwordConfirm"
                                value={values.passwordConfirm}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </p>
                        <p className={'actions'}>
                            {Object.keys(errors).length ? (
                                <Button type="submit" disabled className={cx('save-password-btn')}>
                                    Lưu
                                </Button>
                            ) : (
                                <Button type="submit" primary className={cx('save-password-btn')}>
                                    Lưu
                                </Button>
                            )}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
