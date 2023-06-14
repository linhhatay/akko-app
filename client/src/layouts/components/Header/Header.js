import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { RxHamburgerMenu } from 'react-icons/rx';

import styles from './Header.module.scss';
import Search from '../Search';
import Navigation from '../Navigation';
import Cart from './Cart';
import Modal from '~/components/Modal';
import Sidebar from '../Sidebar';

const cx = classNames.bind(styles);

function Header() {
    const [sticky, setSticky] = useState(false);
    const [isMobile, setMobile] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY >= 200) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sticky]);

    useEffect(() => {
        const checkBrowserWidth = () => {
            const browserWidth = window.innerWidth;
            if (browserWidth <= 849) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };

        // Kiểm tra độ dài trình duyệt ban đầu
        checkBrowserWidth();

        // Đăng ký sự kiện resize để kiểm tra độ dài khi trình duyệt thay đổi kích thước
        window.addEventListener('resize', checkBrowserWidth);

        // Hủy đăng ký sự kiện resize khi component bị hủy
        return () => {
            window.removeEventListener('resize', checkBrowserWidth);
        };
    }, []);

    return (
        <div className={cx(['wrapper', sticky && 'sticky'])}>
            <div className={cx('top-bar')}>
                <div>
                    <div>
                        <strong>Akko Touch the Fashion...</strong>
                    </div>
                </div>
            </div>
            <div className={cx('inner')}>
                <div className={cx('mobile-nav')} onClick={handleOpenModal}>
                    <RxHamburgerMenu className={cx('mobile-nav-icon')} />
                </div>
                {isModalOpen && (
                    <Modal onClose={handleCloseModal}>
                        <Sidebar />
                    </Modal>
                )}
                <div className={cx('logo')}>
                    <img src="https://akko.vn/wp-content/uploads/2019/09/index_logo2.png" alt="logo" />
                </div>
                {!isMobile && <Search />}
                <Navigation />
                <Cart />
            </div>
        </div>
    );
}

export default Header;
