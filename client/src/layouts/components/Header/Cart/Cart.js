import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';

import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import config from '~/config';
import styles from './Cart.module.scss';
import Modal from '~/components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '~/redux/actions/cartAction';

const cx = classNames.bind(styles);

function Cart() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { items, total } = useSelector((state) => state.cart);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        console.log('Close');
        setIsModalOpen(false);
    };

    const dispatch = useDispatch();

    const handleDeleteProduct = (product) => {
        dispatch(removeFromCart(product));
    };

    return (
        <Tippy
            // visible={false}
            interactive
            placement="bottom-end"
            offset={[15, 10]}
            render={(attrs) => (
                <div className={cx('inner')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('content')}>
                            {items.length > 0 ? (
                                <>
                                    <div className={cx('product-list')}>
                                        {items.map((item, index) => (
                                            <div className={cx('product-item')} key={index}>
                                                <div className={cx('remove')} onClick={() => handleDeleteProduct(item)}>
                                                    x
                                                </div>
                                                <Button to={config.routes.home} className={cx('product-info')}>
                                                    <img
                                                        src={`http://localhost:5000/img/products/${item.imageCover}`}
                                                        alt="product"
                                                    />
                                                    {item.name}
                                                </Button>
                                                <span className={cx('quantity')}>
                                                    {item.quantity} x <span>₫{item.price}</span>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className={cx('total')}>
                                        <strong>Tổng số phụ: </strong>
                                        <span>₫{total}</span>
                                    </p>
                                    <div className={cx('cta')}>
                                        <Button primary to={config.routes.cart}>
                                            Xem giỏ hàng
                                        </Button>
                                        <Button secondary to={config.routes.home}>
                                            Thanh toán
                                        </Button>
                                    </div>
                                </>
                            ) : (
                                <p>Chưa có sản phẩm trong giỏ hàng.</p>
                            )}
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('wrapper')} onClick={handleOpenModal}>
                <div className={cx('btn')}>
                    {items.length > 0 && (
                        <span className={cx('badge')}>{items.reduce((total, item) => total + item.quantity, 0)}</span>
                    )}
                    <FaShoppingBasket className={cx('icon')} />
                </div>
                {isModalOpen && <Modal onClose={handleCloseModal}>Cart</Modal>}
            </div>
        </Tippy>
    );
}

export default Cart;
