"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import Itemsdata from "./items.json";
import Item from "./item";

export default function Page() {
  const [items, setItems] = useState(Itemsdata);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDelete = (name) => {
    setItems(items.filter((item) => item.name !== name));
  };

  return (
    <main className="bg-slate-950">
      <NewItem onAddItem={(item) => handleAddItem(item)} />
      <ItemList items={items} />
    </main>
  );
}
