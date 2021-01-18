import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SoundDropList from "./SoundDropList";

const useStyles = makeStyles({
  root: {
    width: "210px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 1px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SoundQCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          <b>Sound Quality</b>
        </Typography>

        <Typography variant="body2" component="p">
          Maually control the music
          <br />
          quality in the event of poor
          <br />
          connection
        </Typography>
      </CardContent>
      <CardActions>
        <SoundDropList />
      </CardActions>
    </Card>
  );
}
