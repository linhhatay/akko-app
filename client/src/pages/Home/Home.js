import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className={cx('next-arrow')} onClick={onClick}>
            <GoChevronRight />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={cx('prev-arrow')} onClick={onClick}>
            <GoChevronLeft />
        </div>
    );
}

function Home() {
    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        dotsClass: cx('dots'),
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className={cx('wrapper')}>
            <Slider {...settings} className={cx('carousel')}>
                <img src="https://akko.vn/wp-content/uploads/2023/04/5075B-Plus-goku-naruto-1400x510.jpg" alt="" />

                <img src="https://akko.vn/wp-content/uploads/2023/04/M1-Banner-1400x510.jpg" alt="" />

                <img src="https://akko.vn/wp-content/uploads/2023/04/AKKO-3068B-banner-01-1400x510.jpg" alt="" />
            </Slider>
        </div>
    );
}

export default Home;
