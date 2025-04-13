"use client"
import { HopCard } from "@hoputron/components/HopCard";
import { Hop } from "@hoputron/models/hop";
import { fetchHops } from "@hoputron/repository/hopService";
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, Chip, OutlinedInput, SelectChangeEvent, Button, Typography, Paper, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import FilterListIcon from '@mui/icons-material/FilterList';
import PublicIcon from '@mui/icons-material/Public';

const Hops = () => {
  const [hops, setHops] = useState<Hop[]>([]);
  const [filteredHops, setFilteredHops] = useState<Hop[]>([]);
  const [selectedOrigin, setSelectedOrigin] = useState<string>('');
  const [selectedAromas, setSelectedAromas] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  // Get unique values for filters
  const origins = [...new Set(hops.map(hop => hop.origin))].sort();
  const aromas = [...new Set(hops.flatMap(hop => hop.aromaProfile))].sort();
  const styles = [...new Set(hops.flatMap(hop => hop.styles))].sort();

  async function fetchData() {
    const data = await fetchHops();
    setHops(data);
    setFilteredHops(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Apply filters whenever filter values change
  useEffect(() => {
    let filtered = [...hops];

    if (selectedOrigin) {
      filtered = filtered.filter(hop => hop.origin === selectedOrigin);
    }

    if (selectedAromas.length > 0) {
      filtered = filtered.filter(hop => 
        selectedAromas.every(aroma => hop.aromaProfile.includes(aroma))
      );
    }

    if (selectedStyles.length > 0) {
      filtered = filtered.filter(hop => 
        selectedStyles.every(style => hop.styles.includes(style))
      );
    }

    setFilteredHops(filtered);
  }, [selectedOrigin, selectedAromas, selectedStyles, hops]);

  const handleOriginChange = (event: SelectChangeEvent) => {
    setSelectedOrigin(event.target.value);
  };

  const handleAromaChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedAromas(typeof value === 'string' ? value.split(',') : value);
  };

  const handleStyleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedStyles(typeof value === 'string' ? value.split(',') : value);
  };

  const clearFilters = () => {
    setSelectedOrigin('');
    setSelectedAromas([]);
    setSelectedStyles([]);
  };

  const hasActiveFilters = selectedOrigin || selectedAromas.length > 0 || selectedStyles.length > 0;

  if (!hops) {
    return "Error Loading Hops"
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1400, mx: 'auto' }}>
      {/* Header Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" sx={{ 
          fontWeight: 'bold', 
          color: 'primary.main',
          mb: 1
        }}>
          Hop Library
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Explore and discover the perfect hops for your brew
        </Typography>
      </Box>

      {/* Filters Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          mb: 4, 
          borderRadius: 2,
          bgcolor: 'background.default',
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <FilterListIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            Filters
          </Typography>
          {hasActiveFilters && (
            <Typography 
              variant="body2" 
              color="primary" 
              sx={{ ml: 2 }}
            >
              ({filteredHops.length} results)
            </Typography>
          )}
        </Box>

        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          flexWrap: 'wrap', 
          alignItems: 'flex-start'
        }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Country</InputLabel>
            <Select
              value={selectedOrigin}
              label="Country"
              onChange={handleOriginChange}
              size="small"
              startAdornment={
                <PublicIcon fontSize="small" color="action" sx={{ mr: 1 }} />
              }
            >
              <MenuItem value="">All Countries</MenuItem>
              {origins.map((origin) => (
                <MenuItem key={origin} value={origin}>{origin}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Aroma & Flavor</InputLabel>
            <Select
              multiple
              value={selectedAromas}
              onChange={handleAromaChange}
              input={<OutlinedInput label="Aroma & Flavor" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} size="small" />
                  ))}
                </Box>
              )}
              size="small"
            >
              {aromas.map((aroma) => (
                <MenuItem key={aroma} value={aroma}>
                  {aroma}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Beer Style</InputLabel>
            <Select
              multiple
              value={selectedStyles}
              onChange={handleStyleChange}
              input={<OutlinedInput label="Beer Style" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} size="small" />
                  ))}
                </Box>
              )}
              size="small"
            >
              {styles.map((style) => (
                <MenuItem key={style} value={style}>
                  {style}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {hasActiveFilters && (
            <Button
              variant="outlined"
              startIcon={<ClearIcon />}
              onClick={clearFilters}
              size="small"
              sx={{ 
                height: 40,
                borderColor: 'divider',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText'
                }
              }}
            >
              Clear All
            </Button>
          )}
        </Box>
      </Paper>

      {/* Results Section */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body2" color="text.secondary">
          {hasActiveFilters 
            ? `Showing ${filteredHops.length} of ${hops.length} hops`
            : `All ${hops.length} hops`
          }
        </Typography>
      </Box>

      {/* Hops Grid */}
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {filteredHops.map((hop: Hop) => (
          <Grid key={hop.id} item xs={12} sm={6} md={4} lg={3}>
            <HopCard hop={hop} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Hops;
