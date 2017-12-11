import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Meetups from './Meetups';
import About from './About';
import MeetupDetails from './MeetupDetails';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Meetups}/>;
            <Route exact path='/About' component={About}/>;
            <Route exact path='/meetups/:id' component={MeetupDetails}/>;
        </Switch>
    </main>
)

export default Main;
