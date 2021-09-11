import './app.less'
import './init'
import React from 'react'
import ReactDOM from 'react-dom'
import rootSaga from './state/rootSaga'
import store from './state/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { initAPI, initBlockchain } from './api'
import config from './config'
import App from './App'

if (!config.debug) {
  Sentry.init({
    dsn: config.defaults.sentryDsn,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0
  })
}

document.body.ontouchstart = function () {
}

initAPI(store)
initBlockchain(store)

rootSaga.run()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
