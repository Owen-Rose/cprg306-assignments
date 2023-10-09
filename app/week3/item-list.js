import Item from "./item";
import React from "react";

export default function ItemList() {
    const itemList = [
        {
            name: "milk, 4 L 🥛",
            quantity: 1,
            category: "dairy",
        },
           
        {
            name: "bread 🍞",
            quantity: 2,
            category: "bakery",
        },
           
        {
            name: "eggs, dozen 🥚",
            quantity: 2,
            category: "dairy",
        },
           
        {
            name: "bananas 🍌",
            quantity: 6,
            category: "produce",
        },
           
        {
            name: "broccoli 🥦",
            quantity: 3,
            category: "produce",
        },
           
        {
            name: "chicken breasts, 1 kg 🍗",
            quantity: 1,
            category: "meat",
        },
           
        {
            name: "pasta sauce 🍝",
            quantity: 3,
            category: "canned goods",
        },
           
        {
            name: "spaghetti, 454 g 🍝",
            quantity: 2,
            category: "dry goods",
        },
           
        {
            name: "toilet paper, 12 pack 🧻",
            quantity: 1,
            category: "household",
        },
           
        {
            name: "paper towels, 6 pack",
            quantity: 1,
            category: "household",
        },
           
        {
            name: "dish soap 🍽️",
            quantity: 1,
            category: "household",
        },
           
        {
            name: "hand soap 🧼",
            quantity: 4,
            category: "household",
        }
    ]
    
    return (
        <div>
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <ul>
                {itemList.map(item => (
                    <Item key={item.name} name = {item.name} quantity = {item.quantity} category = {item.category} />
                ))}
            </ul>
        </div>
    )
}