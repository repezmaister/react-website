import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './AppRoute';
import { WebSiteLayout } from '../layouts/WebSiteLayout';
import Home from '../views/home';



export default function WebSiteNavigation()
{
 
    
    return(
        <Switch>
            <AppRoute exact path='/' layout={WebSiteLayout} component={Home} />
        </Switch>
    )
}
