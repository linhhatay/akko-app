import classNames from 'classnames/bind';
import { BiChevronDown } from 'react-icons/bi';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ title, to, dropdown = false }) {
    return (
        <Button className={cx('menu-item')} to={to}>
            <span className={cx('title')}>{title}</span>
            {dropdown && (
                <div className={cx('dropdown')}>
                    <BiChevronDown />
                </div>
            )}
        </Button>
    );
}

export default MenuItem;
