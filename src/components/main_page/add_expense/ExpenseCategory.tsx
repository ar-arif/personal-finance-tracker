import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function ExpenseCategory({ setCategoryValue }) {
  const [category, setCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    setCategoryValue(event.target.value as string);
  };
  return (
    <div id="expense-category-component">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value={"Food"}>Food</MenuItem>
            <MenuItem value={"Home Rent"}>Home Rent</MenuItem>
            <MenuItem value={"Transportation"}>Transportation</MenuItem>
            <MenuItem value={"Electricity Bill"}>Electricity Bill</MenuItem>
            <MenuItem value={"Clothing"}>Clothing</MenuItem>
            <MenuItem value={"Gas Bill"}>Gas Bill</MenuItem>
            <MenuItem value={"WiFi Bill"}>WiFi Bill</MenuItem>
            <MenuItem value={"Mobile Recharge"}>Mobile Recharge</MenuItem>
            <MenuItem value={"Others"}>Others</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
