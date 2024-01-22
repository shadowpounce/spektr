import clsx from "clsx";
import styles from "./Welcome.module.scss";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect, useRef, useState } from "react";
import { ISwiper } from "../../../../interfaces";

export const Welcome = () => {
  const [swiper, setSwiper] = useState<ISwiper>();

  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiper) {
      if (!swiper.destroyed && swiperRef.current) {
        if (swiperRef.current) {
          swiperRef.current.addEventListener("mouseenter", () => {
            swiper.autoplay.pause();
            console.log(swiper);
          });
        }
      }
    }
  }, [swiper, swiperRef]);

  return (
    <section className={clsx("section", styles.welcome)}>
      <div className={styles.welcomeContainer}>
        <div className={styles.welcomeWrapper}>
          <p className={styles.welcomeText}>
            Welcome to the team. Lorem ipsum dolor sit amet consectetur. Lectus
            commodo tortor convallis volutpat et. Ornare vitae egestas diam
            luctus posuere. Leo a pellentesque sollicitudin non amet sed. Vitae
            eu duis commodo sed tellus.
          </p>
          <div ref={swiperRef} className={styles.welcomeCarouselWrapper}>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={(30 / 1728) * window.innerWidth}
              centeredSlides={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => setSwiper(swiper)}
              speed={15000}
              modules={[Autoplay]}
              className={styles.welcomeCarousel}
            >
              <SwiperSlide>
                <img src="/images/Careers/Welcome/1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/Careers/Welcome/2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/Careers/Welcome/3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/Careers/Welcome/4.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
