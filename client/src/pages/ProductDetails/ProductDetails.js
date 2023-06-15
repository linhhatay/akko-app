import classNames from 'classnames/bind';
import { HiOutlineChevronDown } from 'react-icons/hi';

import styles from './ProductDetails.module.scss';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import Socials from '~/components/Socials';
import Product from '~/components/Product/Product';

const cx = classNames.bind(styles);

function ProductDetails() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('sidebar')}>
                    <aside>
                        <nav>
                            <ul>
                                <Button className={cx('menu-item')} to="/" rightIcon={<HiOutlineChevronDown />}>
                                    Keyboard
                                </Button>
                            </ul>
                        </nav>
                    </aside>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-top')}>
                        <div className={cx('images')}>
                            <div className={cx('image-preview')}>
                                <div className={cx('badge')}>
                                    <div>-1%</div>
                                </div>
                                <div>
                                    <img
                                        src="https://akko.vn/wp-content/uploads/2023/03/ban-phim-co-akko-5075b-plus-dragon-ball-super-goku-001-768x768.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx('thumbnails')}>
                                <div>
                                    <a href="/">
                                        <img
                                            src="https://akko.vn/wp-content/uploads/2023/03/ban-phim-co-akko-5075b-plus-dragon-ball-super-goku-001-768x768.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="/">
                                        <img
                                            src="https://akko.vn/wp-content/uploads/2023/03/ban-phim-co-akko-5075b-plus-dragon-ball-super-goku-001-768x768.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="/">
                                        <img
                                            src="https://akko.vn/wp-content/uploads/2023/03/ban-phim-co-akko-5075b-plus-dragon-ball-super-goku-001-768x768.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="/">
                                        <img
                                            src="https://akko.vn/wp-content/uploads/2023/03/ban-phim-co-akko-5075b-plus-dragon-ball-super-goku-001-768x768.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('info')}>
                            <nav className={cx('breadcrumbs')}>
                                <Link>Trang chủ</Link>
                                <span>/</span>
                                <Link>Keyboard</Link>
                                <span>/</span>
                                <Link>One Piece</Link>
                            </nav>
                            <h1>
                                Bàn phím cơ AKKO 5075B Plus Dragon Ball Super – Goku (Multi-modes / RGB / Hotswap /
                                Gasket mount)
                            </h1>
                            <div className={cx('divider')}></div>
                            <div className={cx('price-wrapper')}>
                                <p>
                                    <del>
                                        <span>₫</span>2,999,000
                                    </del>
                                    <ins>
                                        <span>₫</span>2,959,000
                                    </ins>
                                </p>
                            </div>
                            <div className={cx('desc')}>
                                <h3>
                                    <strong>Khuyến mãi:</strong>
                                </h3>
                                <ul>
                                    <li>Freeship toàn quốc khi đặt hàng tại Akko.vn</li>
                                    <li>Chế độ bảo hành 1 đổi 1 trong suốt thời gian bảo hành</li>
                                    <li>Chi nhánh bảo hành 3 miền: Bắc – Trung – Nam</li>
                                </ul>
                            </div>
                            <div className={cx('actions')}>
                                <table>
                                    <tbody>
                                        <th>
                                            <label>SWITCH</label>
                                        </th>
                                        <td>
                                            <select>
                                                <option>Chọn một tùy chọn</option>
                                                <option>Crystal</option>
                                            </select>
                                        </td>
                                    </tbody>
                                </table>
                                <div>
                                    <div>
                                        <div className={cx('quantity')}>
                                            <input type="button" value="-" />
                                            <input type="number" value="1" step="1" min="1" />
                                            <input type="button" value="+" />
                                        </div>
                                        <div className={cx('add-to-cart')}>Thêm vào giỏ hàng</div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('html-after-addtocart')}>
                                <b style={{ color: '#fa5230' }}>Gian hàng ShopeeMall</b>
                                <br />
                                <b style={{ color: 'red' }}>
                                    Xem ngay tại:
                                    <a href="/">
                                        <FaCartPlus />
                                        <span> Akko Gear Việt Nam</span>
                                    </a>
                                </b>
                                <br />
                            </div>
                            <div className={cx('meta')}>
                                <span>Mã: N/A</span>
                                <span>Danh mục: One Piece</span>
                            </div>
                            <Socials />
                        </div>
                    </div>
                    <div className={cx('content-footer')}>
                        <div className={cx('related-product')}>
                            <h3>Sản phẩm tương tự </h3>
                            <div>
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
