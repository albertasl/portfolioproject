import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // Jei backend'as naudoja sesijas
    });
    return response.data;
  } catch (error) {
    console.error("Registracijos klaida:", error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : { error: "Nepavyko prisijungti prie serverio" };
  }
};

