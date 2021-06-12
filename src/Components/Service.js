import React from "react";
import {
  ServiceBg,
  ServiceContainer,
  VideoBg,
  ServicesH1,
  ServicesWrapper,
  ServiceContent,
} from "./GenComponents";
import Video from "../videos/videoBg.mp4";
import Icon1 from "../images/svg-1.svg";
import Icon2 from "../images/svg-2.svg";
import Icon3 from "../images/svg-5.svg";
import Icon4 from "../images/svg-4.svg";
import Icon5 from "../images/svg-3.svg";
import Icon6 from "../images/svg-6.svg";
import Icon7 from "../images/svg-7.svg";
import Icon8 from "../images/svg-8.svg";
import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <>
      <ServiceContainer id="service">
        <ServiceBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
        </ServiceBg>
        <ServiceContent>
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
            <ServiceCard
              Icon={Icon1}
              text="Responsive websites.. "
              description="Get awesome responsive websites and landing pages that make more sales."
            />
            <ServiceCard
              Icon={Icon5}
              text="E-commerce and Trade. "
              description="Get your products to more customers and deliver them to anyone, anywhere in the world."
            />
            <ServiceCard
              Icon={Icon3}
              text="Digital Marketing "
              description="Promote your brand on top digital platforms and gain more customers."
            />
            <ServiceCard
              Icon={Icon7}
              text="Web and Database maitainance."
              description="Get a Nodejs backend for your project and store your data in a secure server."
            />
          </ServicesWrapper>
        </ServiceContent>
      </ServiceContainer>
    </>
  );
}

export default Service;
