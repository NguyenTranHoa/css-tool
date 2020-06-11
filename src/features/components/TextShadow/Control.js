import React, { Component } from 'react'
import Range from './Range'
import {Card} from 'react-bootstrap';
import Layer from './Layer';

export default class Control extends Component {
    render() {
        return (
            <div className="control mb-3">
                <Card style={{border: '2px solid #eee'}}>
                    <h5 className="mt-4 ml-4 font-weight-bold">Text-Shadow CSS Generator</h5>
                    <Range/>
                    <hr/>
                    <Layer/>
                </Card>
            </div>
        )
    }
}