import axios from "axios";

//variavel que guarda a URL da api usada
export const api = axios.create({baseURL: 'https://crudcrud.com/api/5c6f07ad98604821bd5fb14d3b00cf03/books'});