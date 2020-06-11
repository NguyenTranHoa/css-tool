import React, { Component } from 'react'
import ColorText from './ColorText'
import ColorBack from './ColorBack'
import { Card } from 'react-bootstrap';
import styled from 'styled-components'

const Preview = styled.section`
    background-color: rgb(${props => props.r}, ${props => props.g}, ${props => props.b});
    width: 100%;
    padding: 40px;
`

const Box = styled.section`
    background-color: rgb(${props => props.r}, ${props => props.g}, ${props => props.b});
    width: 200px;
    height: 200px;
    box-shadow: ${props => props.boxShadowCss}
`

export default class PreviewBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorText: {
                
            },
            colorBack: {

            }
        }
    }

    editColorText (data) {
        this.setState({
            colorText: {
                r: data.r,
                g: data.g,
                b: data.b
            }
        })
    }

    editColorBack (data) {
        this.setState({
            colorBack: {
                r: data.r,
                g: data.g,
                b: data.b
            }
        })
    }

    render() {
        return (
            <div>
                <Card>
                <div className="preview-title mt-3 mx-4">
                    <h5 className='font-weight-bold'>Preview</h5>
                    <div className="preview-title-color">
                        <div className="mr-1"><ColorText editColorText={(data) => this.editColorText(data)}/></div>
                        <div><ColorBack editColorBack={(data) => this.editColorBack(data)}/></div>
                    </div>
                </div>
                <Preview r={this.state.colorBack.r} g={this.state.colorBack.g} b={this.state.colorBack.b}>
                    <Box r={this.state.colorText.r} g={this.state.colorText.g} b={this.state.colorText.b} boxShadowCss={this.props.boxShadowCss()}>
                    </Box>
                </Preview>
                </Card>
            </div>
        )
    }
}
