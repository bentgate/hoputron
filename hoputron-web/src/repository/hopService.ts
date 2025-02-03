const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchHops = async () => {
  const response = await fetch(`${BASE_URL}/hops/`);

  return await response.json()
};

export const searchHops = async (query: string) => {
  const response = await fetch(`${BASE_URL}/hops/search?name=${query}`);

  return await response.json()
}

export const fetchHopById = async (id: number) => {
  const response = await fetch(`${BASE_URL}/hops/${id}`);
  return handleResponse(response)
}


const handleResponse = async (response: Response) => {
  if (!response.ok) {
    return null;
  }

  return await response.json();
}
