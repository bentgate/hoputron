
export const fetchHops = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hops`);
  if (!response.ok) {
    throw new Error('Failed to fetch hops');
  }
  return response.json();
};
