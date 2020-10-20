import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002",
});

const getCats = async (name, age) => (api.get("/cats"));

const getCatById = async (id) => (await api.get(`/cats/${id}`)).data;

const addCat = async (name, age) => api.post('/cats', { name, age});

const updateCat = async (id, name, age) => api.put(`/cats/${id}`, { name, age });

const removeCat = async (id) => api.delete(`/cats/${id}`)

export default {
  getCats,
  getCatById,
  addCat,
  updateCat,
  removeCat,
};
