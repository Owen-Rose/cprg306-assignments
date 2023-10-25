"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import Itemsdata from "./items.json";
import Item from "./item";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const [items, setItems] = useState(Itemsdata);
  const [selectedItemName, setSelectedItemName] = useState();

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDelete = (name) => {
    setItems(items.filter((item) => item.name !== name));
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(",")[0].trim();
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="display flex bg-slate-950">
      <div>
        <NewItem onAddItem={(item) => handleAddItem(item)} />
        <ItemList onItemSelect={handleItemSelect} items={items} />
      </div>
      <div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
