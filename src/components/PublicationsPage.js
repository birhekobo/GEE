import React, { useState, useMemo } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Typography,
  Chip,
  Stack,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
  Divider,
  Collapse,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ClearIcon from "@mui/icons-material/Clear";
import PublicationsList from "./PublicationsList";
import publicationsData from "../publicationsData";

const PublicationsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [keywordFilter, setKeywordFilter] = useState("");
  const [showFilters, setShowFilters] = useState(!isMobile);

  // Get all unique years and keywords
  const years = useMemo(() => {
    const yearSet = new Set(publicationsData.references.map((pub) => pub.year));
    return Array.from(yearSet).sort((a, b) => b - a);
  }, []);

  const keywords = useMemo(() => {
    const keywordSet = new Set();
    publicationsData.references.forEach((pub) => {
      if (pub.keywords) {
        pub.keywords.forEach((keyword) => keywordSet.add(keyword));
      }
    });
    return Array.from(keywordSet).sort();
  }, []);

  // Filter publications based on search query and filters
  const filteredPublications = useMemo(() => {
    return publicationsData.references.filter((publication) => {
      const matchesSearch =
        searchQuery === "" ||
        publication.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        publication.authors.some((author) =>
          author.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        (publication.abstract &&
          publication.abstract
            .toLowerCase()
            .includes(searchQuery.toLowerCase()));

      const matchesYear =
        yearFilter === "" || publication.year.toString() === yearFilter;

      const matchesKeyword =
        keywordFilter === "" ||
        (publication.keywords && publication.keywords.includes(keywordFilter));

      return matchesSearch && matchesYear && matchesKeyword;
    });
  }, [searchQuery, yearFilter, keywordFilter]);

  const clearFilters = () => {
    setSearchQuery("");
    setYearFilter("");
    setKeywordFilter("");
  };

  const hasActiveFilters = searchQuery || yearFilter || keywordFilter;

  return (
    <Box sx={{ py: 4 }}>
      <Paper
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ mb: 0 }}>
            Filter Publications
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {isMobile && (
              <Tooltip title={showFilters ? "Hide filters" : "Show filters"}>
                <IconButton onClick={() => setShowFilters(!showFilters)}>
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
            )}
            {hasActiveFilters && (
              <Tooltip title="Clear all filters">
                <IconButton onClick={clearFilters}>
                  <ClearIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Box>

        <Stack spacing={3}>
          <TextField
            label="Search Publications"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, author, or abstract..."
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ mr: 1, color: "text.secondary" }} />
              ),
            }}
          />

          <Collapse in={showFilters}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <FormControl fullWidth>
                <InputLabel>Year</InputLabel>
                <Select
                  value={yearFilter}
                  label="Year"
                  onChange={(e) => setYearFilter(e.target.value)}
                >
                  <MenuItem value="">All Years</MenuItem>
                  {years.map((year) => (
                    <MenuItem key={year} value={year.toString()}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Keyword</InputLabel>
                <Select
                  value={keywordFilter}
                  label="Keyword"
                  onChange={(e) => setKeywordFilter(e.target.value)}
                >
                  <MenuItem value="">All Keywords</MenuItem>
                  {keywords.map((keyword) => (
                    <MenuItem key={keyword} value={keyword}>
                      {keyword}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Collapse>

          {hasActiveFilters && (
            <>
              <Divider />
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {searchQuery && (
                  <Chip
                    label={`Search: ${searchQuery}`}
                    onDelete={() => setSearchQuery("")}
                    color="primary"
                    variant="outlined"
                  />
                )}
                {yearFilter && (
                  <Chip
                    label={`Year: ${yearFilter}`}
                    onDelete={() => setYearFilter("")}
                    color="primary"
                    variant="outlined"
                  />
                )}
                {keywordFilter && (
                  <Chip
                    label={`Keyword: ${keywordFilter}`}
                    onDelete={() => setKeywordFilter("")}
                    color="primary"
                    variant="outlined"
                  />
                )}
              </Box>
            </>
          )}
        </Stack>
      </Paper>

      <PublicationsList publications={filteredPublications} />
    </Box>
  );
};

export default PublicationsPage;
