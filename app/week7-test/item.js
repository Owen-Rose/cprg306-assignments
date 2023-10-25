import React from "react";

export default function Item({ id, name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm transform hover:scale-105 transition-transform ease-in duration-150 hover:bg-slate-700">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
