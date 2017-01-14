import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Settings } from 'containers/settings';
import { Training } from 'containers/training';

import { App } from 'components/app';
import { Home } from 'components/home';
import { Library } from 'components/library';
import { NotFound } from 'components/notFound';
import { TimeAttack } from 'components/timeAttack';

export const routes = <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/library' component={Library} />
    <Route path='/settings' component={Settings} />
    <Route path='/timeAttack' component={TimeAttack} />
    <Route path='/training' component={Training} />
    <Route path='*' component={NotFound} />
</Route>;