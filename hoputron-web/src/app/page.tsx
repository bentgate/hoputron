import { HopCard } from "@hoputron/components/HopCard";
import { Hop } from "@hoputron/models/hop";
import { fetchHops } from "@hoputron/repository/hopService";
import { Grid2, Input, Typography } from "@mui/material";

export const dynamic = 'force-dynamic'

const HopsPage = async () => {
  const hops: Hop[] = await fetchHops() ?? null;

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-4">
        <Typography variant="h1">Hoputron</Typography>
        <Typography variant="subtitle1">Helping you find your next favourite hop</Typography>
      </div>

      <Input placeholder="Enter hop name" />

      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {hops.map((hop: Hop) => (
          <HopCard key={hop.id} hop={hop} />
        ))}
      </Grid2>
    </div>
  );
};

export default HopsPage;
