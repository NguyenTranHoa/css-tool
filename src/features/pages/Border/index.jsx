import React from 'react'
import "./Border.css"
import Control from '../../components/Border/Control'
import View from '../../components/Border/View'
import { Provider } from "react-redux";
import store from '../../components/Border/store'

export default function App() {
    return (
        <div className="wrapper">
            <Provider store={store}>
            <div className="wrapper-inner">
                <Control/>
                <View/>
            </div>
            </Provider>
        </div>
    )
}
