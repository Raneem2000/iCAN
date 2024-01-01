import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/";
// import "swiper/css/free-mode";
import "../components/Css/slider.css";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../Data/constants";
import "../components/Css/header.css";
const ActiveSlider = () => {
  return (
    <div className="serv swip  flex items-center justify-center flex-col h-[900px] bg-[#6c34af]" id="project">
      <h2 class="main-title">Projects</h2>

      <Swiper
        breakpoints={{
          1500:{
            slidesPerView: 3,
            spaceBetween: 5,
          },
          // 340: {
          //   slidesPerView: 2,
          //   spaceBetween: 15,
          // },
          700: {
            slidesPerView: 2,
            spaceBetween: 5,
          },

        }}
        loop={true}
        initialSlide={0}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="swipp max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="box flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div className="image absolute inset-0 bg-cover bg-center">
                <img style={{background: "#f3e351"}} />
              </div>
              <div className="card absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="all relative flex flex-col gap-3">
                <item.icon className="icon  text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="title text-xl lg:text-2xl">{item.title} </h1>
                <p className="content lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="arrow absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
