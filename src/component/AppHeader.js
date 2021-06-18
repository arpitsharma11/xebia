import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const AppHeader = () => {
  const history = useHistory();

  const handleResumeClick = () => {
    history.push('/');
  }

  const handleBlogsClick = () => {
    history.push('/blogs');
  }

  return (
    <AppBar position="static" >
      <Toolbar>
        <Button onClick={handleResumeClick} color="inherit">Resume</Button>
        <Button onClick={handleBlogsClick} color="inherit">Blogs</Button>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader;
