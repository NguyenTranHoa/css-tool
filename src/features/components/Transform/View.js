import React from 'react'
import InputColor from 'react-input-color'
import styled from 'styled-components'
import {Card} from 'react-bootstrap'


export default function View(props) {

    const Wrapper = styled.section`
        height: 280px;
        padding: 40px;
    `

    const Wrap = styled.section`
        width: 200px;
        height: 200px;
        border: 1px solid #000;
    `

    const Preview = styled.section`
        width: 100%;
        height: 100%;
        background: rgb(${props => props.fore.r}, ${props => props.fore.g}, ${props => props.fore.b});
        transform: scale(${props => props.scale}) rotate(${props => props.rotate}deg) translate(${props => props.translateX}px, ${props => props.translateY}px) skew(${props => props.skewX}deg, ${props => props.skewY}deg);
        transform-origin: ${props => props.transformX}% ${props => props.transformY}%;
        opacity: .7;
        transition: .3s;
    `
    let {fore, back, scale, rotate, translateX, translateY, skewX, skewY, transformX, transformY} = props;

    return (
        <Card style={{border: '2px solid #eee'}} className ="mb-3">
            <div className="preview-title mt-2 mx-4">
                <h5>Preview</h5>
                <div>
                    <div><InputColor 
                        initialValue="#fff"
                        onChange={(color) => props.changeBack(color)}
                    /></div>
                    <div><InputColor
                        initialValue="#3D9DF6"
                        onChange={(value) => props.changeFore(value)}
                    /></div>
                </div>
            </div>
            <Wrapper style={{background: `rgb(${back.r}, ${back.g}, ${back.b})`}}>
                <Wrap>
                    <Preview 
                        fore={fore} back={back} scale={scale} rotate={rotate} translateX={translateX} translateY={translateY}
                        skewX={skewX} skewY={skewY} transformX={transformX} transformY={transformY}
                    >Preview text
                    </Preview>
                </Wrap>
            </Wrapper>
        </Card>
    )
}