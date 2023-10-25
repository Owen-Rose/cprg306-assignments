"use client";

import Item from "./item";
import React from "react";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <div>
          <label htmlFor="sort">Sort by:</label>
          <button
            onClick={() => setSortBy("name")}
            className={`p-1 m-2 w-28 ${
              sortBy === "name" ? "bg-orange-500" : "bg-orange-700"
            }`}
          >
            Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={`p-1 m-2 w-28 ${
              sortBy === "category" ? "bg-orange-500" : "bg-orange-700"
            }`}
          >
            Category
          </button>
        </div>
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
