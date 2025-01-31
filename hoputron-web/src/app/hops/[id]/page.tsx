import flavorColors from "@hoputron/constants/flavourColors";
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
    <Card sx={{ maxWidth: 700, mx: "auto", mt: 4, p: 3, borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        {/* Title */}
        <Typography variant="h1" sx={{ color: "primary.main", fontWeight: "bold", textAlign: "center", mb: 2 }}>
          {data.name}
        </Typography>

        {/* Description */}
        <Typography variant="body1" sx={{ color: "text.secondary", textAlign: "center", mb: 3 }}>
          {data.description}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Hop Characteristics in Grid */}
        <Grid2 container spacing={2}>
          {/* Alpha Acid */}
          <Grid2 size={{ xs: 6 }}>
            <Paper sx={{ p: 2, textAlign: "center", bgcolor: "primary.light", borderRadius: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Alpha Acid</Typography>
              <Typography variant="body2">
                {data.alphaAcidMin}% - {data.alphaAcidMax ?? "N/A"}%
              </Typography>
            </Paper>
          </Grid2>

          {/* Beta Acid */}
          <Grid2 size={{ xs: 6 }}>
            <Paper sx={{ p: 2, textAlign: "center", bgcolor: "secondary.light", borderRadius: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Beta Acid</Typography>
              <Typography variant="body2">
                {data.betaAcidMin ?? "N/A"}% - {data.betaAcidMax ?? "N/A"}%
              </Typography>
            </Paper>
          </Grid2>

          {/* Co-Humulone */}
          <Grid2 size={{ xs: 6 }}>
            <Paper sx={{ p: 2, textAlign: "center", bgcolor: "info.light", borderRadius: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Co-Humulone</Typography>
              <Typography variant="body2">
                {data.coHumuloneMin ?? "N/A"}% - {data.coHumuloneMax ?? "N/A"}%
              </Typography>
            </Paper>
          </Grid2>

          {/* Total Oil */}
          <Grid2 size={{ xs: 6 }}>
            <Paper sx={{ p: 2, textAlign: "center", bgcolor: "warning.light", borderRadius: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">Total Oil</Typography>
              <Typography variant="body2">
                {data.totalOilMin ?? "N/A"} mL - {data.totalOilMax ?? "N/A"} mL
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>

        <Divider sx={{ my: 3 }} />

        {/* Aroma & Flavor */}
        {data.aromaProfile?.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>Aroma & Flavor</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {data.aromaProfile.map((flavor, index) => {
                const { background, text } = flavorColors[flavor] || { background: "primary", text: "#FFFFFF" };
                return (
                  <Chip
                    key={index}
                    label={flavor}
                    sx={{
                      fontSize: 14,
                      bgcolor: background,
                      color: text,
                    }}
                  />
                )
              })}
            </Box>
          </Box>
        )}

        {/* Best Paired With */}
        {data.bestPairedWith?.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>Best Paired With</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {data.bestPairedWith.map((hop, index) => (
                <Chip key={index} label={hop} color="success" sx={{ fontSize: 14 }} />
              ))}
            </Box>
          </Box>
        )}

        {/* Substitute Hops */}
        {data.replaceWith?.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>Substitutes</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {data.replaceWith.map((replacement, index) => (
                <Chip key={index} label={replacement} color="error" sx={{ fontSize: 14 }} />
              ))}
            </Box>
          </Box>
        )}

        {/* Beer Styles */}
        {data.beerStyle?.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>Commonly Used In</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {data.beerStyle.map((style, index) => (
                <Chip key={index} label={style} color="warning" sx={{ fontSize: 14 }} />
              ))}
            </Box>
          </Box>
        )}

      </CardContent>
    </Card>
  )
}
