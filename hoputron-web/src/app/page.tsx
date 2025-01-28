import { fetchHops } from "@hoputron/repository/hopService";

export const dynamic = 'force-dynamic'

const HopsPage = async () => {
  const data = await fetchHops();
  const hops: { id: number; name: string }[] = await data.json() ?? [];

  return (
    <div>
      <h1>Hops List</h1>
      <ul>
        {hops.map((hop) => (
          <li key={hop.id}>{hop.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HopsPage;
