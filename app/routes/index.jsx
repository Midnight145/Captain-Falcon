import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Settings } from '../containers/settings';

import { App } from '../components/app';
import { Home } from '../components/home';
import { NotFound } from '../components/notFound';
import { TimeAttack } from '../components/timeAttack';
import { Training } from '../components/training';

export const routes = <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/settings' component={Settings} />
    <Route path='/timeAttack' component={TimeAttack} />
    <Route path='/training' component={Training} />
    <Route path='*' component={NotFound} />
</Route>;