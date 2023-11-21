"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import Itemsdata from "./items.json";
import Item from "./item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(Itemsdata);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDelete = (name) => {
    setItems(items.filter((item) => item.name !== name));
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[^a-zA-Z ]/g, "")
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-slate-950">
      <div className="flex">
        <div className="w-1/2">
          <NewItem onAddItem={(item) => handleAddItem(item)} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
