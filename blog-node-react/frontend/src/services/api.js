import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

const listPosts = () => (api.get('/posts'));
const getPostById = (id) => (api.get(`/posts/${id}`));
const add = (title, body) => (api.post(`/posts`, { title, body } ));
// const add = (title, body) => (api.put(`/posts`, { title, body } ));

export default {
  listPosts,
  getPostById,
  add
};