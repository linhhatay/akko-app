import classNames from 'classnames/bind';
import { BiChevronDown } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';

import styles from './Menu.module.scss';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ title, to, dropdown = false }) {
    return (
        <li className={cx('menu-item')}>
            {/* <Button to={to}>
                <span className={cx('title')}>{title}</span>
                {dropdown && (
                    <div className={cx('dropdown')}>
                        <BiChevronDown />
                    </div>
                )}
            </Button> */}
            <Link to={to}>
                {title}
                {dropdown && (
                    // <div className={cx('dropdown')}>
                    <svg
                        className={cx('dropdown')}
                        xmlns="http://www.w3.org/2000/svg"
                        width="10.54"
                        height="19.2"
                        viewBox="0 0 12 17"
                        fill="none"
                    >
                        <g clipPath="url(#clip0_1_686)">
                            <path
                                d="M9.76263 7.24812C9.76263 7.32104 9.73659 7.38875 9.68451 7.45125L5.51263 11.6075C5.46055 11.67 5.39284 11.7012 5.30951 11.7012C5.23659 11.7012 5.16888 11.67 5.10638 11.6075L0.950134 7.45125C0.887634 7.38875 0.856384 7.32104 0.856384 7.24812C0.856384 7.16479 0.887634 7.09187 0.950134 7.02937L1.38763 6.59187C1.45013 6.52937 1.51784 6.49812 1.59076 6.49812C1.67409 6.49812 1.74701 6.52937 1.80951 6.59187L5.30951 10.0919L8.82513 6.59187C8.87722 6.52937 8.94493 6.49812 9.02826 6.49812C9.10118 6.49812 9.16888 6.52937 9.23138 6.59187L9.68451 7.02937C9.73659 7.09187 9.76263 7.16479 9.76263 7.24812Z"
                                fill="#666666"
                                fillOpacity="0.85"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_686">
                                <rect
                                    width="10.55"
                                    height="16"
                                    fill="white"
                                    transform="matrix(1 0 0 -1 0.850006 16.67)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    // </div>
                )}
            </Link>
        </li>
    );
}

export default MenuItem;
