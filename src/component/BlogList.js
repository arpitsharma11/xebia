import React, { useState, useEffect } from 'react';

import Blog from './Blog';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import SearchBar from './SearchBar';
import { useDebounce } from '../util/helper';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  searchWrapper: {
    marginBottom: 10,
  }
}));

const BlogList = ({ list }) => {

  const [ blogList, setBlogList ] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const classes = useStyles();
  const history = useHistory();
  const { path } = useRouteMatch();

  const debouncedSearchTerm = useDebounce(searchValue, 500);

  const handleAddClick = () => {
    history.push(`${path}/add-blog`);
  }

  const handleChangeEvent = value => {
    setSearchValue(value);
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      setBlogList(list.filter(l => l.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())))
    } else {
      setBlogList(list);
    }
  }, [list,searchValue,debouncedSearchTerm]);

  useEffect(() => {
    setBlogList(list);
  }, [list]);

  return (
    <div className={classes.root} >
    <div className={classes.searchWrapper} >
      <SearchBar placeholder="Search with blog title" onChangeEvent={handleChangeEvent} />
    </div>
    { blogList.length ?
      blogList.map((blog, index) => (
        <Blog key={index} blog={blog}/>
      )) : <Typography variant="subtitle1">{`No blogs with Author ${debouncedSearchTerm}`}</Typography>
    }
    
    <Fab onClick={handleAddClick} className={classes.fab} color="primary" aria-label="add">
      <AddIcon />
    </Fab>
    </div> 
  )
}

export default BlogList;
