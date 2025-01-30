import { Hop, HopCard } from "@hoputron/components/HopCard";
import { fetchHops } from "@hoputron/repository/hopService";
import { Grid2 } from "@mui/material";

export const dynamic = 'force-dynamic'

const HopsPage = async () => {
  const hops: Hop[] = await fetchHops() ?? null;


  return (
    <div>
      <h1>Hops List</h1>

      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {hops.map((hop: Hop) => (
          <HopCard key={hop.id} hop={hop} />
        ))}
      </Grid2>
    </div>
  );
};

export default HopsPage;
