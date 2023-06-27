import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Product({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {data.discount > 0 && (
                    <div className={cx('badge')}>
                        <div>{`-${data.discount}%`}</div>
                    </div>
                )}
                <div className={cx('box')}>
                    <Link to={`${data.slug}`}>
                        <img
                            className={cx('image')}
                            src={`http://localhost:5000/img/products/${data.imageCover}`}
                            alt="product"
                        />
                    </Link>
                    <div className={cx('info')}>
                        <Link to={`/${data.slug}`} className={cx('title')}>
                            {data.name}
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
