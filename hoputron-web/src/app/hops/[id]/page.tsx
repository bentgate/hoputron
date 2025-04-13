import flavorColors from "@hoputron/constants/flavourColors";
import { Hop } from "@hoputron/models/hop";
import { fetchHopById } from "@hoputron/repository/hopService";
import { Box, Card, CardContent, Chip, Divider, Grid, Paper, Typography, Button, Container, Avatar, Tooltip, IconButton } from "@mui/material";
import { notFound } from "next/navigation";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PublicIcon from '@mui/icons-material/Public';
import ScienceIcon from '@mui/icons-material/Science';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import GroupIcon from '@mui/icons-material/Group';
import LiquorIcon from '@mui/icons-material/Liquor';
import InfoIcon from '@mui/icons-material/Info';

export default async function HopPage({ params }: { params: Promise<{ id: number }> }) {
  const hopId = (await params).id;
  const data: Hop = await fetchHopById(hopId);

  if (!data) {
    return notFound();
  }

  // Calculate the average alpha acid for the gauge
  const avgAlphaAcid = data.alphaAcidMin && data.alphaAcidMax 
    ? ((data.alphaAcidMin + data.alphaAcidMax) / 2).toFixed(1) 
    : "N/A";

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Back Button */}
      <Link href="/hops" style={{ textDecoration: 'none' }}>
        <Button
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 3 }}
        >
          Back to Hops
        </Button>
      </Link>

      {/* Hero Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 4, 
          mb: 4, 
          borderRadius: 3,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3 }}>
          <Avatar 
            sx={{ 
              width: 120, 
              height: 120, 
              bgcolor: 'primary.main',
              fontSize: '3rem',
              boxShadow: 3
            }}
          >
            {data.name.charAt(0)}
          </Avatar>
          
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" sx={{ 
              color: "primary.main", 
              fontWeight: "bold", 
              mb: 1,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}>
              {data.name}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <PublicIcon fontSize="small" color="action" />
              <Typography variant="subtitle1" color="text.secondary">
                {data.origin}
              </Typography>
              {data.producer && (
                <>
                  <Typography variant="subtitle1" color="text.secondary"> • </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {data.producer}
                  </Typography>
                </>
              )}
            </Box>
            
            <Typography variant="body1" sx={{ 
              color: "text.secondary", 
              maxWidth: '800px',
              lineHeight: 1.6
            }}>
              {data.description}
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Left Column - Key Characteristics */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 2, mb: 4 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <ScienceIcon color="primary" />
                Key Characteristics
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Alpha Acid</Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {data.alphaAcidMin ? `${data.alphaAcidMin}-${data.alphaAcidMax}%` : 'N/A'}
                  </Typography>
                </Box>
                <Box sx={{ 
                  height: 8, 
                  bgcolor: 'background.default', 
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <Box sx={{ 
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: data.alphaAcidMin ? `${Math.min(100, (data.alphaAcidMin / 20) * 100)}%` : '0%',
                    bgcolor: 'primary.main',
                    borderRadius: 4
                  }} />
                </Box>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Beta Acid</Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {data.betaAcidMin ? `${data.betaAcidMin}-${data.betaAcidMax}%` : 'N/A'}
                  </Typography>
                </Box>
                <Box sx={{ 
                  height: 8, 
                  bgcolor: 'background.default', 
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <Box sx={{ 
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: data.betaAcidMin ? `${Math.min(100, (data.betaAcidMin / 10) * 100)}%` : '0%',
                    bgcolor: 'secondary.main',
                    borderRadius: 4
                  }} />
                </Box>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Co-Humulone</Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {data.coHumuloneMin ? `${data.coHumuloneMin}-${data.coHumuloneMax}%` : 'N/A'}
                  </Typography>
                </Box>
                <Box sx={{ 
                  height: 8, 
                  bgcolor: 'background.default', 
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <Box sx={{ 
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: data.coHumuloneMin ? `${Math.min(100, (data.coHumuloneMin / 50) * 100)}%` : '0%',
                    bgcolor: 'info.main',
                    borderRadius: 4
                  }} />
                </Box>
              </Box>
              
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Total Oil</Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {data.totalOilMin ? `${data.totalOilMin}-${data.totalOilMax} mL/100g` : 'N/A'}
                  </Typography>
                </Box>
                <Box sx={{ 
                  height: 8, 
                  bgcolor: 'background.default', 
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <Box sx={{ 
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: data.totalOilMin ? `${Math.min(100, (data.totalOilMin / 3) * 100)}%` : '0%',
                    bgcolor: 'warning.main',
                    borderRadius: 4
                  }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
          
          {/* Beer Styles */}
          {data.styles?.length > 0 && (
            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LiquorIcon color="primary" />
                  Common Beer Styles
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {data.styles.map((style, index) => (
                    <Chip 
                      key={index} 
                      label={style} 
                      color="warning" 
                      sx={{ 
                        fontSize: 14,
                        borderRadius: 2
                      }} 
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          )}
        </Grid>
        
        {/* Right Column - Aroma Profile, Pairings, etc. */}
        <Grid item xs={12} md={8}>
          {/* Aroma & Flavor */}
          {data.aromaProfile?.length > 0 && (
            <Card sx={{ borderRadius: 3, boxShadow: 2, mb: 4 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocalBarIcon color="primary" />
                  Aroma & Flavor Profile
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {data.aromaProfile.map((flavor, index) => {
                    const { background, text } = flavorColors[flavor] || { background: "primary.main", text: "#FFFFFF" };
                    return (
                      <Chip
                        key={index}
                        label={flavor}
                        sx={{
                          fontSize: 14,
                          bgcolor: background,
                          color: text,
                          borderRadius: 2,
                          '&:hover': {
                            transform: 'scale(1.05)',
                            transition: 'transform 0.2s'
                          }
                        }}
                      />
                    )
                  })}
                </Box>
              </CardContent>
            </Card>
          )}

          {/* Best Paired With */}
          {data.bestPairedWith?.length > 0 && (
            <Card sx={{ borderRadius: 3, boxShadow: 2, mb: 4 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <GroupIcon color="primary" />
                  Best Paired With
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {data.bestPairedWith.map((pairedHop) => (
                    <Link 
                      key={pairedHop.id} 
                      href={`/hops/${pairedHop.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Chip 
                        label={pairedHop.name} 
                        color="success" 
                        sx={{ 
                          fontSize: 14,
                          cursor: 'pointer',
                          borderRadius: 2,
                          '&:hover': {
                            bgcolor: 'success.dark',
                            transform: 'scale(1.05)',
                            transition: 'transform 0.2s'
                          }
                        }} 
                      />
                    </Link>
                  ))}
                </Box>
              </CardContent>
            </Card>
          )}

          {/* Substitute Hops */}
          {data.replaceWith?.length > 0 && (
            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CompareArrowsIcon color="primary" />
                  Substitute Hops
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {data.replaceWith.map((replacementHop) => (
                    <Link 
                      key={replacementHop.id} 
                      href={`/hops/${replacementHop.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Chip 
                        label={replacementHop.name} 
                        color="info" 
                        sx={{ 
                          fontSize: 14,
                          cursor: 'pointer',
                          borderRadius: 2,
                          '&:hover': {
                            bgcolor: 'info.dark',
                            transform: 'scale(1.05)',
                            transition: 'transform 0.2s'
                          }
                        }} 
                      />
                    </Link>
                  ))}
                </Box>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}
