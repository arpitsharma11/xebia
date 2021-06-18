import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ResumeImage from '../assets/resume.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
}));

const Resume = () => {

  const classes = useStyles();

  return (
    <img className={classes.root} src={ResumeImage} alt="resume_img" />
  )
}

export default Resume;
