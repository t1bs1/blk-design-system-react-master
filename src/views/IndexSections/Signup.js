import React, { useState, useRef, useEffect } from "react";
import Swiper from "component/variable/swiper.js";

const teamMembers = [
  {
    name: "Gilfred Petancio",
    position: "Technical Support/IT Man",
    details:
      "Gilfred is an experienced IT Man with over 10 years of experience. He has managed numerous successful projects across various industries.",
  },
  {
    name1: "Ralph Gacayan",
    position1: "Software Engineer",
    details1:
      "Ralph is a skilled software engineer with expertise in React and Node.js. He has worked on several web applications and is passionate about building great software.",
  },
  {
    name2: "Dale Enrico Calvo",
    position2: "OJT - Software Engineer",
    details2:
      "Dale is a talented OJT with a keen eye for detail. He has designed several award-winning websites and mobile apps, and is always looking for new design challenges.",
  },

];

const Signup = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.slidePrev();
    const newIndex = (currentMember - 1 + teamMembers.length) % teamMembers.length;
    setCurrentMember(newIndex);
  };

  const handleNext = () => {
    swiperRef.current.slideNext();
    const newIndex = (currentMember + 1) % teamMembers.length;
    setCurrentMember(newIndex);
  };

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 1,
      navigation: {
        prevEl: ".swiper-arrow-prev",
        nextEl: ".swiper-arrow-next",
      },
    });
    swiperRef.current = swiper;
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {teamMembers.map((member, index) => (
          <div className={`swiper-slide ${index === currentMember ? "active" : ""}`} key={index}>             
            <div className="card-container">
              <div className="card-image-container">
              <img className="card-image img-center img-fluid rounded-circle" srcSet={`${require("assets/img/gilfred.jpg")} 1x, ${require("assets/img/gilfred.jpg")} 2x`} sizes="(min-width: 768px) 200px, 100px" alt={member.name} />
              </div>
              <div className="card-details">
                <h2>{member.name}</h2>
                <h3>{member.position}</h3>
                <p>{member.details}</p>
              </div>
            </div>
            
            <div className="card-container">
              <div className="card-image-container">
              <img className="card-image img-center img-fluid rounded-circle" srcSet={`${require("assets/img/ralph.jpeg")} 1x, ${require("assets/img/ralph.jpeg")} 2x`} sizes="(min-width: 768px) 200px, 100px" alt={member.name} />
              </div>
              <div className="card-details">
                <h2>{member.name1}</h2>
                <h3>{member.position1}</h3>
                <p>{member.details1}</p>
              </div>
            </div>

            <div className="card-container">
              <div className="card-image-container">
              <img className="card-image img-center img-fluid rounded-circle" srcSet={`${require("assets/img/james.jpg")} 1x, ${require("assets/img/james.jpg")} 2x`} sizes="(min-width: 768px) 200px, 100px" alt={member.name} />
              </div>
              <div className="card-details">
                <h2>{member.name2}</h2>
                <h3>{member.position2}</h3>
                <p>{member.details2}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <div className="swiper-arrow-prev" onClick={handlePrev}>
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="swiper-arrow-next" onClick={handleNext}>
        <i className="fas fa-chevron-right"></i>
      </div>  
    </div>
  );
};

export default Signup;
