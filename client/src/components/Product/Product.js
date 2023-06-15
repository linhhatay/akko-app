import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('badge')}>
                    <div>-1%</div>
                </div>
                <div className={cx('box')}>
                    <Link to="/">
                        <img
                            className={cx('image')}
                            src="https://akko.vn/wp-content/uploads/2023/03/ban-phim-co-akko-5075b-plus-dragon-ball-super-goku-001-768x768.jpg"
                            alt="product"
                        />
                    </Link>
                    <div className={cx('info')}>
                        <Link to="/" className={cx('title')}>
                            Bàn phím cơ AKKO 5075B Plus Dragon Ball Super – Goku (Multi-modes / RGB / Hotswap / Gasket
                            mount)
                        </Link>
                        <div>
                            <div className={cx('price')}>
                                <span className={cx('price-original')}>₫2,999,000</span>
                                <span className={cx('price-current')}>₫2,959,000</span>
                            </div>
                            <span className={cx('status')}>
                                <FaCheck /> Còn hàng
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
