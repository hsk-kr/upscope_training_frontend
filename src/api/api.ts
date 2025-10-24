import axios from "axios";

const API_URL = "https://upscope.keepsaying.com";

const api = (pathname: string) => {
  return axios.get(`${API_URL}${pathname}`);
};

export const fetchPains = async () => {
  const res = await api("/pains");

  if (res.status !== 200) {
    throw new Error("Failed to fetch");
  }

  return res.data;
};

export const fetchPain = async (id: string) => {
  const res = await api(`/pains/${id}`);

  if (res.status !== 200) {
    throw new Error("Failed to fetch");
  }

  return res.data;
};
