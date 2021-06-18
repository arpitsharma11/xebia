import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

import TextEditor from './TextEditor';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    marginTop: 10,
  },
  heading: {
    padding: '12px 0'
  },
  headingRoot: {
    display: 'flex',
  },
  formRoot: {
    margin: '0 48px',
    display: 'flex',
    flexDirection: 'column',
  },
  editorWrapper: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  buttonWrapper: {
    marginLeft: '10px',
    marginRight: '10px',
  }
}));

const AddBlog = ({ onAddBlogSubmit }) => {

  const editorRef = useRef();

  const [ title, setTitle ] = useState('');
  const [ authorName, setAuthorName ] = useState('');

  const classes = useStyles();
  const history = useHistory();

  const handleBackPress = () => {
    history.goBack();
  }

  const handleTitleChange = event => {
    setTitle(event.target.value);
  }

  const hanleAuthorName = event => {
    setAuthorName(event.target.value);
  }

  const handleSubmit = () => {
    const editorData = editorRef.current.getData();
    onAddBlogSubmit({
      title,
      author: authorName,
      blog: editorData
    })
  }

  return (
    <Paper classes={{
      root: classes.root
    }} elevation={3}>
      <div className={classes.headingRoot}>
        <IconButton onClick={handleBackPress} aria-label="arrow-left">
          <ArrowLeft />
        </IconButton>
        <Typography className={classes.heading} variant="h6">Add new blog</Typography>
      </div>
      <div className={classes.formRoot} >
        <TextField value={title} onChange={handleTitleChange} label="Title" />
        <TextField value={authorName} onChange={hanleAuthorName} label="Author Name" />
        <div className={classes.editorWrapper}>
          <TextEditor ref={editorRef} />
        </div>
        <div className={classes.buttonWrapper}>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
        </div>
      </div>
    </Paper>
  )
}

export default AddBlog;
