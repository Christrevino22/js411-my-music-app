import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "./Slider";

const useStyles = makeStyles({
  root: {
    width: "fit-content",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SwitchCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          <b>Online mode</b>
        </Typography>
        <Typography variant="body2" component="p">
          Is this application connected
          <br />
          {"to the internet?"}
        </Typography>
      </CardContent>
      <CardActions>
        <Slider />
      </CardActions>
    </Card>
  );
}
