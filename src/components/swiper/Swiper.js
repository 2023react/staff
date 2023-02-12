import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./swiper.module.scss";
import { Pagination, Autoplay, Navigation } from "swiper";
import Avatar from "@mui/material/Avatar";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BasicButtons from "../../UI/Button";
import parse from "html-react-parser";
import HeartIcon from "../../UI/HeartIcon";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  useGetFiltredDataQuery,
  useGetjobQuery,
} from "../../store/slices/dataControlRTKQ";
import { useState } from "react";
import { useCallback } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
import draftToHtml from "draftjs-to-html";

// export const SwiperComponent = () => {
//   const jobData = useSelector((state) => state.jobsSlice.jobsData);

//   return (
//     <Swiper
//       breakpoints={{
//         380: {
//           width: 380,
//           slidesPerView: 1,
//         },
//       }}
//       slidesPerView={3}
//       spaceBetween={50}
//       loop={true}
//       pagination={{
//         clickable: true,
//         el: ".swiper-pagination",
//       }}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       modules={[Pagination, Autoplay]}
//       className={styles.mySwiper}
//     >
//       {jobData.map((item) => (
//         <div>
//           <SwiperSlide className={styles.swiper} key={uuid()}>
//             <div className={styles.swiper_info}>
//               <div className={styles.imageBlog}>
//                 <img className={styles.image} src={item.item.photoUrl} />
//               </div>
//               <div className={styles.name}>
//                 <div className={styles.avatar}>
//                   <Avatar sx={{ background: "#424548" }}>
//                     <LocalFireDepartmentIcon
//                       sx={{ color: "#fc6c33", fontSize: "30px" }}
//                     />
//                   </Avatar>
//                 </div>
//                 <div className={styles.nameInfo}>
//                   <h2>{item.item.jobName}</h2>
//                 </div>
//                 <span>{item.item.companyName}</span>
//               </div>
//             </div>
//             <div className={styles.text}>
//               <p>{item.item.jobDescription}</p>
//             </div>
//             <div className={styles.jobInfoButton}>
//               <BasicButtons size="small" variant="Follow">
//                 <HeartIcon />
//                 Follow
//               </BasicButtons>
//               <BasicButtons size="small" variant="ViewMore">
//                 View more
//               </BasicButtons>
//             </div>
//           </SwiperSlide>
//         </div>
//       ))}
//       <div className={styles.pagination_padding}></div>
//       <div>
//         <div class="swiper-pagination"></div>
//       </div>
//     </Swiper>
//   );
// };
export const SwiperComponent = () => {
  const jobDatas = useSelector((state) => state.jobsSlice.jobsData);
  const jobCategory = useSelector((state) => state.filterSlice.jobCategory);
  const pathname = useLocation().pathname;
  const isHomePage = pathname === "/";
  const jobsType = jobCategory.map((item) => where("jobCategory", "==", item));

  const filterHints = [...jobsType];
  const { data: jobData } = useGetFiltredDataQuery({
    filterHints,
  });

  console.log("d", jobData);
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      spaceBetween={40}
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
        <SwiperSlide className={styles.slide}>
          <div className={styles.swiper_info}>
            <div className={styles.imageBlog}>
              <img className={styles.image} src={item.item.photoUrl} />
            </div>
            <div className={styles.name}>
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
                <p>{item.item.jobName}</p>
              </div>
              <p
                className={`${styles.span} ${[
                  isHomePage ? "" : styles.spanSmall,
                ]}`}
              >
                {item.item.companyName}
              </p>
            </div>
          </div>
          <div className={styles.text}>
            {parse(`${draftToHtml(jobData.description)}`)}
            {/* <p>{item.item.jobDescription}</p> */}
            <p>{parse(`${draftToHtml(item.item.description)}`)}</p>
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
      ))}

      <div className={`  ${[isHomePage ? "" : styles.dots]}`}>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};
