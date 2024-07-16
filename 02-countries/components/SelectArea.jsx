import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { v4 } from "uuid";
export default function SelectArea({ selectedItem, handleChange, items }) {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedItem}
          label="items"
          onChange={handleChange}
        >
          {items &&
            items.map((r) => (
              <MenuItem key={v4()} value={r}>
                {r}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}
