import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { HiOutlineChevronDown } from 'react-icons/hi';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Filter({ className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });

    return (
        <div className={classes}>
            <aside>
                <nav>
                    <ul>
                        <Button className={cx('menu-item')} to="/" rightIcon={<HiOutlineChevronDown />}>
                            Keyboard
                        </Button>
                    </ul>
                </nav>
            </aside>
        </div>
    );
}

export default Filter;
