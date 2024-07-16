import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { v4 } from "uuid";
import classes from "./SelectArea.module.css";
export default function SelectArea({
  selectedItem,
  handleChange,
  items,
  title,
}) {
  return (
    <>
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-label"
          className={classes.inputLabel}
        >
          Select a {title}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedItem}
          label="items"
          onChange={handleChange}
        >
          {items &&
            items.map((r) => (
              <MenuItem key={v4()} value={r} className={classes.menuItem}>
                {r}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}
