import { React, useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function AddPromoCode() {
  const [promoCode, setpromoCode] = useState({
    code: "",
    from_date: null,
    to_date: null,
    category: [],
    min_amount: null,
    max_amount: null,
    reduce_by: "",
    amount: null,
    percentage: "",
  });
  console.log(promoCode);
  return (
    <div>
      <Grid container spacing={2} p={10}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id={"Promo Code"}
            label={"Promo Code"}
            defaultValue={promoCode.code}
            onChange={(val) => {
              setpromoCode({
                ...promoCode,
                name: val.target.value,
              });
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            id={"Minimum Amount"}
            label={"Minimum Amount"}
            defaultValue={promoCode.min_amount}
            onChange={(val) => {
              setpromoCode({
                ...promoCode,
                min_amount: val.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            id={"Maximum Amount"}
            label={"Maximum Amount"}
            defaultValue={promoCode.max_amount}
            onChange={(val) => {
              setpromoCode({
                ...promoCode,
                max_amount: val.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ minWidth: 120 }}></Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={promoCode.reduce_by}
              label={"Type"}
              onChange={(e) => {
                setpromoCode({
                  ...promoCode,
                  reduce_by: e.target.value,
                });
              }}
            >
              <MenuItem value={"Percentage"}>Percentage (%)</MenuItem>
              <MenuItem value={"Amount"}>Amount (₹)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {promoCode.reduce_by === "Percentage" ? (
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id={"Percentage"}
              label={"Percentage"}
              defaultValue={promoCode.percentage}
              onChange={(val) => {
                setpromoCode({
                  ...promoCode,
                  percentage: val.target.value,
                });
              }}
            />
          </Grid>
        ) : promoCode.reduce_by === "Amount" ? (
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id={"Amount"}
              label={"Amount"}
              defaultValue={promoCode.amount}
              onChange={(val) => {
                setpromoCode({
                  ...promoCode,
                  amount: val.target.value,
                });
              }}
            />
          </Grid>
        ) : (
          <>
            <Grid item xs={6}></Grid>
          </>
        )}
        {/* <Grid item xs={6} justify="space-around">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid>
                  <KeyboardDatePicker
                    margin="none"
                    id="From-Date"
                    label="From Date"
                    format="MM/dd/yyyy"
                    value={promoCode.from_date}
                    onChange={(e) => {
                      setpromoCode({
                        ...promoCode,
                        from_date: e,
                      });
                    }}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </FormControl>
          </Box>
        </Grid> */}
        {/* <Grid item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid>
              <KeyboardDatePicker
                margin="none"
                id="To-Date"
                label="To Date"
                format="MM/dd/yyyy"
                value={promoCode.to_date}
                onChange={(e) => {
                  setpromoCode({
                    ...promoCode,
                    to_date: e,
                  });
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        
        </Grid> */}
        <Grid item xs={6}></Grid>
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
            // onClick={() => onSave()}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddPromoCode;
