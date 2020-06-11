import React, { Component } from 'react'
import Color  from './Color';
import ValueContext from '../context/ValueContext'
import InputRange from 'react-input-range';

class Range extends Component {
    constructor(props) {
        super(props);
        this.state = {
          shiftRight: 0,
          shiftDown: 0,
          blur: 5,
          opacity: 20
        };
    }
    
    async isChangeRight (value) {
        let {dataLayer} = this.props.context.state;
        let {idItem} = this.props.context.state;
        let {editData} = this.props.context;
        await this.setState({
            shiftRight: value,
            shiftDown: dataLayer[idItem].shiftDown,
            blur: dataLayer[idItem].blur,
            opacity: dataLayer[idItem].opacity
        })
        editData(this.state);
    }

    async isChangeDown (value) {
        let {dataLayer} = this.props.context.state;
        let {idItem} = this.props.context.state;
        let {editData} = this.props.context;
        await this.setState({
            shiftRight: dataLayer[idItem].shiftRight,
            shiftDown: value,
            blur: dataLayer[idItem].blur,
            opacity: dataLayer[idItem].opacity
        })
        editData(this.state);
    }

    async isChangeBlur (value) {
        let {dataLayer} = this.props.context.state;
        let {idItem} = this.props.context.state;
        let {editData} = this.props.context;
        await this.setState({
            shiftRight: dataLayer[idItem].shiftRight,
            shiftDown: dataLayer[idItem].shiftDown,
            blur: value,
            opacity: dataLayer[idItem].opacity
        })
        editData(this.state);
    }

    async isChangeOpacity (value) {
        let {dataLayer} = this.props.context.state;
        let {idItem} = this.props.context.state;
        let {editData} = this.props.context;
        await this.setState({
            shiftRight: dataLayer[idItem].shiftRight,
            shiftDown: dataLayer[idItem].shiftDown,
            blur: dataLayer[idItem].blur,
            opacity: value
        })
        editData(this.state);
    }

    render() {
        let {idItem} = this.props.context.state;
        let {dataLayer} = this.props.context.state;
        return (
            <div className="mt-4 mx-4">
                <div className='mb-4'>
                    <h6 className="mb-3">Shift Right</h6>
                    <InputRange
                    maxValue={50}
                    minValue={-50}
                    value={dataLayer[idItem].shiftRight}
                    onChange={(value) => this.isChangeRight(value)}
                    >
                    </InputRange>
                </div>

                <div className='mb-4'>
                    <h6 className="mb-3">Shift Down</h6>
                    <InputRange
                    maxValue={50}
                    minValue={-50}
                    value={dataLayer[idItem].shiftDown}
                    onChange={value => this.isChangeDown(value)}
                    >
                    </InputRange>
                </div>
                <div className='mb-4'>
                    <h6 className="mb-3">Blur</h6>
                    <InputRange
                    maxValue={100}
                    minValue={0}
                    value={dataLayer[idItem].blur}
                    onChange={value => this.isChangeBlur(value)}
                    >
                    </InputRange>
                </div>
                <div className='mb-4'>
                    <h6 className="mb-3">Opacity</h6>
                    <InputRange
                    maxValue={100}
                    minValue={0}
                    value={dataLayer[idItem].opacity}
                    onChange={value => this.isChangeOpacity(value)}
                    >
                    </InputRange>
                 </div>
                <Color/> 
            </div>
        )
    }
}

  const withContext = (Component) => {
    return (props) =>( 
        <ValueContext.Consumer>    
             {(context) => {
                return <Component {...props} context={context} />
             }}
        </ValueContext.Consumer>
    )
 }
 
  
export default withContext(Range);
  