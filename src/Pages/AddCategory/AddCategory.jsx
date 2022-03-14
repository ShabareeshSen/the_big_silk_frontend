import {  useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";

function AddCategory() {
  const [categoryDetails, setcategoryDetails] = useState({
    category: "",
    description: "",
  });

  const [open, setopen] = useState(false);
  const [msg, setmsg] = useState("");
  const [severity, setseverity] = useState("");

  const [disableButton, setdisableButton] = useState(true);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
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
  //disable chk
    const checkr = (value) => {
      return value !== "" && value != undefined && value != null;
    };
   const isEmpty = Object.values(categoryDetails).every(checkr);

  const onSave = () => {
    axios
      .post("http://localhost:5000/category", categoryDetails)
      .then((res) => {
        if (res?.data?.err) {
          setopen(true);
          setseverity("error");
          setmsg(res?.data?.err);
        } else {
          console.log("success");
          setopen(true);
          setseverity("success");
          setmsg(res?.data?.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        setopen(true);
        setmsg(err);
      });;
  };
  return (
    <div>
      <Grid container spacing={2} p={10}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          {/* <Snackbar open={open}>
            <Alert
              onClose={() => setopen(false)}
              autoHideDuration={4000}
              severity={severity}
              sx={{ width: "100%" }}
            >
              {msg}
            </Alert>
          </Snackbar> */}
          {/* action={action} */}
          {open ? (
            <Alert
              onClose={() => setopen(false)}
              autoHideDuration={4000}
              severity={severity}
            >
              {msg}
            </Alert>
          ) : (
            <></>
          )}
        </Stack>
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
            disabled={!isEmpty}
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
