import classNames from 'classnames/bind';
import { AiFillTag } from 'react-icons/ai';

import styles from './Cart.module.scss';
import Button from '~/components/Button/Button';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Cart() {
    const { cart } = useSelector((state) => state);

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div>
                        <div className={cx('content')}>
                            <div className={cx('product-container')}>
                                <form>
                                    <div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className={cx('product-name')} colSpan="3">
                                                        Sản phẩm
                                                    </th>
                                                    <th className={cx('"product-price"')}>Giá</th>
                                                    <th className={cx('product-quantity')}>Số lượng</th>
                                                    <th className={cx('product-subtotal')}>Tạm tính</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.items.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className={cx('product-remove')}>
                                                            <a href="/">x</a>
                                                        </td>
                                                        <td className={cx('product-thumbnail')}>
                                                            <a href="/">
                                                                <img
                                                                    src={`http://localhost:5000/img/products/${item.imageCover}`}
                                                                    alt="product"
                                                                />
                                                            </a>
                                                        </td>
                                                        <td className={cx('product-name')}>
                                                            <a href="/">{item.name}</a>
                                                        </td>
                                                        <td className={cx('product-price')}>
                                                            <span>₫{item.price}</span>
                                                        </td>
                                                        <td className={cx('product-quantity')}>
                                                            <div>
                                                                <input type="button" value="-" />
                                                                <input type="number" value={item.quantity} />
                                                                <input type="button" value="+" />
                                                            </div>
                                                        </td>
                                                        <td className={cx('product-subtotal')}>
                                                            <span>₫{item.price}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <td colSpan={6} style={{ textAlign: 'left', borderBottom: '0' }}>
                                                        <Button to="/" className={cx('continue')}>
                                                            ← Tiếp tục xem sản phẩm{' '}
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                            <div className={cx('calc')}>
                                <div>
                                    <div className={cx('totals')}>
                                        <table cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th
                                                        className="product-name"
                                                        colSpan="2"
                                                        style={{ borderWidth: '3px', borderStyle: 'solid' }}
                                                    >
                                                        Cộng giỏ hàng
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <table cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    <th>Tạm tính</th>
                                                    <td style={{ textAlign: 'right' }}>
                                                        <span className={cx('amount')}>₫369,000</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="2" style={{ padding: '0', fontSize: '1em' }}>
                                                        <table style={{ margin: '0', textAlign: 'left' }}>
                                                            <tbody style={{ display: 'block' }}>
                                                                <tr style={{ display: 'block' }}>
                                                                    <th
                                                                        colSpan="2"
                                                                        style={{ display: 'block', border: '0' }}
                                                                    >
                                                                        Giao hàng
                                                                    </th>
                                                                    <td style={{ display: 'block', paddingLeft: '0' }}>
                                                                        <ul
                                                                            style={{
                                                                                listStyle: 'none',
                                                                                padding: '0 0.2em',
                                                                            }}
                                                                        >
                                                                            <li
                                                                                style={{
                                                                                    display: 'flex',
                                                                                    alignItems: ' center',
                                                                                    minHeight: '2em',
                                                                                }}
                                                                            >
                                                                                <input type="radio" checked />
                                                                                <label>
                                                                                    Đơn hàng từ 250K được miễn phí giao
                                                                                    hàng
                                                                                </label>
                                                                            </li>
                                                                            <li
                                                                                style={{
                                                                                    display: 'flex',
                                                                                    alignItems: ' center',
                                                                                    minHeight: '2em',
                                                                                }}
                                                                            >
                                                                                <input type="radio" />
                                                                                <label>
                                                                                    Đồng giá: <span>₫20,000</span>
                                                                                </label>
                                                                            </li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Tổng</th>
                                                    <td style={{ textAlign: 'right' }}>
                                                        <strong>
                                                            <span className={cx('amount')}>₫369,000</span>
                                                        </strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className={cx('checkout-btn')}>
                                            <Button to="/">Tiến hành thanh toán</Button>
                                        </div>
                                    </div>
                                    <form>
                                        <div>
                                            <h3>
                                                <AiFillTag /> Phiếu ưu đãi
                                            </h3>
                                            <input type="text" placeholder="Mã ưu đãi" />
                                            <input type="submit" value="Áp dụng" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
