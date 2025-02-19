// src/pages/RegisterForm.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';

const RegisterForm = () => {
  const [userData, setUserData] = useState({ username: '', email: '', password: '', role: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(userData); // Tiesiog iškviečiame funkciją be kintamojo
      alert('User registered successfully!');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={userData.username} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
      </label>
      <label>
        Role:
        <select name="role" value={userData.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </select>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
