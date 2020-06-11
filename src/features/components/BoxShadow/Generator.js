import React, { Component } from 'react'
import InputRange from 'react-input-range';
import ColorShadow from "./ColorShadow";
import {Card} from 'react-bootstrap';

export default class Generator extends Component {

    onChangeCheckBox = (event) => {
        this.props.onChangeCheckBox(event.target.checked);
    }

    render() {

        return (
            <div className="generator">
                <Card className="generator-inner">
                <h5 className="generator-title">Box-Shadow CSS Generator</h5>
                <div className="generator-content">
                    <div className="generator-item">
                        <h6 className='mb-4'>ShiftRight</h6>
                        <InputRange
                            maxValue={50}
                            minValue={-50}
                            value={this.props.values.shiftRight}
                            onChange={value => this.props.onChangeValue('shiftRight', value)}
                        >
                        </InputRange>
                    </div>
                    <div className="generator-item">
                        <h6 className='mb-4'>ShiftDown</h6>
                        <InputRange
                            maxValue={50}
                            minValue={-50}
                            value={this.props.values.shiftDown}
                            onChange={value => this.props.onChangeValue('shiftDown', value)}
                        >
                        </InputRange>
                    </div>
                    <div className="generator-item">
                        <h6 className='mb-4'>Spread</h6>
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={this.props.values.spread}
                            onChange={value => this.props.onChangeValue('spread', value)}
                        >
                        </InputRange>
                    </div>
                    <div className="generator-item">
                        <h6 className='mb-4'>Blur</h6>
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={this.props.values.blur}
                            onChange={value => this.props.onChangeValue('blur', value)}
                        >
                        </InputRange>
                    </div>
                    <div  className="generator-item">
                        <h6 className='mb-4'>Opacity</h6>
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={this.props.values.opacity}
                            onChange={value => this.props.onChangeValue('opacity', value)}
                        >
                        </InputRange>
                    </div>
                    <div className='my-3'>
                        <input type='checkbox' checked={this.props.values.inset} onChange={(event) => this.onChangeCheckBox(event)}></input>
                        <label className='ml-2'>Inset</label>
                    </div>
                    <div>
                        <ColorShadow onShadowColorChange={(color) => this.props.onShadowColorChange(color)} />
                    </div>
                </div>
                </Card>
            </div>
        )
    }
}
