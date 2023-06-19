import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/components/Button';
import styles from './EditAccount.module.scss';
import { updateUser } from '~/redux/actions/userActions';

const cx = classNames.bind(styles);

function EditAccount() {
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        email: user.email,
        displayName: user.username,
        passwordCurrent: '',
        password: '',
        passwordConfirm: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleUpdateUser = (e) => {
        e.preventDefault();
        dispatch(updateUser(formData));
    };

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('inner')}>
                    <form>
                        <p className={cx('form-group-first')}>
                            <label>
                                Tên <span>*</span>
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
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
                            <input
                                type="text"
                                name="displayName"
                                value={formData.displayName}
                                onChange={handleChange}
                                required
                            />
                            <span>
                                <em>Tên này sẽ hiển thị trong trang Tài khoản và phần Đánh giá sản phẩm</em>
                            </span>
                        </p>
                        <p>
                            <label>
                                Địa chỉ email <span>*</span>
                            </label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </p>
                        <fieldset>
                            <legend>Thay đổi mật khẩu</legend>
                            <p>
                                <label>Mật khẩu hiện tại (bỏ trống nếu không đổi)</label>
                                <input
                                    type="password"
                                    name="passwordCurrent"
                                    value={formData.passwordCurrent}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <label>Mật khẩu mới (bỏ trống nếu không đổi)</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <label>Xác nhận mật khẩu mới</label>
                                <input
                                    type="password"
                                    name="passwordConfirm"
                                    value={formData.passwordConfirm}
                                    onChange={handleChange}
                                />
                            </p>
                        </fieldset>
                        <p>
                            <Button primary className={cx('save')} onClick={handleUpdateUser}>
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
