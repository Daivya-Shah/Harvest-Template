
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    loop: true,
    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {
    return (
        <>
             
        <section className="slider-one">
            <div className="">
                <Swiper {...swiperOptions} className="slider-one__carousel owl-carousel owl-theme">
                    <SwiperSlide>
                        <div className="slider-one__single">
                            <div className="slider-one__single-bg"
                                style={{ backgroundImage: 'url(assets/images/banner/slider-v1-img1.jpg)' }} ></div>
                            <div className="container">
                                <div className="slider-one__single-inner">
                                    <div className="slider-one__single-content">
                                        <div className="tagline">
                                            <div className="round"></div>
                                            <div className="text"><span>Welcome to Harvest</span></div>
                                        </div>

                                        <div className="title-box">
                                            <h2>The Simple Way to Launch your<br/> <span>CPG Brand</span></h2>
                                        </div>

                                        <div className="text-box">
                                            <p>At Harvest, we understand that MOQs, pricing, and language barriers make starting a brand overwhelming. We simplify the process, letting you develop any food or beverage brand — no matter your resources.</p>
                                        </div>

                                        <div className="btn-box">
                                            <Link className="thm-btn" href="about">Get Started
                                                <i className="icon-right-arrow21"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        
        
            
        </>
    )
}
