import React from 'react'
import {Card} from 'react-bootstrap'
import InputRange from 'react-input-range'

export default function Control (props) {

    return (
        <div className="control mb-3">
            <Card style={{border: '2px solid #eee'}}>
                <h5 className="mt-4 ml-4 font-weight-bold">Transform CSS Generator</h5>
                <div  className="mt-4 mx-4">
                    <div className="mb-4">
                        <h6 className='mb-3'>Scale (x)</h6>
                        <InputRange
                            maxValue={2}
                            minValue={0}
                            step={0.1}
                            value={props.scale}
                            onChange={value => props.changeScale(value)}
                        >
                        </InputRange>
                    </div>
                    <div className="mb-4">
                        <h6 className='mb-3'>Rotate (deg)</h6>
                        <InputRange
                            maxValue={360}
                            minValue={0}
                            value={props.rotate}
                            onChange={value => props.changeRotate(value)}
                        >
                        </InputRange>
                    </div>
                    <div className="mb-4">
                        <h6 className='mb-3'>TranslateX (px)</h6>
                        <InputRange
                            maxValue={100}
                            minValue={-100}
                            value={props.translateX}
                            onChange={value => props.changeTranslateX(value)}
                        >
                        </InputRange>
                    </div>
                    <div className="mb-4">
                        <h6 className='mb-3'>TranslateY (px)</h6>
                        <InputRange
                            maxValue={100}
                            minValue={-100}
                            value={props.translateY}
                            onChange={value => props.changeTranslateY(value)}
                        >
                        </InputRange>
                    </div>
                    <div className="mb-4">
                        <h6 className='mb-3'>SkewX (deg)</h6>
                        <InputRange
                            maxValue={100}
                            minValue={-100}
                            value={props.skewX}
                            onChange={value => props.changeSkewX(value)}
                        >
                        </InputRange>
                    </div>
                    <div className="mb-4">
                        <h6 className='mb-3'>SkewY (deg)</h6>
                        <InputRange
                            maxValue={100}
                            minValue={-100}
                            value={props.skewY}
                            onChange={value => props.changeSkewY(value)}
                        >
                        </InputRange>
                    </div>
                    <div className="mb-4">
                        <h6 className='mb-3'>Transform origin X(%)</h6>
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={props.transformX}
                            onChange={value => props.changeTransformX(value)}
                        >
                        </InputRange>
                    </div>
                    <div className="mb-4">
                        <h6 className='mb-3'>Transform origin Y(%)</h6>
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={props.transformY}
                            onChange={value => props.changeTransformY(value)}
                        >
                        </InputRange>
                    </div>
                    <hr/>
                    <div>
                        <button type='button' onClick={() => props.reset()}>Reset default</button>
                    </div>
                </div>
            </Card>
        </div>
    )
}