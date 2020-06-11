import React, { Component } from 'react'
import "react-input-range/lib/css/index.css"//thu xoa
import "./TextShadow.css"
import Control from '../../components/TextShadow/Control'
import View from '../../components/TextShadow/View'
import ValueProvider from '../../components/TextShadow/ValueProvider'

export default class App extends Component {
  render() {
    return (
      
      <div className="wrapper">
        <ValueProvider>
          <div className="wrapper-inner">
            <Control />
            <View/>
          </div>
        </ValueProvider>
      </div>
    )
  }
}