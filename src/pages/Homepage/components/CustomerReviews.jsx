import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/scrollbar";
import ReviewCard from "./ReviewCard";
import SwipperNavButtons from "components/shared/SwipperNavButtons";

function CustomerReviews() {
  const swipper = useSwiper();

  const reviews = [
    {
      message:
        "The flexible payment options made buying my iPhone a breeze. The 0% financing for 6 months. Love it!",
      image: "public/images/Esther-Howard.png",
      name: "Esther Howard",
    },
    {
      message:
        "The 3-month financing option on my Galaxy S21 Ultra was fantastic. Easy checkout and swift delivery. ",
      image: "public/images/Jacob-Jones.png",
      name: "Jacob Jones",
    },
    {
      message:
        "Absolutely thrilled with my AirPods purchase! The 1-year financing plan made it so convenient for me. Love it!",
      image: "public/images/Ralph-Edward.png",
      name: "Ralph Edwards",
    },
  ];

  return (
    <div className="py-16 section-contained sm:px-8 bg-primaryLighter rounded-xl">
      {/* section title */}
      <div className="mb-10 text-center">
        <small className="text-textGray text-200">WHAT THEY SAY</small>
        <h3 className="section-title">Customer Reviews</h3>
      </div>
      {/* section title end */}

      {/* review list  */}
      <div>
        <Swiper
          // centeredSlides={true}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          // slidesPerView={2}
          breakpoints={{
            380: { slidesPerView: 1 },
            768: { slidesPerView: 1.2 },
            992: { slidesPerView: 1.7 },
            1200: { slidesPerView: 2.1 },
            1536: { slidesPerView: 2.5 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                key={index}
                message={review.message}
                image={review.image}
                name={review.name}
              />
            </SwiperSlide>
          ))}
          <div className="mt-5 flex-center">
            <SwipperNavButtons />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default CustomerReviews;
