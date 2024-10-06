import React, { useEffect } from "react";
import Item from "../../molecules/Item/Item";

interface ItemData {
  id: string;
  title: string;
  price: any;
  picture: string;
  condition: string;
  free_shipping: boolean;
  location: string;
}

interface ListItemsProps {
  data: ItemData[];
}

export default function ListItems({ data }: ListItemsProps) {
  return (
    <section className="list-items">
      {data &&
        data.length > 0 &&
        data.map((item: Item) => (
          <Item
            id={item.id}
            title={item.title}
            price={item.price}
            free_shipping={item.free_shipping}
            location={item.location}
            picture={item.picture}
          />
        ))}
    </section>
  );
}
