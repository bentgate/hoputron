"use client"
import { HopCard } from "@hoputron/components/HopCard";
import { Hop } from "@hoputron/models/hop";
import { fetchHops } from "@hoputron/repository/hopService";
import { Grid2 } from "@mui/material";
import { useEffect, useState } from "react";

const Hops = () => {
  const [hops, setHops] = useState([])
  // TODO:
  // View All Hops
  async function fetchData() {
    const data = await fetchHops();
    setHops(data);
  }
  useEffect(() => {
    fetchData();
  }, [])
  // Classic Hop Parings
  // Filter Hops

  if (!hops) {
    return "Error Loading Hops"
  }

  return (
    <div>
      <h1>Hops List</h1>

      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {hops.map((hop: Hop) => (
          <HopCard key={hop.id} hop={hop} />
        ))}

      </Grid2>
    </div>
  );
}

export default Hops;
