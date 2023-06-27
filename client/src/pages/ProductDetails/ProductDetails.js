import classNames from 'classnames/bind';
import { HiOutlineChevronDown } from 'react-icons/hi';

import styles from './ProductDetails.module.scss';
import Button from '~/components/Button';
import { Link, useParams } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import Socials from '~/components/Socials';
import Product from '~/components/Product/Product';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ProductDetails() {
    const { slug } = useParams();
    const { product } = useSelector((state) => state);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        if (slug && product.items.length > 0) {
            product.items.forEach((item) => {
                if (item.slug === slug) {
                    setDetails(item);
                }
            });
        }
        window.scrollTo(0, 0);
    }, [slug, product]);

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
                                {details.discount && (
                                    <div className={cx('badge')}>
                                        <div>{`-${details.discount}%`}</div>
                                    </div>
                                )}
                                <div>
                                    <img src={`http://localhost:5000/img/products/${details.imageCover}`} alt="" />
                                </div>
                            </div>
                            <div className={cx('thumbnails')}>
                                {details.images &&
                                    details.images.map((image, index) => (
                                        <div key={index}>
                                            <a href="/">
                                                <img src={`http://localhost:5000/img/products/${image}`} alt="" />
                                            </a>
                                        </div>
                                    ))}
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
                            <h1>{details.name}</h1>
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
                                        {details.attributes && (
                                            <td>
                                                <select>
                                                    <option>Chọn một tùy chọn</option>
                                                    {details.attributes.switches.map((item, index) => (
                                                        <option key={index}>{item}</option>
                                                    ))}
                                                </select>
                                            </td>
                                        )}
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
                                {/* <Product /> */}
                                {/* <Product /> */}
                                {/* <Product /> */}
                                {/* <Product /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
