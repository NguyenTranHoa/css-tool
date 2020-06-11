import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
import styled from 'styled-components'
import { connect } from 'react-redux';
import InputColor from 'react-input-color';

const Preview = styled.section`
    border${props => props.position}: ${props => props.width}px ${props => props.styled} rgb(${props => props.redBorder}, ${props => props.greenBorder}, ${props => props.blueBorder});
    border-radius: ${props => props.topLeft}px ${props => props.topRight}px ${props => props.bottomRight}px ${props => props.bottomLeft}px;
    width: 200px;
    height: 200px;
    background: rgb(${props => props.redFore}, ${props => props.greenFore}, ${props => props.blueFore});
    margin: 40px;
`;

class View extends Component {
    render() {
        return (
            <div className="view-wrapper">
                <Card>
                    <div className="m-3 d-flex justify-content-between" >
                        <h5 className="font-weight-bold">Preview</h5>
                        <div className="d-flex">
                            <div className="mr-2">
                                <InputColor
                                initialValue="#3d9df6"
                                onChange={(color) => this.props.changeFore(color)}
                            />
                            </div>
                            <div>
                                <InputColor
                                    initialValue="#fff"
                                    onChange={(color) => this.props.changeBack(color)}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{background: `rgb(${this.props.redBack}, ${this.props.greenBack}, ${this.props.blueBack})`}}>
                        <Preview
                            styled={this.props.style}
                            position={this.props.position} 
                            width={this.props.width} 
                            redBorder={this.props.redBorder} greenBorder={this.props.greenBorder} blueBorder={this.props.blueBorder}
                            topLeft={this.props.topLeft}
                            topRight={this.props.topRight}
                            bottomRight={this.props.bottomRight}
                            bottomLeft={this.props.bottomLeft}
                            redFore={this.props.redFore}
                            greenFore={this.props.greenFore}
                            blueFore={this.props.blueFore}
                        />
                    </div>
                </Card>
                <Card>
                    <div className="m-3">
                        <h5 className="font-weight-bold">Css Code</h5>
                        <div className="fz mt-3">
                            <div>border{this.props.position}: {this.props.width}px {this.props.style} <span className='textUpperCase'>{this.props.hex}</span></div>
                            <div>border-radius: {this.props.topLeft}px {this.props.topRight}px {this.props.bottomRight}px {this.props.bottomLeft}px</div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        width: state.width,
        redBorder: state.border[0].red,
        greenBorder: state.border[1].green,
        blueBorder: state.border[2].blue,      
        hex: state.border[3].hex,
        style: state.style,
        position: state.position,
        corner: state.corner,
        topLeft: state.topLeft,
        topRight: state.topRight,
        bottomRight: state.bottomRight,
        bottomLeft: state.bottomLeft,
        redFore: state.fore[0].red,
        greenFore: state.fore[1].green,
        blueFore: state.fore[2].blue, 
        redBack: state.back[0].red,
        greenBack: state.back[1].green,
        blueBack: state.back[2].blue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFore: (color) => {
            dispatch({type: 'CHANGE_FORE', color})
        },
        changeBack: (color) => {
            dispatch({type: 'CHANGE_BACK', color})
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(View);