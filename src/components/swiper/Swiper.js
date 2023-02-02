import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./swiper.module.scss";
import { Pagination, Autoplay } from "swiper";
import Avatar from "@mui/material/Avatar";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BasicButtons from "../../UI/Button";
import { v4 as uuid } from "uuid";
import HeartIcon from "../../UI/HeartIcon";

export const SwiperComponent = ({ jobData }) => {
  return (
    <Swiper
      breakpoints={{
        380: {
          width: 380,
          slidesPerView: 1,
        },
      }}
      slidesPerView={3}
      spaceBetween={50}
      loop={true}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className={styles.mySwiper}
    >
      {jobData.map((item) => (
        <div>
          <SwiperSlide className={styles.swiper} key={uuid()}>
            <div className={styles.swiper_info}>
              <div className={styles.imageBlog}>
                <img className={styles.image} src={item.photoUrl} />
              </div>
              <div className={styles.name}>
                <div className={styles.avatar}>
                  <Avatar sx={{ background: "#424548" }}>
                    <LocalFireDepartmentIcon
                      sx={{ color: "#fc6c33", fontSize: "30px" }}
                    />
                  </Avatar>
                </div>
                <div className={styles.nameInfo}>
                  <h2>{item.jobName}</h2>
                </div>
                <span>{item.companyName}</span>
              </div>
            </div>
            <div className={styles.text}>
              <p>{item.jobDescription}</p>
            </div>
            <div className={styles.jobInfoButton}>
              <BasicButtons size="small" variant="Follow">
                <HeartIcon />
                Follow
              </BasicButtons>
              <BasicButtons size="small" variant="ViewMore">
                View more
              </BasicButtons>
            </div>
          </SwiperSlide>
        </div>
      ))}
      <div className={styles.pagination_padding}></div>
      <div>
        <div class="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};
