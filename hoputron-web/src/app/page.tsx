import { HopCard } from "@hoputron/components/HopCard";
import { Hop } from "@hoputron/models/hop";
import { fetchHops } from "@hoputron/repository/hopService";
import { Box, Grid2, TextField, Typography } from "@mui/material";
import Image from "next/image";

export const dynamic = 'force-dynamic'

const HopsPage = async () => {
  const hops: Hop[] = await fetchHops() ?? null;

  return (
    <div>
      <Box sx={{ position: 'relative', height: '600px', }}>
        <Image src="/images/hoputron.webp" alt="Image" fill className="object-cover" />
      </Box>
      <Box sx={{ position: 'absolute', top: '200px', left: 0, right: 0 }}>
        <div className="flex flex-col justify-center items-center mb-4 gap-3">
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={'center'} sx={{ padding: '4px', backgroundColor: 'black' }}>
            <Typography color="secondary" variant="h1">Hoputron</Typography>
            <Typography color="textSecondary" variant="subtitle1">Helping you find your next favourite hop</Typography>
          </Box>
          <TextField variant="outlined" label="Search" placeholder="Enter hop name" sx={{ backgroundColor: 'white', width: { xs: '300px', sm: '450px', md: '600px' } }} />
        </div>
      </Box>

      <Grid2 container margin={'16px'} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {hops.map((hop: Hop) => (
          <HopCard key={hop.id} hop={hop} />
        ))}
      </Grid2>
    </div>
  );
};

export default HopsPage;
