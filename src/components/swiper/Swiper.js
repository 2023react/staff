import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./swiper.module.scss";
import { Link } from "react-router-dom";
import { Pagination, Autoplay, Navigation } from "swiper";
import Avatar from "@mui/material/Avatar";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BasicButtons from "../../UI/Button";
import parse from "html-react-parser";
import HeartIcon from "../../UI/HeartIcon";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { v4 as uuid } from "uuid";
<<<<<<< HEAD
import { useGetFiltredINQuery } from "../../store/slices/dataControlRTKQ";
=======
import { useGetFiltredWhereQuery } from "../../store/slices/dataControlRTKQ";
>>>>>>> 2d3e9719d7e126e6c97fb41f98d5ebff5d7cf1d4

import { where } from "firebase/firestore";

import draftToHtml from "draftjs-to-html";
import { Link } from "react-router-dom";

export const SwiperComponent = () => {
  const jobCategory = useSelector((state) => state.filterSlice.jobCategory);
  const pathname = useLocation().pathname;
  const isHomePage = pathname === "/";
  const jobsType = jobCategory.map((item) => where("jobCategory", "==", item));
  const navigate = useNavigate();
  const filterHints = [...jobsType];
<<<<<<< HEAD
  const { data: jobData } = useGetFiltredINQuery({
=======
  const { data: jobData } = useGetFiltredWhereQuery({
>>>>>>> 2d3e9719d7e126e6c97fb41f98d5ebff5d7cf1d4
    filterHints,
  });

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      spaceBetween={45}
      slidesPerView={3}
      className={`${styles.swiperMain} ${[isHomePage ? "" : styles.swiper]}`}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      navigation={true}
    >
      {jobData?.map((item) => (
        <SwiperSlide className={styles.slide} key={uuid()}>
          <Link to={`/jobs/${item.id}`}>
            <div className={styles.swiper_info}>
              <div
                className={`${styles.imageBlog} ${[
                  isHomePage ? "" : styles.smallImageB,
                ]}`}
                src={item.item.img}
              >
                <img
                  className={`${styles.image} ${[
                    isHomePage ? "" : styles.smallImage,
                  ]}`}
                  src={item.item.img}
                  alt=""
                />
              </div>
              <div
                className={`${styles.name} ${[
                  isHomePage ? "" : styles.nameSmall,
                ]}`}
              >
                <div className={styles.avatar}>
                  <Avatar sx={{ background: "#424548" }}>
                    <LocalFireDepartmentIcon
                      sx={{ color: "#fc6c33", fontSize: "30px" }}
                    />
                  </Avatar>
                </div>
                <div
                  className={`${styles.nameInfo} ${[
                    isHomePage ? "" : styles.nameInfoSmall,
                  ]}`}
                >
                  <div>{item.item.jobName}</div>
                </div>
                <div
                  className={`${styles.span} ${[
                    isHomePage ? "" : styles.spanSmall,
                  ]}`}
                >
                  {item.item.companyName}
                </div>
              </div>
            </div>
            <div
              className={`${styles.text} ${[
                isHomePage ? "" : styles.smallText,
              ]}`}
            >
              <div>{parse(`${draftToHtml(item.item.description)}`)}</div>
            </div>
<<<<<<< HEAD
          </div>
          <div
            className={`${styles.text} ${[isHomePage ? "" : styles.smallText]}`}
          >
            <div>{parse(`${draftToHtml(item.item.description)}`)}</div>
          </div>
          <div className={styles.jobInfoButton}>
            <BasicButtons size="small" variant="Follow">
              <HeartIcon />
              Follow
            </BasicButtons>

            <Link to={`jobs/${item.id}`}>
              <BasicButtons size="small" variant="ViewMore">
                View more
              </BasicButtons>
            </Link>
          </div>
=======
            <div className={styles.jobInfoButton}>
              <BasicButtons size="small" variant="Follow">
                <HeartIcon />
                Follow
              </BasicButtons>
              <BasicButtons size="small" variant="ViewMore">
                View more
              </BasicButtons>
            </div>
          </Link>
>>>>>>> 2d3e9719d7e126e6c97fb41f98d5ebff5d7cf1d4
        </SwiperSlide>
      ))}

      <div className={`  ${[isHomePage ? "" : styles.dots]}`}>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};
