import React from "react";
import FreeShipping from "../../atoms/FreeShipping/FreeShipping";
import formatPrice from "../../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

export default function Item({
  id,
  title,
  price,
  free_shipping,
  location,
  picture,
}: Item) {
  const navigate = useNavigate();
  const hangleRedirect = (e: any) => {
    e.preventDefault();
    navigate(`/items/${id}`);
  };

  return (
    <a href={`/items/${id}`} onClick={hangleRedirect} className="item" key={id}>
      <img className="item__image" src={picture} alt="" />
      <div className="item__information">
        <div className="item__information-box">
          <div className="item__information-box-price">
            <h2>$ {formatPrice(price.amount)}</h2>
            {free_shipping && (
              <FreeShipping className="item__information-box-price-shipping" />
            )}
          </div>
          <p>{location}</p>
        </div>
        <p className="item__information-description">{title}</p>
      </div>
    </a>
  );
}
