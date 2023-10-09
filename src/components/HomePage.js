import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';  // Assuming you'll add some styling

function HomePage() {
    return (
        <div className="home-container">
      <h1>Welcome to Our Food Calender</h1>
           <div className='link-container'>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            </div>
        </div>
        
    );
}

export default HomePage;
