const api = (pathname: string) => {
  return fetch(`${import.meta.env.VITE_API_URL}${pathname}`);
};

export const fetchPains = async () => {
  const res = await api("/pains");

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

export const fetchPain = async (id: string) => {
  const res = await api(`/pains/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};
