import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { arr } from "../../CommonComponents/stateCity";
import { Autocomplete } from "@mui/material";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Tyche Silks
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

export default function SignUp() {
  const [state, setstate] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: null,
    address: "",
    state: "",
    city: "",
    password: "",
    pincode: null,
  });
  const [confirmPassword, setconfirmPassword] = useState({
    val: "",
    err: "Password Miss Match",
  });
  const [passwords, setpasswords] = useState({
    pass: "",
    conPss: "",
  });
  let sta = arr;
  let states = Object.keys(arr);
  let city = arr[state.state];
  const [open, setopen] = useState(false);
  const [msg, setmsg] = useState("");
  const [severity, setseverity] = useState("");
  const checkr=(value)=>{
    return value!=="" && value!= undefined && value!=null;
  }
 
  const isEmpty = Object.values(state).every(checkr);

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/users", {
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        phone: state.phone,
        address: state.address,
        state: state.state,
        city: state.city,
        password: state.password,
        pincode: state.pincode,
      })
      .then((res) => {
        console.log(res,"res");
        if (res?.data?.err !== null || undefined) {
          setopen(true);
          setseverity("error")
          setmsg(res?.data?.err);
        } else if (res?.data?.msg !== null) {
          setopen(true);
          setseverity("success");
          setmsg(res?.data?.msg);}
      })
      .catch((err) => {
        console.log(err);
        setopen(true);
        setmsg(err);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setopen(false)}
            message={msg}
          >
            <Alert
              onClose={() => setopen(false)}
              autoHideDuration={4000}
              severity={severity}
              sx={{ width: "100%" }}
            >
              {msg + " !"}
            </Alert>
          </Snackbar>
          {/* action={action} */}
          {open ? (
            <Alert onClose={() => setopen(false)} severity={severity}>
              {msg}
            </Alert>
          ) : (
            <></>
          )}
        </Stack>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={state.firstname}
                  onChange={(e) => {
                    setstate({ ...state, firstname: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={state.lastname}
                  onChange={(e) => {
                    setstate({ ...state, lastname: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type={"email"}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={state.email}
                  onChange={(e) => {
                    setstate({ ...state, email: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type={"password"}
                  id="Password"
                  label="Password"
                  name="Password"
                  autoComplete="Password"
                  value={state.password}
                  onChange={(e) => {
                    setstate({
                      ...state,
                      password: e.target.value,
                    });
                    // setpasswords({
                    //   ...passwords,
                    //   pass: bcrypt.hashSync(e.target.value, salt),
                    // });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type={"password"}
                  id="Confirm Password"
                  label="Confirm Password"
                  name="Confirm Password"
                  autoComplete="Confirm Password"
                  onChange={(e) => {
                    setconfirmPassword({
                      ...confirmPassword,
                      val: e.target.value,
                    });
                    // setpasswords({ ...passwords, conPass: e.target.value });
                  }}
                  error={state.password !== confirmPassword.val ? true : false}
                  errorText={confirmPassword.err}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  // type={"number"}
                  maxLength={12}
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="phone"
                  value={state.phone}
                  onChange={(e) => {
                    setstate({
                      ...state,
                      phone: e.target.value.toString().slice(0, 10),
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  multiline
                  rows={5}
                  value={state.address}
                  onChange={(e) => {
                    setstate({ ...state, address: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  id="State"
                  label="State"
                  defaultValue={state.state}
                  onChange={(e, i) => {
                    setstate({ ...state, state: i });
                  }}
                  options={states}
                  renderInput={(params) => (
                    <TextField {...params} label="State" variant="outlined" />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  id="City"
                  label="City"
                  defaultValue={state.city}
                  onChange={(e, i) => {
                    setstate({ ...state, city: i });
                  }}
                  options={city || []}
                  renderInput={(params) => (
                    <TextField {...params} label="City" variant="outlined" />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type={"number"}
                  id="pincode"
                  label="pincode"
                  name="pincode"
                  autoComplete="pincode"
                  value={state.pincode}
                  onChange={(e) => {
                    setstate({ ...state, pincode: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isEmpty}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
