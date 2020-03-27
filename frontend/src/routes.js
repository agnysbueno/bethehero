import React from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
//switch serve para garantir que somente uma rota será executada por vez

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon} />
            </Switch>

            <Switch>
                <Route path='/register' component={Register} />
            </Switch>

            <Switch>
                <Route path='/profile' component={Profile} />
            </Switch>

            <Switch>
                <Route path='/incidents/new' component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}