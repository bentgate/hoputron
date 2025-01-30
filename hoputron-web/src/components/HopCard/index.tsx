import { Hop } from "@hoputron/models/hop";
import { Card, CardContent, CardHeader, Grid2, Typography, } from "@mui/material";
import Link from "next/link";

type HopCardProps = {
  hop: Hop;
}

export const HopCard = ({ hop }: HopCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={`/hops/${hop.id}`}>
        <CardHeader title={hop.name} subheader={hop.description} />
      </Link>
      <CardContent>
        <Grid2 container spacing={2}>
          <Grid2 size={8}>
            <Typography variant="subtitle1">Alpha Acid:</Typography>
          </Grid2>
          <Grid2 size={4}>
            <Typography variant="subtitle1">{hop.alphaAcid}</Typography>
          </Grid2>
          <Grid2 size={8}>
            <Typography variant="subtitle1">Beta Acid:</Typography>
          </Grid2>
          <Grid2 size={4}>
            <Typography variant="subtitle1">{hop.betaAcid}</Typography>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  )
}
