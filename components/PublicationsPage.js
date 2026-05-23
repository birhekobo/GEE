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
} from "@mui/material";
import PublicationsList from "./PublicationsList";
import publicationsData from "../publicationsData";

const PublicationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [keywordFilter, setKeywordFilter] = useState("");

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

  return (
    <Box sx={{ py: 4 }}>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Filter Publications
        </Typography>
        <Stack spacing={3}>
          <TextField
            label="Search Publications"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, author, or abstract..."
          />

          <Box sx={{ display: "flex", gap: 2 }}>
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

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {yearFilter && (
              <Chip
                label={`Year: ${yearFilter}`}
                onDelete={() => setYearFilter("")}
              />
            )}
            {keywordFilter && (
              <Chip
                label={`Keyword: ${keywordFilter}`}
                onDelete={() => setKeywordFilter("")}
              />
            )}
          </Box>
        </Stack>
      </Paper>

      <PublicationsList publications={filteredPublications} />
    </Box>
  );
};

export default PublicationsPage;
