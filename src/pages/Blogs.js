import React, { useState, useEffect } from 'react';
import { useRouteMatch, Route, Switch, useHistory } from "react-router-dom";

import BlogList from '../component/BlogList';
import AddBlog from '../component/AddBlog';
import { localStorageUtil } from '../util/helper';
import { dummyBlogList } from '../util/dummyBlogs';

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);

  const { path } = useRouteMatch();
  const history = useHistory();

  const handleAddBlogSubmit = blogObject => {
    console.log('new blog object', blogObject);
    setBlogs([...blogs, blogObject]);
    localStorageUtil.add(blogObject);
    history.push(`${path}`);
  }

  useEffect(() => {
    const blogArray = localStorageUtil.getAll();
    if(blogArray.length){
      setBlogs(blogArray);
    }else{
      localStorageUtil.addAll(dummyBlogList);
      setBlogs(dummyBlogList);
    }
  }, []);

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <BlogList list={blogs} />
        </Route>
        <Route path={`${path}/add-blog`}>
          <AddBlog onAddBlogSubmit={handleAddBlogSubmit} />
        </Route>
      </Switch>
    </>
  )
}

export default Blogs;
