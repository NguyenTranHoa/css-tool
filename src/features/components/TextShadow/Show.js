import React, { Component } from 'react'
import ValueContext from '../context/ValueContext'
import Precode from './Precode';

class Show extends Component {

    showDiv = () => 
       ( this.props.context.state.dataLayer.map((value, key) => 
            <Precode
            key={key}
            id = {key}
            />
        ))
    
    render() {
        return (
            <div className="mx-5 my-2">
                <h5 className="my-1 font-weight-bold">CSS code</h5>
                <div className="code">text-shadow:   {this.showDiv()}</div>
            </div>
        )
    }
}

const withContext = (Component) => {
    return (props) => (
        <ValueContext.Consumer>    
             {(context) => (
                 <Component {...props} context={context} />
             )}
        </ValueContext.Consumer>
    )
  }
  
export default withContext(Show);
  