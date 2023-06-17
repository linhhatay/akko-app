import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { notify } = useSelector((state) => state);

    return (
        <div className={cx('wrapper')}>
            <Header />
            {notify.message && (
                <div className={cx('message')}>
                    <li>
                        <div>
                            <strong>ERROR</strong>: {notify.message}.
                        </div>
                    </li>
                </div>
            )}
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
