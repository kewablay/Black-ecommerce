import React from "react";
import ReviewCard from "./ReviewCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/css/scrollbar";

function CustomerReviews() {
  const reviews = [
    {
      message:
        "The flexible payment options made buying my iPhone a breeze. The 0% financing for 6 months. Love it!",
      image: "/src/assets/images/Esther-Howard.png",
      name: "Esther Howard",
    },
    {
      message:
        "The 3-month financing option on my Galaxy S21 Ultra was fantastic. Easy checkout and swift delivery. ",
      image: "/src/assets/images/Jacob-Jones.png",
      name: "Jacob Jones",
    },
    {
      message:
        "Absolutely thrilled with my AirPods purchase! The 1-year financing plan made it so convenient for me. Love it!",
      image: "/src/assets/images/Ralph-Edward.png",
      name: "Ralph Edwards",
    },
  ];

  return (
    <div className="container px-5 py-16 mx-auto mb-20 sm:px-8 bg-primaryLighter rounded-xl">
      {/* section title  */}
      <div className="mb-10 flex-between">
        <h3 className="section-title">Customer Reviews</h3>
        {/* <div className="flex gap-4">
          <button>Left</button>
          <button>Right</button>
        </div> */}
      </div>
      {/* section title end */}

      {/* review list  */}
      <div>
        <Swiper
          // centeredSlides={true}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
          // slidesPerView={2}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 1.2 },
            992: { slidesPerView: 1.7 },
            1200: { slidesPerView: 2.1 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide>
              <ReviewCard
                key={index}
                message={review.message}
                image={review.image}
                name={review.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CustomerReviews;
