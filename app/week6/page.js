"use client"
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import Itemsdata from "./items.json";
import Item from "./item";

export default function Page() {

    const [items, setItems] = useState(
        Itemsdata.map((item) => ({
            ...item,
        }))
    );

    return (
        <main className="bg-slate-950">
            <NewItem />
            <ItemList />
            
        </main>
    );
}