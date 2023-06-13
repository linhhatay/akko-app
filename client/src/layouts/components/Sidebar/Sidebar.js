import classNames from 'classnames/bind';
import { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

import Button from '~/components/Button/Button';
import config from '~/config';
import Search from '../Search';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Side() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('menu')}>
                    <ul className={cx('menu-list')}>
                        <li className={cx('search-form')}>
                            <Search />
                        </li>
                        <li>
                            <Button className={cx('menu-item')} to={config.routes.home}>
                                Keyboard
                            </Button>
                        </li>
                        <li>
                            <Button className={cx('menu-item')} to={config.routes.home}>
                                KIT Bàn phím
                            </Button>
                        </li>
                        <li>
                            <Button className={cx('menu-item')} to={config.routes.home}>
                                Mouse
                            </Button>
                        </li>
                        <li>
                            <Button className={cx('menu-item')} to={config.routes.home}>
                                Keycap
                            </Button>
                        </li>
                        <li>
                            <Button className={cx('menu-item')} to={config.routes.home}>
                                Switch
                            </Button>
                        </li>
                        <li>
                            <Button className={cx('menu-item')} to={config.routes.home}>
                                Phụ kiện
                            </Button>
                        </li>
                        <li>
                            <Button className={cx('menu-item')} to={config.routes.home}>
                                Tin tức
                            </Button>
                        </li>
                        <li onClick={toggleMenu}>
                            <Button
                                className={cx('menu-item')}
                                rightIcon={
                                    isOpen ? (
                                        <HiOutlineChevronUp className={cx('dropdown')} />
                                    ) : (
                                        <HiOutlineChevronDown className={cx('dropdown')} />
                                    )
                                }
                                to={config.routes.home}
                            >
                                Hỗ trợ
                            </Button>
                            {isOpen && (
                                <ul className={cx('sub-menu')}>
                                    <li>
                                        <Button className={cx('sub-menu-item')} to={config.routes.home}>
                                            Driver Tải về
                                        </Button>
                                    </li>
                                    <li>
                                        <Button className={cx('sub-menu-item')} to={config.routes.home}>
                                            Kiểm tra bảo hành
                                        </Button>
                                    </li>
                                    <li>
                                        <Button className={cx('sub-menu-item')} to={config.routes.home}>
                                            Hướng dẫn bảo hành
                                        </Button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Button className={cx('menu-item')} to={config.routes.home}>
                                Đăng nhập
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Side;
