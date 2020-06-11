import React from 'react'
import {Card} from 'react-bootstrap'

export default function CssCode(props) {
    let {scale, rotate, translateX, translateY, skewX, skewY, transformX, transformY} = props;
    
    return (
        <div className="csscode">
            <Card >
                <h5>Css code</h5>
                <div>transform: {(scale===1 && rotate===0 && translateX===0 && translateY===0 && skewX===0 && skewY===0) ? 'none' : ''} {scale !== 1 ? `scale(${scale})`: ''} {rotate !== 0 ? `rotate(${rotate}deg)` : ''} {(translateX !== 0 || translateY !== 0) ? `translate(${translateX}px,${translateY}px)` : ''} {(skewX !== 0 || skewY !== 0) ? `skew(${skewX}deg,${skewY}deg)` : ''};</div>
                <div>transform-origin: {(transformX !== 50 || transformY !== 50) ? `transform(${transformX}%,${transformY}%)` : 'none'} ;</div>
            </Card>
        </div>
    )
}