import { Hop } from "@hoputron/models/hop";
import { Card, CardActionArea, CardContent, CardHeader, Chip, Typography, Box, Tooltip } from "@mui/material";
import Link from "next/link";
import PublicIcon from '@mui/icons-material/Public';
import LocalBarIcon from '@mui/icons-material/LocalBar';

type HopCardProps = {
  hop: Hop;
}

export const HopCard = ({ hop }: HopCardProps) => {
  // Get the first 3 aromas for preview
  const previewAromas = hop.aromaProfile?.slice(0, 3) || [];
  const remainingAromas = hop.aromaProfile?.length - 3 || 0;

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        boxShadow: 2,
        transition: "all 0.2s ease-in-out",
        "&:hover": { 
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #FF9800, #F44336)',
        }
      }}
    >
      <CardActionArea 
        component={Link}
        href={`/hops/${hop.id}`}
        sx={{ 
          height: '100%', 
          p: 0,
          textDecoration: 'none',
          color: 'inherit',
          flex: 1
        }}
      >
        <CardHeader
          title={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6" component="div" sx={{ 
                fontWeight: "bold", 
                color: "primary.main",
                flex: 1
              }}>
                {hop.name}
              </Typography>
              <Tooltip title={`Origin: ${hop.origin}`}>
                <PublicIcon color="action" fontSize="small" />
              </Tooltip>
            </Box>
          }
          subheader={
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                mt: 0.5
              }}
            >
              {hop.description}
            </Typography>
          }
          sx={{ pb: 1 }}
        />
        <CardContent sx={{ pt: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Key Characteristics */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Box>
              <Typography variant="caption" color="text.secondary">Alpha Acid</Typography>
              <Typography variant="body2" fontWeight="medium">
                {hop.alphaAcidMin ? `${hop.alphaAcidMin}-${hop.alphaAcidMax}%` : 'N/A'}
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary">Beta Acid</Typography>
              <Typography variant="body2" fontWeight="medium">
                {hop.betaAcidMin ? `${hop.betaAcidMin}-${hop.betaAcidMax}%` : 'N/A'}
              </Typography>
            </Box>
          </Box>

          {/* Aroma Preview */}
          {previewAromas.length > 0 && (
            <Box sx={{ mt: 'auto' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <LocalBarIcon fontSize="small" color="action" />
                <Typography variant="caption" color="text.secondary">Aroma Profile</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {previewAromas.map((aroma) => (
                  <Chip
                    key={aroma}
                    label={aroma}
                    size="small"
                    sx={{ 
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      fontSize: '0.75rem'
                    }}
                  />
                ))}
                {remainingAromas > 0 && (
                  <Chip
                    label={`+${remainingAromas}`}
                    size="small"
                    sx={{ 
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      fontSize: '0.75rem'
                    }}
                  />
                )}
              </Box>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
