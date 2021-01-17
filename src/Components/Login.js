import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../Components/Login.css'
import Button from '@material-ui/core/Button';
import App from '../App'
// import { FormatAlignCenter } from '@material-ui/icons';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      display: 'flex',
      
      margin: theme.spacing(2),
      width: '40ch',
    },

  },
}));


export default function Text() {
  this.state = {
    loggedIn: false
  }

  const classes = useStyles();

  handleClick = () => {
    console.log('button was clicked successfully!!!!!!')
  }

  return this.state.loggedIn ? <App/> : (

    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="USERNAME" />
      <TextField id="standard-basic" label="PASSWORD" />
      <Button  onClick ={this.handleClick} variant="contained" color="primary">
  Login
</Button>
     </form>
  );
}