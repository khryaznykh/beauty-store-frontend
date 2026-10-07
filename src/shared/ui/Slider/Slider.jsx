import { Stack } from "../Stack/Stack";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import styles from './Slider.module.scss';

import "swiper/css";
import "swiper/css/pagination";

    const PaginationColors = {
        WHITE: "#ffffff",
        GREY: "#484848",
        YELLOW: "#FDCE16",
        GREEN: "#003D2B",
    };

    const Slider = ({
        slides=[],
        slidesPerView = 3,
        paginationColor = PaginationColors.GREEN,
        children
    }) => {

        if (!slides.length) {
            return null;
        }

        return (
            <Stack className={styles.sliderContainer}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpointsBase="window"
                    breakpoints={{
                        // tablet
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        // desktop
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }}
                    // loop={slides.length > 3}
                    pagination={{
                        clickable: true
                    }}
                    style={{
                        "--swiper-pagination-color": paginationColor,
                        "--swiper-pagination-bullet-inactive-color": paginationColor,
                        "--swiper-pagination-bullet-inactive-opacity": "0.3"
                    }}
                    className={styles.swiper}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide._id}>
                            {children(slide)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Stack>
        );
    };
export default Slider;