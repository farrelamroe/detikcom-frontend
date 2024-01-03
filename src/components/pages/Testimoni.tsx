import React, { useState, useRef } from "react";
import {
  Swiper,
  SwiperSlide,
  useSwiper,
  // Navigation,
  // Pagination,
  // EffectCoverflow,
  // Autoplay,
} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import Image from "next/image";
export function Testimoni() {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiperRef: any = useRef();
  const data = [
    {
      text: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
      imageUrl: "/images/avatar.png",
      name: "Chealsea Morgan",
      job: "CEO ot Subway",
    },
    {
      text: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
      imageUrl: "/images/avatar-2.png",
      name: "Nick Cave",
      job: "CMO ot Nokia",
    },
    {
      text: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
      imageUrl: "/images/avatar-3.png",
      name: "Lana Rosenfeld",
      job: "Senior VP ot Pinterest",
    },
  ];
  return (
    <>
      <div className="bg-white font-lexend">
        <p className="text-[34px] leading-[42px] font-bold font-lexend text-primary-300 pt-[120px] px-[40px] text-center md:text-[50px] md:leading-[64px] md:pt-[100px]">
          What people say about Team
        </p>
        <Swiper
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
          className="mx-12 my-6 h-[75%]"
          // modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          grabCursor={true}
          // effect="coverflow"
          coverflowEffect={{
            scale: 0,
            rotate: 0,
            stretch: 0,
            depth: 0,
            slideShadows: false,
          }}
          // autoplay={{
          //   delay: 2500,
          // }}
          direction="horizontal"
          centeredSlides={true}
          breakpoints={{
            568: {
              coverflowEffect: {
                scale: 1,
                rotate: 0,
                stretch: 0,
                depth: 100,
                slideShadows: false,
              },
              direction: "horizontal",
              slidesPerView: 2,
              spaceBetween: 0,
              centeredSlides: true,
            },
            1440: {
              coverflowEffect: {
                scale: 1,
                rotate: 0,
                stretch: 0,
                depth: 100,
                slideShadows: false,
              },
              direction: "horizontal",
              slidesPerView: 3,
              spaceBetween: 0,
              centeredSlides: true,
            },
          }}>
          {data.map(({ name, text, job, imageUrl }) => {
            return (
              <SwiperSlide key="">
                <div className="bg-pure-white w-[260px] px-[33px] shadow-[0px_16px_24px_0px_primary-200 lg:w-[367px] mt-[80px] lg:mt-[120px]">
                  <div className="pt-[44px]">
                    <Image
                      src="/images/rating.png"
                      alt=""
                      height={1000}
                      width={1000}
                      className="h-[32px] w-[162.4px]"
                    />
                  </div>
                  <p className="text-[16px] leading-[24px] font-regular opacity-90 font-lexend text-primary-300 pt-[24px] lg:text-[18px]">
                    {text}
                  </p>
                  <div className="pt-[40px] flex flex-row justify-center items-center gap-x-[14px] pb-[44px] md:pb-[151px] lg:pb-[164px]">
                    <Image
                      src={imageUrl}
                      alt=""
                      height={1000}
                      width={1000}
                      className="h-[56px] w-[56px] items-center"
                    />
                    <div className="flex-flex-col gap-y-[2px] ">
                      <p className="text-[24px] leading-[30px] text-primary-300">
                        {name}
                      </p>
                      <p className="text-[14px] leading-[23px] text-primary-400">
                        {job}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex flex-row justify-center items-center gap-x-[24px] pb-[131px] md:pb-[151px] lg:pb-[164px]">
          <Image
            src="/images/arrow-left.png"
            width={50}
            height={50}
            alt=""
            className={` h-[32px] w-[32px] ${
              swiperIndex == 0 ? "opacity-50" : ""
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <Image
            src="/images/arrow-right.png"
            width={50}
            height={50}
            alt=""
            className={`h-[32px] w-[32px] ${
              swiperIndex == data.length - 1 ? "opacity-50" : ""
            }`}
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
    </>
  );
}

export default Testimoni;
