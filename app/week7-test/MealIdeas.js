"use client";

import { useState, useEffect, React } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    const response = await fetch(
      `https//:www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals;
  }

  async function loadMealIdeas() {
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="flex-1 max-w-sm m-2">
      <h3 className="text-xl font-bold">Meal ideas for {ingredient}</h3>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
