import React, { useState } from "react";
import { InputBase, IconButton, Box } from "@mui/material";
import { Search } from "@mui/icons-material";

interface Props {
  onSearch: (query: string) => void; // Hàm callback để truyền query tìm kiếm lên component cha
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery); // Gọi hàm onSearch để xử lý tìm kiếm ở component cha
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <InputBase
        placeholder="Search…"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{
          backgroundColor: "background.default",
          borderRadius: "8px",
          padding: "0.5rem 1rem",
          marginRight: "1rem",
          width: "250px",
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
      />
      <IconButton size="large" color="inherit" onClick={handleSearchSubmit}>
        <Search />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
