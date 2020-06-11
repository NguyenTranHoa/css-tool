import React, { Component, Fragment } from 'react'
import ValueContext from '../context/ValueContext'

class Precode extends Component {
    render() {
        let {state} = this.props.context;
        let opacity = state.dataLayer[state.idItem].opacity/100;
        let space ='\u00A0\u00A0';
        return (
            <Fragment>
               {space} rgba({state.dataLayer[state.idItem].r},{state.dataLayer[state.idItem].g},{state.dataLayer[state.idItem].b}, {opacity}) {state.dataLayer[state.idItem].shiftRight}px {state.dataLayer[state.idItem].shiftDown}px {state.dataLayer[state.idItem].blur}px;
            </Fragment>
        )
    }
}

const withContext = (Component) => {
    return (props) => (
        <ValueContext.Consumer>    
             {(context) => {
                return <Component {...props} context={context} />
             }}
        </ValueContext.Consumer>
    )
  }
  
export default withContext(Precode);