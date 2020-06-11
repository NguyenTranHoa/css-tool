import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
import LayerList from './LayerList';
import ValueContext from '../context/ValueContext'

class Layer extends Component {

    handleClick () {
        let {addData} = this.props.context;
        addData();
    }

    render() {
        return (
            <div className="mt-2 mx-4">
                <Button variant="info" onClick={() => this.handleClick()}>Add Layer</Button>
                <LayerList />
            </div>
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
 
 export default withContext(Layer);