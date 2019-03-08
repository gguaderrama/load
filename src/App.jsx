import React from 'react'
import { render } from 'react-dom'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import logger from './middleware/logger'
import thunk from 'redux-thunk'
import AppReducer from './reducers'
import Routes from './routes'
import './styles/less/style.less'
import 'react-table/react-table.css'
import 'toastr/build/toastr.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faPlusCircle, faArrowLeft, faArrowCircleLeft, faQuestion, faTimes, faExclamation, faCheck, faSpinner, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faBell, faEnvelope, faFilePdf, faFileExcel } from '@fortawesome/free-regular-svg-icons'

library.add(faBars, faFilePdf, faFileExcel, faEnvelope, faBell, faPlusCircle, faArrowCircleLeft, faQuestion, faTimes, faExclamation, faCheck,faSpinner,faPencilAlt)

const root = document.getElementById('root')
const history = createHashHistory({ basname: '', hashType: 'slash' })
const store = createStore(
    AppReducer(history),
    applyMiddleware(logger, thunk, routerMiddleware(history))
)

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider >, root
)