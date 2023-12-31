import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

function DropdownItem({ data }) {
    return (
        <Button className={cx('dropdown-item')} to={data.to}>
            {data.title}
        </Button>
    );
}

export default DropdownItem;
