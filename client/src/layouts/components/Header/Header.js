import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Search from '../Search';
import Navigation from '../Navigation';
import Cart from './Cart';

const cx = classNames.bind(styles);

function Header() {
    const [sticky, setSticky] = useState(false);

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

    return (
        <div className={cx(['wrapper', sticky && 'sticky'])}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src="https://akko.vn/wp-content/uploads/2019/09/index_logo2.png" alt="logo" />
                </div>
                <Search />
                <Navigation />
                <Cart />
            </div>
        </div>
    );
}

export default Header;
