import { Swiper, SwiperSlide } from "swiper/react";
import { jobsData } from "../constants/jobsdata";
// Import Swiper styles
import "swiper/css";
import JobTitle from "./JobTitle";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {" "}
      {jobsData.map((job) => {
        return (
          <SwiperSlide>
            Slide 1 <JobTitle {...job} />;
          </SwiperSlide>
        );
      })}
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};
