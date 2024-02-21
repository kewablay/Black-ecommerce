import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/css/scrollbar";
import Slide from "components/shared/Slide";

function Header() {
  console.log("HEADER RENDERED .........................");
  const slides = [
    {
      image: "/src/assets/images/iphone-hero.png",
      title: "IPhone Collections ",
      bg: "bg-secondary",
      category: "Mobile Phones",
    },
    {
      image: "/src/assets/images/samsung-hero.png",
      title: "Samsung Collections",
      bg: "bg-tertiary",
      category: "Mobile Phones",
    },
    {
      image: "/src/assets/images/airpods-hero.png",
      title: "Airpod Collections",
      category: "Phone Accessories",
      bg: "bg-secondaryLight",
    },
  ];

  return (
    <header className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              key={index}
              title={slide.title}
              image={slide.image}
              bg={slide.bg}
              subtext={slide.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}

export default Header;
