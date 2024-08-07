import { useState } from 'react';
import Slider from 'react-slick';
import './index.css';
import React from 'react';


// import icons
import {BsArrowLeft, BsArrowRight,} from 'react-icons/bs';

// import images
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.png';


const images = [img1, img2, img3, img4];
const speakerName = ['Prof. Dr. Alok Kumar Chakrawal, Guru Ghasidas Vishwavidyalaya, Bilaspur University, Billaspur',
                      'Prof. Dr. Hariom Puniyani, Hislop College, Nagpur',
                      'Prof. Dr. Dhiraj Ovhal, NSS College, Mumbai',
                      'Prof. Dr. Ananta Deshmukh, Department of Business Management RTM Nagpur University, Nagpur'

]

function SampleNextArrow({onClick}) {
  return (
    <div className='arrow arrow-right' onClick={onClick}>
      <BsArrowRight/>
    </div>
  );
}

function SamplePrevArrow({onClick}) {
  return (
    <div className='arrow arrow-left' onClick={onClick}>
      <BsArrowLeft/>
    </div>
  );
}
function EmptyArrow({onClick}) {
  return (
    <div></div>
  );
}

function ReactSlick() {

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (current, next)=>setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        }
      }]
  };

  return (
    <>
    <div className="container">
      <h2 className='header'>Keynote Speaker</h2>
        <div className="slider">
      <Slider {...settings}>
          {
            images.map((img, index)=>(
              <div className={index === slideIndex ? 'slide slide-active': 'slide'} key={index}>
                <img src={img} alt="" />
                <div class="overlay">{speakerName[index]}</div>
              </div>
            ))
          }
      </Slider>
        </div>
    </div>
    
    </>
  );
  
}

export default ReactSlick;