"use client";

import { useEffect, useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useHopSearch } from "@hoputron/hooks/useSearch";
import { Hop } from "@hoputron/models/hop";


const HopSearch = ({ onSearch, onClear }: { onSearch: (results: Hop[]) => void; onClear: () => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useHopSearch(searchTerm);

  useEffect(() => {
    onSearch(data)
  }, [data, onSearch])

  const handleClear = () => {
    setSearchTerm(""); // Clear input field
    onClear(); // Call parent function to reset results
  };


  return (
    <TextField
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      variant="outlined"
      label="Search"
      placeholder="Enter hop name"
      fullWidth
      sx={{
        backgroundColor: "white",
        width: { xs: "300px", sm: "450px", md: "600px" },
      }}
      slotProps={{
        input: {
          endAdornment: searchTerm && (
            <InputAdornment position="end">
              <IconButton onClick={handleClear} size="small">
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          ),
        }
      }}
    />
  );
};

export default HopSearch;
