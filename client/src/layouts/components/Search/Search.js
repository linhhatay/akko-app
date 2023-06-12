import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { BiLoaderAlt } from 'react-icons/bi';
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
            <div className={cx('inner')}>
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
                    <div className={cx('form')}>
                        <input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm"
                            value={searchValue}
                            spellCheck="false"
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setShowResult(true)}
                        />
                    </div>
                </Tippy>
                {loading ? (
                    <BiLoaderAlt className={cx('loading')} />
                ) : (
                    <div className={cx('search-btn')}>
                        <div>
                            <CgSearch className={cx('search-icon')} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
