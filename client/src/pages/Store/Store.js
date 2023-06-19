import classNames from 'classnames/bind';
import styles from './Store.module.scss';
import Filter from '~/layouts/components/Filter';
import Product from '~/components/Product';

const cx = classNames.bind(styles);

function Store() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                {/* <div className={cx('title-inner')}> */}
                <div className={cx('nav')}>
                    <nav>
                        <a href="/">Trang chủ </a>
                        <span>/</span> Keyboard
                    </nav>
                </div>
                <div className={cx('result-filter')}>
                    <p>Hiển thị 1–12 của 208 kết quả</p>
                    <form>
                        <select>
                            <option>Thứ tự theo mức độ phổ biến</option>
                            <option>Thứ tự theo điểm đánh giá</option>
                            <option selected>Mới nhất</option>
                            <option>Thứ tự theo giá: thấp đến cao</option>
                            <option>Thứ tự theo giá: cao xuống thấp</option>
                        </select>
                    </form>
                </div>
                {/* </div> */}
            </div>
            <div className={cx('container')}>
                <Filter className={cx('sidebar')} />
                <div className={cx('products-container')}>
                    <div>
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

export default Store;
