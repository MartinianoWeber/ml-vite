import React from "react";
import freeShipping from "../../../assets/freeShipping.svg";

interface FreeShippingProps {
  className?: string;
}

export default function FreeShipping(props: FreeShippingProps) {
  return (
    <img src={freeShipping} className={props.className} alt="Envío gratis" />
  );
}
