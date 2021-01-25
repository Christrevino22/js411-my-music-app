import React, { useState, set } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../Components/Login.css";
import Button from "@material-ui/core/Button";
// import App from "../App";
// import { FormatAlignCenter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      display: "flex",

      margin: theme.spacing(2),
      width: "40ch",
    },
  },
}));

const [loggedIn, setloggedIn] = useState(false);

const handleChange = (event) => {
  setloggedIn(!loggedIn);
  console.log("inside handle change", loggedIn);
};

function Text() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="USERNAME" />
      <TextField id="standard-basic" label="PASSWORD" />
      <Button variant="contained" color="primary" onChange={handleChange}>
        Login
      </Button>
    </form>
  );
}

export default Text;
