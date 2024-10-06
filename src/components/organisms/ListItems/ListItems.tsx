import Item from "../../molecules/Item/Item";

interface ListItemsProps {
  data: Item[];
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
