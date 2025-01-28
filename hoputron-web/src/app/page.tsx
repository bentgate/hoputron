import { fetchHops } from "@hoputron/repository/hopService";


const HopsPage = async () => {
  const data = await fetchHops();
  const hops = await data.json();

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
