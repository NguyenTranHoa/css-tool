import React, { Component } from 'react'
import ValueContext from '../context/ValueContext';
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class LayerItem extends Component {

    handleLayer = () => {
        this.props.context.currentIdItem(this.props.id);
    }

    handleDelete = async () => {
        await this.props.context.currentIdItem(this.props.id);
        this.props.context.deleteData(this.props.context.state.idItem);
    }

    render() {
        let {dataLayer} = this.props.context.state;
        let {idItem} = this.props.context.state;
        let opacity = dataLayer[`${this.props.id}`].opacity/100;
        let isActive = 'px-2 py-2';
        
        if(idItem === this.props.id) {
            isActive += ' actived'
        }
        
        return (
            <div onClick={() => this.handleLayer()}>
                <Card border="light">
                    <div className={isActive}>
                        {dataLayer[`${this.props.id}`].shiftRight}px {dataLayer[`${this.props.id}`].shiftDown}px {dataLayer[`${this.props.id}`].blur}px rgba({dataLayer[`${this.props.id}`].r},{dataLayer[`${this.props.id}`].g},{dataLayer[`${this.props.id}`].b},{opacity})
                        <span className="float-right" onClick={() => {this.handleDelete()}}>
                            <FontAwesomeIcon icon={faTrash} />
                        </span>
                    </div>
                </Card>
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
 
 export default withContext(LayerItem);