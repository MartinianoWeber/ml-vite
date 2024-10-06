import React, { useEffect, useState } from "react";
import DetailItem from "../components/organisms/DetailItem/DetailItem";
import { Detail } from "../interfaces/detail.interface";
import BreadCrumb from "../components/molecules/BreadCrumb/BreadCrumb";

export default function ProductDetail() {
  const [data, setData] = useState({
    id: "",
    title: "",
    price: {
      currency: "",
      amount: 0,
      decimals: 0,
    },
    picture: "",
    condition: "",
    free_shipping: false,
    location: "",
    sold_quantity: 0,
    description: "",
  } as Detail);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    fetch(`/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.item as Detail);
      });

    localStorage.getItem("categories") &&
      setCategories(JSON.parse(localStorage.getItem("categories") || ""));
  }, []);
  return (
    <section className="product-detail">
      <BreadCrumb categories={categories} />
      <section className="product-detail__product">
        {data.id && (
          <DetailItem
            id={data.id}
            title={data.title}
            price={data.price}
            picture={data.picture}
            condition={data.condition}
            free_shipping={data.free_shipping}
            location={data.location}
            sold_quantity={data.sold_quantity}
            description={data.description}
          />
        )}
      </section>
    </section>
  );
}
