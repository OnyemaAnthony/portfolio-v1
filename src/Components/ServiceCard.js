import React from "react";
import {
  ServiceCards,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./GenComponents";

function ServiceCard({ Icon, text, description }) {
  return (
    <>
      <ServiceCards>
        <ServicesIcon src={Icon} />
        <ServicesH2>{text}</ServicesH2>
        <ServicesP>{description}</ServicesP>
      </ServiceCards>
    </>
  );
}

export default ServiceCard;
