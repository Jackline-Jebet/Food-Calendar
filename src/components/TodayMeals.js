import React, { useState, useEffect } from 'react';
import '../styles/TodayMeals.css'
const meals = {
    "Monday": {
      "Breakfast": "Pancakes",
      "Lunch": "Ugali Greens",
      "Dinner": "Ugali Greens"
    },
    "Tuesday": {
      "Breakfast": "Milkshake",
      "Lunch": "Rice Beans",
      "Dinner": "Rice Beans"
    },
    "Wednesday": {
      "Breakfast": "Mandazi",
      "Lunch": "Ugali Omena/Fish",
      "Dinner": "Ugali Omena/Fish"
    },
    "Thursday": {
      "Breakfast": "Fried Eggs",
      "Lunch": "Rice Ndengu",
      "Dinner": "Rice Ndengu"
    },
    "Friday": {
      "Breakfast": "Milkshake",
      "Lunch": "Ugali Beef & Greens",
      "Dinner": "Ugali Beef & Greens"
    },
    "Saturday": {
      "Breakfast": "Bread/Eggs",
      "Lunch": "Rice Beans & cabbage",
      "Dinner": "Rice Beans"
    },
    "Sunday": {
      "Breakfast": "Pancakes",
      "Lunch": "Potato Stew/Rice",
      "Dinner": "Potato Stew/Rice"
    },
  };

function TodayMeals() {
    const [todayMeals, setTodayMeals] = useState({});

    // useEffect(() => {
        useEffect(() => {
        const today = new Date().toLocaleString('default', { weekday: 'long' });
        setTodayMeals(meals[today]);
        // const today = new Date().toLocaleString('default', { weekday: 'long' });
        // const todayMeals = meals[today] || {};
        
        fetch(`http://localhost:5000/meals/${today}`)
            .then(res => res.json())
            .then(data => setTodayMeals(data))
            .catch(error => console.error('Error fetching meals:', error));
    }, []);

    return (
        <div className='todayMeal'>
            <h2>Fel & Jackie's Homation</h2>
            <div className='todayMeals'>
            <h1>Today's Meals</h1>
            {todayMeals.Breakfast && <p><strong>Breakfast:</strong> {todayMeals.Breakfast}</p>}
            {todayMeals.Lunch && <p><strong>Lunch:</strong> {todayMeals.Lunch}</p>}
            {todayMeals.Dinner && <p><strong>Dinner:</strong> {todayMeals.Dinner}</p>}
        </div>
        </div>
    );
}

export default TodayMeals;
