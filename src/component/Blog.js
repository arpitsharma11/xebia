import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    marginBottom: 10,
  },
}));

const Blog = ({ blog }) => {

  const classes = useStyles();

  return (
    <Paper classes={{
      root: classes.root
    }} elevation={3}>
      <Typography variant="h6">{blog.title}</Typography>
      <Typography variant="subtitle1">{blog.author}</Typography>
      <div dangerouslySetInnerHTML={{__html: blog.blog}} />
    </Paper>
  )
}

export default Blog;
