import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Fallback from './Fallback';
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';
import Form3 from './pages/Form3';

const Home = React.lazy(() => import('./pages/Home'));
const Posts = React.lazy(() => import('./pages/Posts'));

const Router = () => (
  <React.Suspense fallback={<Fallback />}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/Form1" component={Form1} />
        <Route exact path="/Form2" component={Form2} />
        <Route exact path="/Form3" component={Form3} />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default Router;
