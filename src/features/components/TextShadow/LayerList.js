import React, { Component } from 'react'
import LayerItem from './LayerItem'
import ValueContext from '../context/ValueContext'
import { ReactSortable } from "react-sortablejs";

class LayerList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            
        }
    }

    showLayder = () => this.props.context.state.dataLayer.map((value,key) => 
            (<LayerItem
                key={key}
                id={key}            
            />)
        )

    onSwapLayer = (data) => {
        this.props.context.onSwapLayer(data);
    } 

    render() {
        let {dataLayer} = this.props.context.state;
        return (
            <div className="my-3">
                <ReactSortable
                    list={dataLayer}
                    setList={(data) => this.onSwapLayer(data)}
                >
                    {this.showLayder()}
                </ReactSortable>
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
  
  export default withContext(LayerList);
  