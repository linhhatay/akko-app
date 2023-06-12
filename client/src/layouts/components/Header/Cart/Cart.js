import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { FaShoppingBasket } from 'react-icons/fa';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import config from '~/config';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <Tippy
            interactive
            placement="bottom-end"
            offset={[15, 10]}
            render={(attrs) => (
                <div className={cx('inner')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('content')}>
                            <div className={cx('product-list')}>
                                <div className={cx('product-item')}>
                                    <div className={cx('remove')}>x</div>
                                    <Button to={config.routes.home} className={cx('product-info')}>
                                        <img
                                            src="https://akko.vn/wp-content/uploads/2023/03/ban-phim-co-akko-5075b-plus-naruto-001-768x768.jpg"
                                            alt="product"
                                        />
                                        Bàn phím cơ AKKO 5075B Plus Naruto (Multi-modes / RGB / Hotswap / Gasket mount)
                                        - Crystal
                                    </Button>
                                    <span className={cx('quantity')}>
                                        1 x <span>₫2,959,000</span>
                                    </span>
                                </div>
                            </div>
                            <p className={cx('total')}>
                                <strong>Tổng số phụ: </strong>
                                <span>₫2,959,000</span>
                            </p>
                            <div className={cx('cta')}>
                                <Button primary to={config.routes.home}>
                                    Xem giỏ hàng
                                </Button>
                                <Button secondary to={config.routes.home}>
                                    Thanh toán
                                </Button>
                            </div>
                            {/* <p>Chưa có sản phẩm trong giỏ hàng.</p> */}
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('wrapper')}>
                <div className={cx('btn')}>
                    <span className={cx('badge')}>1</span>
                    <FaShoppingBasket className={cx('icon')} />
                </div>
            </div>
        </Tippy>
    );
}

export default Cart;
