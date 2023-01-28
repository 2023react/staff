import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./swiper.module.scss";
import { jobsData } from "../../constants/jobsdata";
import { Pagination, Autoplay } from "swiper";
import Avatar from "@mui/material/Avatar";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BasicButtons from "../../UI/Button";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { COLORS } from "../../constants/styles";

export const SwiperComponent = () => {
  const customButtonStylesRed = {
    textTransform: "none",
    "&:hover": {
      color: "white",
      backgroundColor: COLORS.customRed,
    },
  };
  const heartIconStyles = {
    width: "18px",
    marginRight: "5px",
  };
  const customButtonStylesGreen = {
    textTransform: "none",
    "&:hover": {
      color: "white",
      backgroundColor: COLORS.customGreen,
    },
  };

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
      // loopFillGroupWithBlank={false}
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
      {jobsData.map((item) => (
        <div>
          <SwiperSlide className={styles.swiper}>
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
                  {/* <span>{item.companyName}</span> */}
                </div>
                <span>{item.companyName}</span>
              </div>
            </div>
            <div className={styles.text}>
              <p>{item.jobDescription}</p>
            </div>
            <div className={styles.jobInfoButton}>
              <BasicButtons
                size="small"
                color="customRed"
                variant="outlined"
                customStyles={customButtonStylesRed}
              >
                <FavoriteBorderIcon
                  sx={{ ...heartIconStyles }}
                ></FavoriteBorderIcon>
                Follow
              </BasicButtons>
              <BasicButtons
                size="small"
                variant="outlined"
                sx={{ ...customButtonStylesGreen }}
              >
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
