import classNames from 'classnames/bind';
import styles from './Socials.module.scss';

import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

const cx = classNames.bind(styles);

function Socials() {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('icon')}>
                <FaFacebookF />
            </Link>
            <Link className={cx('icon')}>
                <FaInstagram />
            </Link>
            <Link className={cx('icon')}>
                <FaTwitter />
            </Link>
            <Link className={cx('icon')}>
                <TfiEmail />
            </Link>
            <Link className={cx('icon')}>
                <FaPinterest />
            </Link>
        </div>
    );
}

export default Socials;
