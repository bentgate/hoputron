"use client";

import { HopCard } from "@hoputron/components/HopCard";
import HopSearch from "@hoputron/components/HopSearch";
import { Hop } from "@hoputron/models/hop";
import { fetchHops } from "@hoputron/repository/hopService";

import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

export const dynamic = "force-dynamic";

const Home = () => {
  const [searchResults, setSearchResults] = useState<Hop[]>([]);
  const [lastValidResults, setLastValidResults] = useState<Hop[]>([]);

  async function fetchData() {
    const data = await fetchHops();
    setLastValidResults(data);
  }
  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      setLastValidResults(searchResults);
    } else {
      fetchData()
    }
  }, [searchResults]);

  return (
    <div>
      <Box sx={{ position: "relative", height: "600px" }}>
        <Image src="/images/hoputron.webp" alt="Image" fill className="object-cover" />
      </Box>

      <Box sx={{ position: "absolute", top: "200px", left: 0, right: 0 }}>
        <div className="flex flex-col justify-center items-center mb-4 gap-3">
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ padding: "4px", backgroundColor: "black" }}>
            <Typography color="secondary" variant="h1">Hoputron</Typography>
            <Typography color="textSecondary" variant="subtitle1">Helping you find your next favorite hop</Typography>
          </Box>

          <HopSearch onClear={() => setSearchResults([])} onSearch={setSearchResults} />
        </div>
      </Box>

      <Grid2 container margin="16px" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {(searchResults && searchResults.length > 0 ? searchResults : lastValidResults).map((hop: Hop) => (
          <HopCard key={hop.id} hop={hop} />
        ))}
      </Grid2>
    </div>
  );
};

export default Home;
