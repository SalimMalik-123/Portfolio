import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import bismi from "../../assets/project1.PNG";
import sytally from "../../assets/project2.PNG";
import foodapp from "../../assets/project3.PNG";
import smartMasjid from "../../assets/project4.PNG";

let data = [
  {
    img: bismi,
    disc: "Technologies : HTML,CSS, JavaScript, Bootstrap. Static eCommerce website user can purchase the product and checkout.",
    link: "https://bismidates.web.app/menu.html",
    title: "Bismi Dates",
  },
  {
    img: sytally,
    disc: "Technologies : HTML,CSS, JavaScript, Bootstrap. Static  website for  can Tax consultant client.",
    link: "https://sytallybiz-41e1d.web.app/",
    title: "SY TallyBiz",
  },
  {
    img: foodapp,
    disc: "Technologies : React JS, JavaScript,TypeScript HTML CSS, Bootstrap.Order food online for home delivery Web App. Experience fastest food delivery service App",
    link: "https://vgtsfoodapp.web.app/",
    title: "Food Delivery App",
  },
  {
    img: smartMasjid,
    disc: "Technologies : React JS, Java Spring Boot, Postgres SQL, Amazon AWS S3 Bucket.Provided essential functionalities for admin and support personnel to facilitate.",
    title: "Smart Masjid Admin App",
  },

  // {
  //     img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
  //     disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
  // }
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack style={{ fontWeight: "bold" }} size={20} />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward size={20} />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
