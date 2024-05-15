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
                                        <Button secondary to={config.routes.pay}>
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
                    <svg
                        className={cx('icon')}
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.11"
                        height="24"
                        viewBox="0 0 24 20"
                        fill="none"
                    >
                        <g clipPath="url(#clip0_1_698)">
                            <path
                                d="M21.887 8.75C22.2776 8.75 22.6161 8.88672 22.9026 9.16016C23.176 9.44661 23.3127 9.78516 23.3127 10.1758C23.3127 10.5664 23.176 10.9049 22.9026 11.1914C22.6161 11.4648 22.2776 11.6016 21.887 11.6016H21.7307L20.4417 19.0039C20.3765 19.3424 20.2138 19.6224 19.9534 19.8438C19.6799 20.0651 19.3739 20.1758 19.0354 20.1758H4.73853C4.39998 20.1758 4.1005 20.0651 3.84009 19.8438C3.56665 19.6224 3.39738 19.3424 3.33228 19.0039L2.06274 11.6016H1.88696C1.49634 11.6016 1.1578 11.4648 0.871338 11.1914C0.5979 10.9049 0.461182 10.5664 0.461182 10.1758C0.461182 9.78516 0.5979 9.44661 0.871338 9.16016C1.1578 8.88672 1.49634 8.75 1.88696 8.75H21.887ZM5.87134 17.6758C6.06665 17.6628 6.22941 17.5781 6.35962 17.4219C6.48983 17.2786 6.54842 17.1094 6.5354 16.9141L6.18384 12.2656C6.1578 12.0703 6.07316 11.9076 5.92993 11.7773C5.77368 11.6471 5.5979 11.5885 5.40259 11.6016C5.20728 11.6146 5.04451 11.6992 4.91431 11.8555C4.7841 12.0117 4.7255 12.1875 4.73853 12.3828L5.10962 17.0117C5.12264 17.207 5.19425 17.3633 5.32446 17.4805C5.46769 17.6107 5.63045 17.6758 5.81274 17.6758H5.87134ZM10.4612 16.9727V12.3242C10.4612 12.1289 10.3896 11.9596 10.2463 11.8164C10.1031 11.6732 9.93384 11.6016 9.73853 11.6016C9.55623 11.6016 9.39347 11.6732 9.25024 11.8164C9.10701 11.9596 9.0354 12.1289 9.0354 12.3242V16.9727C9.0354 17.1549 9.10701 17.3177 9.25024 17.4609C9.39347 17.6042 9.55623 17.6758 9.73853 17.6758C9.93384 17.6758 10.1031 17.6042 10.2463 17.4609C10.3896 17.3177 10.4612 17.1549 10.4612 16.9727ZM14.7385 16.9727V12.3242C14.7385 12.1289 14.6734 11.9596 14.5432 11.8164C14.4 11.6732 14.2307 11.6016 14.0354 11.6016C13.8401 11.6016 13.6708 11.6732 13.5276 11.8164C13.3844 11.9596 13.3127 12.1289 13.3127 12.3242V16.9727C13.3127 17.1549 13.3844 17.3177 13.5276 17.4609C13.6708 17.6042 13.8401 17.6758 14.0354 17.6758C14.2307 17.6758 14.4 17.6042 14.5432 17.4609C14.6734 17.3177 14.7385 17.1549 14.7385 16.9727ZM18.6838 17.0117L19.0354 12.3828C19.0484 12.1875 18.9898 12.0117 18.8596 11.8555C18.7294 11.6992 18.5667 11.6146 18.3713 11.6016C18.176 11.5885 18.0068 11.6471 17.8635 11.7773C17.7073 11.9076 17.6226 12.0703 17.6096 12.2656L17.2385 16.9141C17.2255 17.1094 17.2841 17.2786 17.4143 17.4219C17.5445 17.5781 17.7073 17.6628 17.9026 17.6758H17.9612C18.1435 17.6758 18.3062 17.6107 18.4495 17.4805C18.5797 17.3633 18.6578 17.207 18.6838 17.0117ZM5.77368 3.4375L4.73853 8.02734H3.25415L4.38696 3.10547C4.53019 2.45443 4.86222 1.92057 5.38306 1.50391C5.90389 1.10026 6.49634 0.898438 7.1604 0.898438H9.0354C9.0354 0.703125 9.10701 0.533854 9.25024 0.390625C9.39347 0.247396 9.55623 0.175781 9.73853 0.175781H14.0354C14.2307 0.175781 14.4 0.247396 14.5432 0.390625C14.6734 0.533854 14.7385 0.703125 14.7385 0.898438H16.6135C17.2776 0.898438 17.87 1.10026 18.3909 1.50391C18.9117 1.92057 19.2437 2.45443 19.387 3.10547L20.5198 8.02734H19.0354L18.0002 3.4375C17.9221 3.11198 17.7528 2.84505 17.4924 2.63672C17.245 2.42839 16.9521 2.32422 16.6135 2.32422H14.7385C14.7385 2.51953 14.6734 2.6888 14.5432 2.83203C14.4 2.96224 14.2307 3.02734 14.0354 3.02734H9.73853C9.55623 3.02734 9.39347 2.96224 9.25024 2.83203C9.10701 2.6888 9.0354 2.51953 9.0354 2.32422H7.1604C6.83488 2.32422 6.54191 2.42839 6.28149 2.63672C6.02108 2.84505 5.85181 3.11198 5.77368 3.4375Z"
                                fill="#666666"
                                fillOpacity="0.85"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_698">
                                <rect width="23.11" height="20" fill="white" transform="matrix(1 0 0 -1 0.459961 20)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                {isModalOpen && <Modal onClose={handleCloseModal}>Cart</Modal>}
            </div>
        </Tippy>
    );
}

export default Cart;
