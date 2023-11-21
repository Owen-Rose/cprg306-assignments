import React, { useState, useEffect } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const getMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
    }
  };

  useEffect(() => {
    if (ingredient) {
      getMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div>
      <h3>Meal Ideas for {ingredient}</h3>
      <ul>
        {meals &&
          meals.map((meal) => <li key={meal.idMeal}>{meal.strMeal}</li>)}
      </ul>
    </div>
  );
};
export default MealIdeas;
