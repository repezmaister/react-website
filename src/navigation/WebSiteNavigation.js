import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './AppRoute';
import { WebSiteLayout } from '../layouts/WebSiteLayout';
import Home from '../views/home';
import AboutUs from '../views/aboutUs';



export default function WebSiteNavigation()
{
 
    
    return(
        <Switch>
            <AppRoute exact path='/' layout={WebSiteLayout} component={Home} />
            <AppRoute exact path='/nosotros' layout={WebSiteLayout} component={AboutUs} />
        </Switch>
    )
}
