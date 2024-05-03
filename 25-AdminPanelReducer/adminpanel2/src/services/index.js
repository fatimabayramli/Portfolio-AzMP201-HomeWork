import axios from "axios";
import { BASE_URL } from "./api.js";

export const getAllData = async () => {
  let res = await axios(BASE_URL);
  let data = res.data;
  return data;
};

export const postData = async (obj) => {
  let res = await axios.post(BASE_URL, obj);
  let data = res.data;
  return data;
};

export const patchById = async ( id, obj) => {
  const url = `${BASE_URL}/${id}`
  let res = await axios.patch(url + id, obj);
  let data = res.data;
  return data;
};

export const getDataById = async (BASE_URL, id) => {
  let res = await axios(BASE_URL + id);
  let data = res.data;
  return data;
};

export const deleteById = async (id) => {
  let res = await axios.delete(BASE_URL + id);
  let data = res.data;
  return data;
};

export const putById = async (BASE_URL, id, obj) => {
  let res = await axios.put(BASE_URL + "/" + id, obj);
  let data = res.data;
  return data;
};