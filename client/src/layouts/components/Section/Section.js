import classNames from 'classnames/bind';
import { FiChevronRight } from 'react-icons/fi';

import styles from './Section.module.scss';
import Product from '~/components/Product';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Section({ icon, title, isMore }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h3>
                    <b />
                    <span>
                        {icon}
                        {title}
                    </span>
                    <b />
                    {isMore && (
                        <Link className={cx('more')}>
                            Xem thêm <FiChevronRight />
                        </Link>
                    )}
                </h3>
            </div>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('product-list')}>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
