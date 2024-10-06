import React from "react";
import logo from "../../../assets/ml-image-logo.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return <img className={className} src={logo} alt="Logo de Mercado Libre" />;
}
