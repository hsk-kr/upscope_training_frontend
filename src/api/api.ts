import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

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
