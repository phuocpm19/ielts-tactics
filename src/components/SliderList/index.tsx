import React from 'react';
import Slider from 'react-slick';

import styles from './styles.module.scss';

export interface ISliderListProps {}

export default function SliderList(props: ISliderListProps) {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div className={styles.SliderList}>
      <Slider {...settings}>
        <div className={styles.SliderList__item}>
          <h3>1</h3>
        </div>
        <div className={styles.SliderList__item}>
          <h3>2</h3>
        </div>
        <div className={styles.SliderList__item}>
          <h3>3</h3>
        </div>
        <div className={styles.SliderList__item}>
          <h3>4</h3>
        </div>
        <div className={styles.SliderList__item}>
          <h3>5</h3>
        </div>
        <div className={styles.SliderList__item}>
          <h3>6</h3>
        </div>
        <div className={styles.SliderList__item}>
          <h3>7</h3>
        </div>
        <div className={styles.SliderList__item}>
          <h3>8</h3>
        </div>
        <div className={styles.SliderList__item}>
          <h3>9</h3>
        </div>
        <div className={styles.SliderList__item}>
          <h3>10</h3>
        </div>
      </Slider>
    </div>
  );
}
