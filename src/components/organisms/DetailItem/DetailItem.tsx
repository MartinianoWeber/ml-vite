import React, { useEffect } from "react";
import { Detail } from "../../../interfaces/detail.interface";
import formatPrice from "../../../utils/formatPrice";
export default function DetailItem({
  id,
  title,
  price,
  picture,
  condition,
  free_shipping,
  location,
  sold_quantity,
  description,
}: Detail) {
  return (
    <article className="detail-item">
      <div className="detail-item__header">
        <img className="detail-item__header-image" src={picture} alt="" />
        <div className="detail-item__header-information">
          <p className="detail-item__header-information-sold">
            {condition} - {sold_quantity || 0} vendidos
          </p>
          <h1 className="detail-item__header-information-title">{title}</h1>
          <p className="detail-item__header-information-price">
            $ {formatPrice(price.amount)} <span>{price.decimals}</span>
          </p>
          <button className="detail-item__header-information-button">
            Comprar
          </button>
        </div>
      </div>
      <div className="detail-item__description">
        <h3>Descripción del producto</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
