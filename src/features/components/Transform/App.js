import React, {useState} from 'react'
import Control from '../../components/Transform/Control'
import View from '../../components/Transform/View';
import CssCode from '../../components/Transform/CssCode'

export default function App () {

    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [skewX, setSkewX] = useState(0);
    const [skewY, setSkewY] = useState(0);
    const [transformX, setTransformX] = useState(50);
    const [transformY, setTransformY] = useState(50);
    const [back, setChangeBack] = useState({r: 255, g: 255, b: 255});
    const [fore, setChangeFore] = useState({r: 61, g: 157, b: 246});

    const changeScale = (value) => {
        let valueU = Math.round(value*100)/100;
        setScale(valueU)
    }

    const changeRotate = (value) => {
        setRotate(value)
    }

    const changeTranslateX = (value) => {
        setTranslateX(value)
    }

    const changeTranslateY = (value) => {
        setTranslateY(value)
    }

    const changeSkewX = (value) => {
        setSkewX(value)
    }

    const changeSkewY = (value) => {
        setSkewY(value)
    }

    const changeTransformX = (value) => {
        setTransformX(value)
    }

    const changeTransformY = (value) => {
        setTransformY(value)
    }

    const reset = () => {
        setScale(1);
        setRotate(0)
        setTranslateX(0)
        setTranslateY(0)
        changeSkewX(0)
        changeSkewY(0)
        changeTransformX(50)
        changeTransformY(50)
    }

    const changeFore = (value) => {
        setChangeFore({r: value.r, g: value.g, b: value.b})
    }

    const changeBack = (value) => {
        setChangeBack({r: value.r, g: value.g, b: value.b})
    }

    return (
        <div>
            <Control 
                scale={scale} changeScale={(value) => changeScale(value)}
                rotate={rotate} changeRotate={(value) => changeRotate(value)}
                translateX={translateX} changeTranslateX={(value) => changeTranslateX(value)}
                translateY={translateY} changeTranslateY={(value) => changeTranslateY(value)}
                skewX={skewX} changeSkewX={(value) => changeSkewX(value)}
                skewY={skewY} changeSkewY={(value) => changeSkewY(value)}
                transformX={transformX} changeTransformX={(value) => changeTransformX(value)}
                transformY={transformY} changeTransformY={(value) => changeTransformY(value)}
                reset={reset}
            />
            <div className="view">
                <View
                    fore={fore} changeFore={(value) => changeFore(value)}
                    back={back} changeBack={(value) => changeBack(value)}
                    scale={scale} rotate={rotate} translateX={translateX} translateY={translateY}
                    skewX={skewX} skewY={skewY} transformX={transformX} transformY={transformY}
                />
                <CssCode 
                    scale={scale} rotate={rotate} translateX={translateX} translateY={translateY}
                    skewX={skewX} skewY={skewY} transformX={transformX} transformY={transformY}
                />
            </div>
        </div>
    )
}