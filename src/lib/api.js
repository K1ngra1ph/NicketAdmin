const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchData = async (resource) => {
  const res = await fetch(`${backend}/api/${resource}`);
  return res.json();
};
