import React from 'react';
import { Route } from 'react-router-dom';


const AppRoute = ({ component: Component, layout: Layout, path: Path }) => (
  <Route path={Path} render={props => (
    <Layout>
     
      <Component {...props} />
    </Layout>
  )} />
)


export default AppRoute;