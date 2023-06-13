import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

import Portal from '../Portal';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children, onClose }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('overlay')} onClick={onClose} />
                <div className={cx('body')}>{children}</div>
                <button className={cx('close')} onClick={onClose}>
                    <IoClose />
                </button>
            </div>
        </Portal>
    );
}

export default Modal;
