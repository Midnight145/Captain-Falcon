import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from '../components/app';

export const routes = <Route path='/'>
    <IndexRoute component={App} />
</Route>;