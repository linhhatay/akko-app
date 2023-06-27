import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import config from '~/config';
import Section from '~/layouts/components/Section';
import { CiHeart, CiStar } from 'react-icons/ci';
import Button from '~/components/Button';
import { useSelector } from 'react-redux';

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
    const { product } = useSelector((state) => state);

    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        dotsClass: cx('dots'),
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className={cx('wrapper')}>
            <Slider {...settings} className={cx('carousel')}>
                <div className={cx('carousel-image')}>
                    <img src="https://akko.vn/wp-content/uploads/2023/04/5075B-Plus-goku-naruto-1400x510.jpg" alt="" />
                </div>

                <div className={cx('carousel-image')}>
                    <img src="https://akko.vn/wp-content/uploads/2023/04/M1-Banner-1400x510.jpg" alt="" />
                </div>

                <div className={cx('carousel-image')}>
                    <img src="https://akko.vn/wp-content/uploads/2023/04/AKKO-3068B-banner-01-1400x510.jpg" alt="" />
                </div>

                <div className={cx('carousel-image')}>
                    <img src="https://akko.vn/wp-content/uploads/2023/04/AKKO-3068B-banner-01-1400x510.jpg" alt="" />
                </div>

                <div className={cx('carousel-image')}>
                    <img src="https://akko.vn/wp-content/uploads/2023/04/AKKO-3068B-banner-01-1400x510.jpg" alt="" />
                </div>

                <div className={cx('carousel-image')}>
                    <img src="https://akko.vn/wp-content/uploads/2023/04/AKKO-3068B-banner-01-1400x510.jpg" alt="" />
                </div>
            </Slider>
            <div className={cx('product-row')}>
                <div className={cx(['product-col'])}>
                    <div className={cx('product-col-inner')}>
                        <div className={cx('product-col-image')}>
                            <Link to={config.routes.home}>
                                <img
                                    src="https://akko.vn/wp-content/uploads/2021/12/ban-phim-co-akko-3098n-multi-modes-world-tour-london-ava.jpg"
                                    alt="product"
                                />
                            </Link>
                        </div>
                        <div className={cx('product-col-text')}>
                            <div>
                                <h2>KEYBOARD</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx(['product-col'])}>
                    <div>
                        <div className={cx('product-col-image')}>
                            <Link to={config.routes.home}>
                                <img
                                    src="https://akko.vn/wp-content/uploads/2020/11/AKKO-AG325-One-Piece-Zoro-07.jpg"
                                    alt="product"
                                />
                            </Link>
                        </div>
                        <div className={cx('product-col-text')}>
                            <div>
                                <h2>MOUSE</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx(['product-col'])}>
                    <div>
                        <div className={cx('product-col-image')}>
                            <Link to={config.routes.home}>
                                <img
                                    src="https://akko.vn/wp-content/uploads/2021/01/akko-keycap-neon-02.jpg"
                                    alt="product"
                                />
                            </Link>
                        </div>
                        <div className={cx('product-col-text')}>
                            <div>
                                <h2>KEYCAP</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx(['product-col'])}>
                    <div>
                        <div className={cx('product-col-image')}>
                            <Link to={config.routes.home}>
                                <img src="https://akko.vn/wp-content/uploads/2020/10/ad701-2.jpg" alt="product" />
                            </Link>
                        </div>
                        <div className={cx('product-col-text')}>
                            <div>
                                <h2>Accessories</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Section icon={<CiStar />} title="Sản phẩm mới" data={product} />
            <Section icon={<CiHeart />} title="Hàng sắp về" data={product} isMore />
            <div className={cx('banner')}>
                <div className={cx('banner-inner')}>
                    <div className={cx('banner-fill')}></div>
                    <div className={cx('banner-layer')}>
                        <div className={cx('banner-content')}>
                            <h3>Chờ đón sản phẩm mới</h3>
                            <p>Akko sẽ mang đến những sản phẩm mới bất ngờ trong năm 2024.</p>
                            <div className={cx('banner-timer')}>
                                <span>
                                    0 <strong>giờ</strong>
                                </span>
                                <span>
                                    0 <strong>phút</strong>
                                </span>
                                <span>
                                    0 <strong>giây</strong>
                                </span>
                            </div>
                            <Button to="/">Xem ngay</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('gallery')}>
                <div className={cx('gallery-item')}>
                    <img src="https://akko.vn/wp-content/uploads/2021/02/akko-3068niu_800_1.jpg" alt="" />
                </div>
                <div className={cx('gallery-item')}>
                    <img src="https://akko.vn/wp-content/uploads/2021/02/akko-3108_luffy_800_1.jpg" alt="" />
                </div>
            </div>
            <div className={cx('featured')}>
                <div>
                    <div className={cx('featured-box')}>
                        <div>
                            <div className={cx('featured-box-icon')}>
                                <img src="https://akko.vn/wp-content/uploads/2021/02/free-delivery.png" alt="" />
                            </div>
                            <div className={cx('featured-box-content')}>
                                <h5>Miễn phí vận chuyển</h5>
                                <p>
                                    Tất cả sản phẩm được đặt hàng tại Akko.vn đều được miễn phí vận chuyển. Khách hàng
                                    được kiểm tra hàng trước khi thanh toán.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('featured-box')}>
                        <div>
                            <div className={cx('featured-box-icon')}>
                                <img src="https://akko.vn/wp-content/uploads/2021/02/customer-service.png" alt="" />
                            </div>
                            <div className={cx('featured-box-content')}>
                                <h5>Hỗ trợ 247</h5>
                                <p>Hỗ trợ khách hàng trực tuyến về mua hàng cũng như các thắc mắc về sản phẩm .</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('featured-box')}>
                        <div>
                            <div className={cx('featured-box-icon')}>
                                <img src="https://akko.vn/wp-content/uploads/2021/02/warranty.png" alt="" />
                            </div>
                            <div className={cx('featured-box-content')}>
                                <h5>Chế độ bảo hành vượt trội</h5>
                                <p>
                                    Tất cả sản phẩm Akko đều được bảo hành 12 tháng, 1 đổi 1. Trung tâm bảo hành toàn
                                    quốc
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
