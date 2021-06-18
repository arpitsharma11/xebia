import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "./component/AppHeader";

import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <AppHeader />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blogs" component={Blogs} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App;
