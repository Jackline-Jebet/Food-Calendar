import React from 'react';
import TodayMeals from './components/TodayMeals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/App.css';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';


function App() {

  return (
    <Router>
        <div className="App">
            <Routes>
            <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/calendar" element={<TodayMeals />} />
            </Routes>
        </div>
    </Router>
    // <div className="App">
    //   <h1>Today's Meals</h1>
    //   {todayMeals && (
    //     <div>
    //       <p><strong>Breakfast:</strong> {todayMeals.Breakfast}</p>
    //       <p><strong>Lunch:</strong> {todayMeals.Lunch}</p>
    //       <p><strong>Dinner:</strong> {todayMeals.Dinner}</p>
    //     </div>
    //   )}
    // </div>
  );
}

export default App;
