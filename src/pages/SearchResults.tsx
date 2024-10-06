import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListItems from "../components/organisms/ListItems/ListItems";
import BreadCrumb from "../components/molecules/BreadCrumb/BreadCrumb";

export default function SearchResults() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("search");
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const response = fetch(`/api/items?q=${query}`);

    response
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
        setCategories(data.categories);
        localStorage.setItem("categories", JSON.stringify(data.categories));
      });
  }, [query]);

  return (
    <section className="search-results">
      <BreadCrumb categories={categories} />
      <ListItems data={items} />
    </section>
  );
}
