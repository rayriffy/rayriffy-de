import React from 'react'
import ReactDOM from 'react-dom'

import Helmet from 'react-helmet'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Loadable from 'react-loadable'

import App from './components/app'
import Loading from './components/loading'

import 'antd/dist/antd.css'

const Home = Loadable({
  loader: () => import('./pages/home' /* webpackChunkName: "home" */),
  loading: Loading,
})

const NotFound = Loadable({
  loader: () => import('./pages/404' /* webpackChunkName: "notfound" */),
  loading: Loading,
})

const Root = () => {
  return (
    <Router>
      <Helmet defaultTitle="Riffy de" titleTemplate="%s · Riffy de">
        <style>
          {`body {
              background-color: #f0f2f5;
            }`}
        </style>
      </Helmet>

      <App>
        <Switch>
          <Route exact path="/" render={() => <Home />} />

          <Route exact component={NotFound} />
        </Switch>
      </App>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('lullar-de'))
