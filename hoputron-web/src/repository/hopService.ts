const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchHops = async () => {
  const response = await fetch(`${BASE_URL}/hops/`);

  return await response.json()
};

export const fetchHopById = async (id: number) => {
  console.log({ BASE_URL })
  const response = await fetch(`${BASE_URL}/hops/${id}`);

  console.log({ response: await response.statusText })
  return handleResponse(response)
}


const handleResponse = async (response: Response) => {
  if (!response.ok) {
    return null;
  }

  return await response.json();
}
