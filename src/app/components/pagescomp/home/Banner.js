import React from 'react'
import BannerItem from './BannerItem'

const Banner = () => {
  return (
    <>
        <section class="tp-slider-area p-relative z-index-1">
            <div class="tp-slider-active-2 swiper-container">
                <div class="swiper-wrapper">
                    <BannerItem/>
                </div>
                <div class="tp-swiper-dot tp-slider-2-dot"></div>
            </div>
        </section>

    </>
  )
}

export default Banner
