import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Resume from '../component/Resume';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px',
  },
}));

const Home = () => {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Resume />
    </div>
  )
}

export default Home;
