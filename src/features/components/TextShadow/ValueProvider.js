import React, { Component } from 'react'
import ValueContext from "../context/ValueContext";

export default class ValueProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idItem: 0,
            dataLayer: [
                {   
                    shiftRight: 0,
                    shiftDown: 0,
                    blur: 5,
                    opacity: 20,
                    r: 0,
                    g: 0,
                    b: 0
                }
            ]
        };
    }

    addData = () => {
        this.setState(
            (prevState) => ({
                dataLayer: [...prevState.dataLayer, {
                    shiftRight: 0,
                    shiftDown: 0,
                    blur: 5,
                    opacity: 20,
                    r: 0,
                    g: 0,
                    b: 0
                }]
            })
        );
    }

    onSwapLayer = (data) => {
        this.setState({
            dataLayer: data
        })
    }

    editData = (data) => {       
        this.setState(
            (prevState) => ({
                dataLayer: prevState.dataLayer.map((el, i) => (
                    i === prevState.idItem 
                    ? {...el, shiftRight: data.shiftRight, shiftDown: data.shiftDown, blur: data.blur, opacity: data.opacity} 
                    : el
                    ))
            })
        )
    }

    editColor = (data) => {
        this.setState(
            (prevState) => ({
                dataLayer: prevState.dataLayer.map((el, i) => (
                    i === prevState.idItem ? {...el, r: data.r, g: data.g, b: data.b} : el
                    ))
            })
        )
    }

    deleteData = () => {
        let dataLayerUpdate = this.state.dataLayer.filter((val, i) => i !== this.state.idItem);
        
        if(this.state.idItem > 0) {
            this.setState(
                (prevState) => ({
                    dataLayer: dataLayerUpdate,
                    idItem: prevState.idItem-1
                })
            )
        }

        if(this.state.dataLayer.length !== 1 && this.state.idItem === 0) {
            this.setState(
                (prevState) => ({
                    dataLayer: dataLayerUpdate,
                    idItem: prevState.idItem
                })
            )
        }
    }

    currentIdItem = (id) => {
        this.setState({
            idItem: id
        })
    }

    render() {
        return (
           <ValueContext.Provider value={{state: this.state, addData: this.addData, editData: this.editData, currentIdItem: this.currentIdItem, editColor: this.editColor, deleteData: this.deleteData, onSwapLayer: this.onSwapLayer}}>  
              {this.props.children}
           </ValueContext.Provider>
       )
    }
}