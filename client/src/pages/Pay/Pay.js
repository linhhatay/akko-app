import classNames from 'classnames/bind';
import styles from './Pay.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Pay() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className={cx('inner')}>
                    <div className={cx('content')}>
                        <div className={cx('woocommerce-form-login-toggle')}>
                            <div>
                                Bạn đã có tài khoản? <a>Ấn vào đây để đăng nhập</a>
                            </div>
                        </div>
                        <div className={cx('woocommerce-form-coupon-toggle')}>
                            <div>
                                Bạn có mã ưu đãi? <a>Ấn vào đây để nhập mã</a>
                            </div>
                        </div>
                        <form className={cx('checkout')}>
                            <div className={cx('form-main')}>
                                <div className={cx('col-7')}>
                                    <div className={cx('customer_details')}>
                                        <div>
                                            <div className={cx('woocommerce-billing-fields')}>
                                                <h3>Thông tin thanh toán</h3>
                                                <div className={cx('woocommerce-billing-fields__field-wrapper')}>
                                                    <p className={cx('form-first')}>
                                                        <label>
                                                            Tên <abbr>*</abbr>
                                                        </label>
                                                        <input type="text" />
                                                    </p>
                                                    <p>
                                                        <label>
                                                            Số điện thoại <abbr>*</abbr>
                                                        </label>
                                                        <input type="text" />
                                                    </p>
                                                    <p>
                                                        <label>
                                                            Địa chỉ email <abbr>*</abbr>
                                                        </label>
                                                        <input type="text" />
                                                    </p>
                                                    <p>
                                                        <label>
                                                            Quốc gia/Khu vực <abbr>*</abbr>
                                                        </label>
                                                        <strong>Việt Nam</strong>
                                                    </p>
                                                    <p className={cx('form-first')}>
                                                        <label>
                                                            Địa chỉ <abbr>*</abbr>
                                                        </label>
                                                        <input type="text" placeholder="Địa chỉ" />
                                                    </p>
                                                    <p className={cx('form-last')}>
                                                        <label>Apartment, suite, unit etc.</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Apartment, suite, unit, etc. (optional)"
                                                        />
                                                    </p>
                                                    <p>
                                                        <label>
                                                            Tỉnh/ Thành Phố <abbr>*</abbr>
                                                        </label>
                                                        <input type="text" />
                                                    </p>
                                                    <p>
                                                        <label>
                                                            Quận/ Huyện <abbr>*</abbr>
                                                        </label>
                                                        <input type="text" />
                                                    </p>
                                                    <p>
                                                        <label>
                                                            Phường/ Xã <abbr>*</abbr>
                                                        </label>
                                                        <input type="text" />
                                                    </p>
                                                    <div className={cx('woocommerce-shipping-fields')}>
                                                        <h3>
                                                            <label>
                                                                <input type="checkbox" />
                                                                <span>Giao hàng tới địa chỉ khác?</span>
                                                            </label>
                                                        </h3>
                                                    </div>
                                                    <p>
                                                        <label>
                                                            Ghi chú đơn hàng <span>(tùy chọn)</span>
                                                        </label>
                                                        <textarea placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."></textarea>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('col-5')}>
                                    <div className={cx('has-border')}>
                                        <div className={cx('checkout-sidebar')}>
                                            <h3>Đơn hàng của bạn</h3>
                                            <div className={cx('order_review')}>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th className="product-name">Sản phẩm</th>
                                                            <th className="product-total">Tạm tính</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className={cx('cart-item')}>
                                                            <td className="product-name">
                                                                Bàn phím cơ AKKO 5075B Plus Dragon Ball Super – Goku
                                                                (Multi-modes / RGB / Hotswap / Gasket mount) -
                                                                Crystal&nbsp;
                                                                <strong className="product-quantity">
                                                                    ×&nbsp;1
                                                                </strong>{' '}
                                                            </td>
                                                            <td className="product-total">
                                                                <span className={cx('amount')}>
                                                                    <bdi>
                                                                        <span className="woocommerce-Price-currencySymbol">
                                                                            ₫
                                                                        </span>
                                                                        2,959,000
                                                                    </bdi>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th>Tạm tính</th>
                                                            <td>
                                                                <span className={cx('amount')}>
                                                                    <bdi>
                                                                        <span className="woocommerce-Price-currencySymbol">
                                                                            ₫
                                                                        </span>
                                                                        2,959,000
                                                                    </bdi>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className={cx('shipping__inner')}>
                                                                <table style={{ margin: '0' }}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th
                                                                                colSpan={2}
                                                                                style={{ display: 'block', border: 0 }}
                                                                            >
                                                                                Giao hàng
                                                                            </th>
                                                                            <td
                                                                                style={{
                                                                                    paddingLeft: '0',
                                                                                    display: 'block',
                                                                                }}
                                                                            >
                                                                                <ul
                                                                                    style={{
                                                                                        padding: '0 0.2em',
                                                                                        listStyle: 'none',
                                                                                    }}
                                                                                >
                                                                                    <li
                                                                                        style={{
                                                                                            display: 'flex',
                                                                                            alignItems: 'center',
                                                                                            minHeight: '2em',
                                                                                        }}
                                                                                    >
                                                                                        <input
                                                                                            type="radio"
                                                                                            style={{
                                                                                                width: 'auto',
                                                                                                height: 'auto',
                                                                                                marginBottom: '0',
                                                                                                marginRight: '10px',
                                                                                                fontSize: '16px',
                                                                                            }}
                                                                                        />
                                                                                        <label>
                                                                                            Đơn hàng từ 250K được miễn
                                                                                            phí giao hàng
                                                                                        </label>
                                                                                    </li>
                                                                                    <li
                                                                                        style={{
                                                                                            display: 'flex',
                                                                                            alignItems: 'center',
                                                                                            minHeight: '2em',
                                                                                        }}
                                                                                    >
                                                                                        <input
                                                                                            type="radio"
                                                                                            style={{
                                                                                                width: 'auto',
                                                                                                height: 'auto',
                                                                                                marginBottom: '0',
                                                                                                marginRight: '10px',
                                                                                                fontSize: '16px',
                                                                                            }}
                                                                                        />
                                                                                        <label>
                                                                                            Đồng giá:
                                                                                            <span className="woocommerce-Price-amount amount">
                                                                                                <bdi>
                                                                                                    <span>₫</span>
                                                                                                    20,000
                                                                                                </bdi>
                                                                                            </span>
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
                                                            <th style={{ borderWidth: '3px' }}>Tổng</th>
                                                            <td style={{ borderWidth: '3px' }}>
                                                                <strong>
                                                                    <span className={cx('amount')}>
                                                                        <bdi>
                                                                            <span>₫</span>
                                                                            2,959,000
                                                                        </bdi>
                                                                    </span>
                                                                </strong>{' '}
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                                <div>
                                                    <ul className={cx('payment-method')}>
                                                        <li>
                                                            <input
                                                                style={{
                                                                    display: 'inline',
                                                                    width: 'auto',
                                                                    height: 'auto',
                                                                    marginBottom: '1em',
                                                                    marginRight: '10px',
                                                                    marginTop: '3px',
                                                                    marginLeft: '5px',
                                                                    fontSize: '16px',
                                                                    verticalAlign: 'unset',
                                                                }}
                                                                type="radio"
                                                            />
                                                            <label>Trả tiền mặt khi nhận hàng </label>
                                                            <div>
                                                                <p>
                                                                    Trả tiền mặt khi giao hàng, khách hàng được quyền
                                                                    kiểm tra hàng
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <input
                                                                style={{
                                                                    display: 'inline',
                                                                    width: 'auto',
                                                                    height: 'auto',
                                                                    marginBottom: '1em',
                                                                    marginRight: '10px',
                                                                    marginTop: '3px',
                                                                    marginLeft: '5px',
                                                                    fontSize: '16px',
                                                                    verticalAlign: 'unset',
                                                                }}
                                                                type="radio"
                                                            />
                                                            <label>
                                                                Quét Mã MoMo
                                                                <img
                                                                    style={{
                                                                        display: 'inline-block',
                                                                        verticalAlign: 'middle',
                                                                    }}
                                                                    src="https://akko.vn/wp-content/plugins/thanh-toan-quet-ma-qr-momozalo-paymoca-grab-airpay/public/images/logo-momo.png"
                                                                    alt=""
                                                                />
                                                            </label>
                                                            {/* <div>
                                                                <p>
                                                                Hãy mở App Momo lên và nhấn Đặt Hàng để quét mã thanh toán
                                                                </p>
                                                            </div> */}
                                                        </li>
                                                    </ul>
                                                    <div>
                                                        <Button secondary className={cx('order-btn')}>
                                                            Đặt hàng
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className={cx('woocommerce-privacy-policy-text')}>
                                                    <p>
                                                        Tất cả thông tin của bạn chỉ được sử dụng cho việc đặt hàng và
                                                        cải thiện trải nghiệm sản phẩm. Ngoài ra được Akko đảm bảo về
                                                        quyền riêng tư cá nhân theo quy định luật pháp.
                                                    </p>
                                                </div>
                                                <div className={cx('html-checkout-sidebar')}>
                                                    ( Email xác nhận đơn hàng có thể sẽ trong mục email quảng cáo)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pay;
