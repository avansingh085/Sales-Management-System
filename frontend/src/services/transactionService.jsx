import axios from 'axios';
export const getTransactions = async (filters = {}) => {

  try {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/transaction`, { params: filters });
    return res.data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};