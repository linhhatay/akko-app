import classNames from 'classnames/bind';

import styles from './Navigation.module.scss';
import config from '~/config';
import Dropdown from '~/components/Popper/Dropdown';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

const MENU_SUPPORT = [
    {
        title: 'Driver tải về',
        to: config.routes.support,
    },
    {
        title: 'Kiểm tra bảo hành',
        to: config.routes.support,
    },
    {
        title: 'Hướng dẫn bảo hành',
        to: config.routes.support,
    },
];

function Navigation() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Keyboard" to={config.routes.keyboard} />
                <MenuItem title="Mouse" to={config.routes.mouse} />
                <MenuItem title="Keycap" to={config.routes.keycap} />
                <MenuItem title="Switch" to={config.routes.switch} />
                <MenuItem title="Phụ kiện" to={config.routes.accessory} />
                <MenuItem title="Tin tức" to={config.routes.news} />

                <Dropdown items={MENU_SUPPORT}>
                    <div>
                        <MenuItem title="Hỗ trợ" to={config.routes.support} dropdown />
                    </div>
                </Dropdown>

                <div className={cx('divider')}></div>

                <MenuItem title="Đăng nhập" to={config.routes.account} />
            </Menu>
        </div>
    );
}

export default Navigation;
