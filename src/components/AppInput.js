import { TextField } from "@material-ui/core";
import React from "react";

function AppInput({ onChange, value, className }) {
  return (
    <TextField
      label="Task"
      placeholder="Add Task"
      variant="outlined"
      fullWidth
      onChange={onChange}
      value={value}
      className={className}
    />
  );
}

export default AppInput;
