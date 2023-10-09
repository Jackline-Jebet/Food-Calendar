import React, { useState } from 'react';
import "../styles/RegisterPage.css";


function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send data to backend
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            // Optionally, redirect to login page or elsewhere
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className='register'>
            <h2>Register</h2>
            <div className="glass-form">
            <form onSubmit={handleSubmit}>
                {/* <div> */}
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder='Choose a username' required />
                {/* </div> */}
                {/* <div> */}
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange}  placeholder="Choose a password" required />
                {/* </div> */}
                <button type="submit">Register</button>
            </form>
         </div>
        </div>
    );
}

export default RegisterPage;
