import { HopCard } from "@hoputron/components/HopCard";
import { Hop } from "@hoputron/models/hop";
import { fetchHops } from "@hoputron/repository/hopService";
import { Grid2 } from "@mui/material";

export default async function Hops() {
  // TODO:
  // View All Hops
  // Classic Hop Parings
  // Filter Hops
  const hops: Hop[] = await fetchHops() ?? null;


  return (
    <div>
      <h1>Hops List</h1>

      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {hops && hops.map((hop: Hop) => (
          <HopCard key={hop.id} hop={hop} />
        ))}
      </Grid2>
    </div>
  );
}
