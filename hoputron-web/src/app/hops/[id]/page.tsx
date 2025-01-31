import { Hop } from "@hoputron/models/hop";
import { fetchHopById } from "@hoputron/repository/hopService";
import { Box, Card, CardContent, Chip, Divider, Grid2, Paper, Typography } from "@mui/material";
import { notFound } from "next/navigation";

export default async function HopPage({ params }: { params: Promise<{ id: number }> }) {
  const hopId = (await params).id;
  const data: Hop = await fetchHopById(hopId);

  if (!data) {
    return notFound();
  }

  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 3, borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h1" sx={{ color: "primary.main", fontWeight: "bold", textAlign: "center", mb: 2 }}>
          {data.name}
        </Typography>

        <Typography variant="body1" sx={{ color: "text.secondary", textAlign: "center", mb: 3 }}>
          {data.description}
        </Typography>

        <Divider sx={{ my: 2 }} />
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2 size={{ xs: 6 }}>
            <Paper sx={{ p: 2, textAlign: "center", bgcolor: "primary.light", borderRadius: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Alpha Acid</Typography>
              <Typography variant="body2">{data.alphaAcid}%</Typography>
            </Paper>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <Paper sx={{ p: 2, textAlign: "center", bgcolor: "secondary.light", borderRadius: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Beta Acid</Typography>
              <Typography variant="body2">{data.betaAcid ? `${data.betaAcid}%` : "N/A"}</Typography>
            </Paper>
          </Grid2>
        </Grid2>
        {data?.aromaFlavor && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>Aroma & Flavor</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {data.aromaFlavor.map((flavour, index) => (
                <Chip key={index} label={flavour} color="primary" sx={{ fontSize: 14 }} />
              ))}
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}
