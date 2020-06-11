import React, { Component } from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap'

const Tem1 = styled.section`
    width: 50px;
    height: 50px;
    background: #79dff1;
    box-shadow: 5px 5px 0 0 #289fed, 10px 10px 0 0 #5fb8ff, 15px 15px 0 0 #a1d8ff, 20px 20px 0 0 #cae6ff, 25px 25px 0 0 #e1eeff, inset 5px 5px 1px 14px transparent
`

const Tem2 = styled.section`
    width: 50px;
    height: 50px;
    background: #79dff1;
    box-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px red, inset 5px 5px 1px 14px transparent;
`

export default class Template extends Component {
    state = {
        template1: 
            [
                {
                    red: 40,
                    green: 159,
                    blue: 237,
                    shiftRight: 5,
                    shiftDown: 5,
                    spread: 0,
                    blur: 0,
                    opacity: 100,
                    inset: false
                },
                {
                    red: 95,
                    green: 184,
                    blue: 255,
                    shiftRight: 10,
                    shiftDown: 10,
                    spread: 0,
                    blur: 0,
                    opacity: 100,
                    inset: false
                },
                {
                    red: 161,
                    green: 216,
                    blue: 255,
                    shiftRight: 15,
                    shiftDown: 15,
                    spread: 0,
                    blur: 0,
                    opacity: 100,
                    inset: false
                },
                {
                    red: 202,
                    green: 230,
                    blue: 255,
                    shiftRight: 20,
                    shiftDown: 20,
                    spread: 0,
                    blur: 0,
                    opacity: 100,
                    inset: false
                },
                {
                    red: 225,
                    green: 238,
                    blue: 255,
                    shiftRight: 25,
                    shiftDown: 25,
                    spread: 0,
                    blur: 0,
                    opacity: 100,
                    inset: false
                }
            ],

        template2: 
            [
                {
                    red: 255,
                    green: 255,
                    blue: 255,
                    shiftRight: -1,
                    shiftDown: 0,
                    spread: 0,
                    blur: 4,
                    opacity: 10,
                    inset: false
                },
                {
                    red: 255,
                    green: 255,
                    blue: 0,
                    shiftRight: -2,
                    shiftDown: 0,
                    spread: 0,
                    blur: 10,
                    opacity: 100,
                    inset: false
                },
                {
                    red: 255,
                    green: 128,
                    blue: 0,
                    shiftRight: -10,
                    shiftDown: 0,
                    spread: 0,
                    blur: 20,
                    opacity: 100,
                    inset: false
                },
                {
                    red: 255,
                    green: 0,
                    blue: 0,
                    shiftRight: -18,
                    shiftDown: 0,
                    spread: 0,
                    blur: 40,
                    opacity: 100,
                    inset: false
                }
            ]
    }
    render() {
        return (
            <Card className='template'>
                <h5 className='mb-4 font-weight-bold'>Template</h5>
                <div className="d-flex mb-2">
                    <div className="mr-5" onClick={() => this.props.onClickTemplate(this.state.template1)}>
                        <Tem1>
                        </Tem1>
                    </div>
                    <div onClick={() => this.props.onClickTemplate(this.state.template2)}>
                        <Tem2>
                        </Tem2>
                    </div>
                </div>
            </Card>
        )
    }
}
