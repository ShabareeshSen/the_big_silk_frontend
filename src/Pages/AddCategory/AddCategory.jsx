import { React, useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

function AddCategory() {
  const [categoryDetails, setcategoryDetails] = useState({
    category: "",
    description: "",
  });

  const [disableButton, setdisableButton] = useState(true);

  const dis = () => {
    if (
      Object.keys(categoryDetails.category).length === 0 ||
      Object.keys(categoryDetails.description).length === 0
    ) {
      //   setdisableButton(true);
      return true;
    } else {
      //   setdisableButton(false);
      return false;
    }
  };

  const onSave = () => {
    axios.post("http://localhost:5000/category", categoryDetails);
  };
  return (
    <div>
      <Grid container spacing={2} p={10}>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            id={"category Name"}
            label={"category Name"}
            defaultValue={categoryDetails.category}
            onChange={(val) => {
              setcategoryDetails({
                ...categoryDetails,
                category: val.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            id={"category Description"}
            label={"category Description"}
            defaultValue={categoryDetails.description}
            onChange={(val) => {
              setcategoryDetails({
                ...categoryDetails,
                description: val.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid
          item
          xs={6}
          container
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            variant={"contained"}
            color={"success"}
            // disabled={dis()}
            onClick={() => onSave()}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddCategory;
