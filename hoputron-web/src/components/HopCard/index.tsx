import { Hop } from "@hoputron/models/hop";
import { Card, CardActionArea, CardContent, CardHeader, Chip, Grid2, Typography, } from "@mui/material";
import Link from "next/link";

type HopCardProps = {
  hop: Hop;
}

export const HopCard = ({ hop }: HopCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3, transition: "transform 0.2s", "&:hover": { transform: "scale(1.02)" } }}>
      <Link href={`/hops/${hop.id}`} passHref>
        <CardActionArea sx={{ p: 2 }}>
          <CardHeader
            title={hop.name}
            subheader={hop.description}
            sx={{
              "& .MuiCardHeader-title": { fontSize: "1.3rem", fontWeight: "bold", color: "primary.main" },
              "& .MuiCardHeader-subheader": { fontSize: "0.9rem", color: "text.secondary" },
            }}
          />
          <CardContent>
            <Grid2 container spacing={2} alignItems="center">
              <Grid2 size={{ xs: 6 }}>
                <Typography variant="subtitle1" fontWeight="bold">Alpha Acid:</Typography>
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <Chip
                  label={`${hop.alphaAcid}`}
                  color="primary"
                  sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                />
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <Typography variant="subtitle1" fontWeight="bold">Beta Acid:</Typography>
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <Chip
                  label={hop.betaAcid ? `${hop.betaAcid}` : "N/A"}
                  color="secondary"
                  sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                />
              </Grid2>
            </Grid2>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}
