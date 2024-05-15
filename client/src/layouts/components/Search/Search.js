import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { RiSearchLine, RiLoader4Line } from 'react-icons/ri';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(
            `https://www.tncstore.vn/?route=api/product/search&filter_name=${encodeURIComponent(
                debounced,
            )}&category_id=0`,
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res);
                setLoading(false);
            });
    }, [debounced]);

    return (
        <div className={cx('wrapper')}>
            <ul className={cx('inner')}>
                <li>
                    <Tippy
                        visible={showResult && searchResult.length > 0}
                        interactive
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    {searchResult.map((item, index) => (
                                        <div className={cx('autocomplete-suggestion')} key={index}>
                                            <img
                                                className={cx('image')}
                                                src="https://dareu.com.vn/wp-content/uploads/2022/02/ban-phim-khong-day-dareu-ek868-01-280x280.jpg"
                                                alt="autocomplete-suggestion"
                                            />
                                            <div className={cx('name')}>{item.name}</div>
                                            <span className={cx('price')}>
                                                <strong>đ</strong>
                                                {item.price}
                                            </span>
                                        </div>
                                    ))}
                                </PopperWrapper>
                            </div>
                        )}
                        onClickOutside={handleHideResult}
                    >
                        <form className={cx('form')}>
                            <div className={cx('form-input')}>
                                <input type="text" placeholder="Tìm kiếm sản phẩm" />
                            </div>
                            <div className={cx('form-btn')}>
                                <button type="submit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16.23"
                                        height="18.99"
                                        viewBox="0 0 18 17"
                                        fill="none"
                                    >
                                        <g clipPath="url(#clip0_1_663)">
                                            <path
                                                d="M16.2823 14.611L13.4209 11.7496C13.8127 11.1928 14.1169 10.5793 14.3334 9.90908C14.55 9.23885 14.6582 8.53253 14.6582 7.79013C14.6582 6.84149 14.4778 5.94442 14.1169 5.0989C13.756 4.25338 13.2611 3.51871 12.6321 2.89488C12.0031 2.27105 11.271 1.77869 10.4358 1.4178C9.59029 1.0466 8.68806 0.860996 7.72912 0.860996C6.78049 0.860996 5.88341 1.0466 5.03789 1.4178C4.19237 1.77869 3.4577 2.27105 2.83387 2.89488C2.21004 3.51871 1.71768 4.25338 1.35679 5.0989C0.985589 5.94442 0.799988 6.84149 0.799988 7.79013C0.799988 8.74907 0.985589 9.6513 1.35679 10.4968C1.71768 11.332 2.21004 12.0641 2.83387 12.6931C3.4577 13.3221 4.19237 13.817 5.03789 14.1779C5.88341 14.5388 6.78049 14.7193 7.72912 14.7193C8.47152 14.7193 9.17784 14.611 9.84807 14.3945C10.5183 14.1779 11.1318 13.8737 11.6886 13.4819L14.55 16.3433C14.7871 16.5804 15.0758 16.699 15.4161 16.699C15.7564 16.699 16.0451 16.5804 16.2823 16.3433C16.5194 16.1061 16.638 15.8174 16.638 15.4771C16.638 15.1369 16.5194 14.8481 16.2823 14.611ZM7.72912 12.7395C7.04858 12.7395 6.40928 12.6106 5.81123 12.3528C5.20287 12.0951 4.677 11.7419 4.23362 11.2934C3.79024 10.8448 3.4345 10.3215 3.16641 9.72348C2.90863 9.12543 2.77974 8.48098 2.77974 7.79013C2.77974 7.10959 2.90863 6.47029 3.16641 5.87224C3.4345 5.27419 3.79024 4.7509 4.23362 4.30236C4.677 3.85382 5.20287 3.50066 5.81123 3.24288C6.40928 2.97479 7.04858 2.84075 7.72912 2.84075C8.41997 2.84075 9.06442 2.97479 9.66247 3.24288C10.2605 3.50066 10.7838 3.85382 11.2323 4.30236C11.6809 4.7509 12.034 5.27419 12.2918 5.87224C12.5496 6.47029 12.6785 7.10959 12.6785 7.79013C12.6785 8.48098 12.5496 9.12543 12.2918 9.72348C12.034 10.3215 11.6809 10.8448 11.2323 11.2934C10.7838 11.7419 10.2605 12.0951 9.66247 12.3528C9.06442 12.6106 8.41997 12.7395 7.72912 12.7395Z"
                                                fill="#777777"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_663">
                                                <rect
                                                    width="16.23"
                                                    height="16"
                                                    fill="white"
                                                    transform="matrix(1 0 0 -1 0.799988 16.78)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </Tippy>
                </li>
                {/* {loading ? (
                    <RiLoader4Line className={cx('loading')} />
                ) : (
                    <div className={cx('search-btn')}>
                        <button>
                            <RiSearchLine className={cx('search-icon')} />
                        </button>
                    </div>
                )} */}
            </ul>
        </div>
    );
}

export default Search;
