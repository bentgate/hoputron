import { Hop } from "@hoputron/models/hop";
import { fetchHopById } from "@hoputron/repository/hopService";
import { Grid2, Typography } from "@mui/material";
import { notFound } from "next/navigation";

export default async function HopPage({ params }: { params: Promise<{ id: number }> }) {
  const hopId = (await params).id;
  const data: Hop = await fetchHopById(hopId);



  if (!data) {
    return notFound();
  }


  return (
    <div>
      <Typography variant="h1">{data.name}</Typography>
      <Typography variant="body1">{data.description}</Typography>
      <Grid2>
        <Grid2>
          <Typography variant="subtitle1">AlphaAcid: {data.alphaAcid}</Typography>
        </Grid2>
        <Grid2>
          <Typography variant="subtitle1">BetaAcid: {data.betaAcid}</Typography>
        </Grid2>
      </Grid2>
      {data?.aromaFlavor && data.aromaFlavor.map((flavour, index) => <Typography key={index} variant="body1">{flavour}</Typography>)}
    </div>
  )
}
