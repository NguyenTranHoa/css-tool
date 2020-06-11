import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
import InputRange from 'react-input-range';
import InputColor from 'react-input-color';
import { connect } from 'react-redux';
import styled from 'styled-components'

const ButtonStyle = styled.button`
    border: 5px ${props => props.styled} rgb(${props => props.red}, ${props => props.green}, ${props => props.blue});
    background: #F4F5FA;
    height: 50px;
    width: 100%;
    margin: 0;
    padding: 0;
`;

const ButtonPosition = styled.button`
    border${props => props.position}: 5px ${props => props.styled} rgb(${props => props.red}, ${props => props.green}, ${props => props.blue});
    background: #F4F5FA;
    height: 50px;
    width: 100%;
    margin: 0;
    padding: 0;
`;

const Wrapper = styled.div`
    &:hover ${ButtonStyle} {
        background: #fcf1cd;
    }
    &:hover ${ButtonPosition} {
        background: #fcf1cd;
    }
    margin: 5px;
`;

const Button = styled.button`
    padding: 7px 16px;
    background: linear-gradient(180deg,#fff,#f9fafb);
    border: .1rem solid var(--p-border,#c4cdd5);
    box-shadow: 0 1px 0 0 rgba(22,29,37,.05);
    border-radius: 3px;  
`

class Control extends Component {

    render() {
        let {style} = this.props;
        let {position} = this.props;
        return (
            <div className="control-wrapper">
                <Card className="control-inner">
                    <h5 className="font-weight-bold">Config custom border</h5>
                    <div className="mt-4">
                        <h6 className="mb-3">Width</h6>
                            <InputRange
                                maxValue={30}
                                minValue={1}
                                value={this.props.width}
                                onChange={(value) => this.props.changeWidth(value)}
                                >
                            </InputRange>
                    </div>
                    <div className="mt-4">
                        <h6 className="mb-3">Color</h6>
                        <InputColor
                            initialValue="#1C6EA4"
                            onChange={(color) => this.props.changeColor(color)}
                        >
                        </InputColor>
                    </div>
                    <div className="mt-4">
                        <h6 className="mb-3">Style</h6>
                        <div className="style-inner">
                            <Wrapper onClick={() => this.props.changeStyle('solid')}>
                                <ButtonStyle styled='solid' red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ style==='solid' ? 'active' : '' }>solid</div>
                                </ButtonStyle>
                            </Wrapper>
                            <Wrapper onClick={() => this.props.changeStyle('dotted')}>
                                <ButtonStyle styled='dotted' red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ style==='dotted' ? 'active' : '' }>dotted</div>
                                </ButtonStyle>
                            </Wrapper>
                            <Wrapper onClick={() => this.props.changeStyle('dashed')}>
                                <ButtonStyle styled='dashed' red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ style==='dashed' ? 'active' : '' }>dashed</div>
                                </ButtonStyle>
                            </Wrapper>
                            <Wrapper onClick={() => this.props.changeStyle('double')}>
                                <ButtonStyle styled='double' red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ style==='double' ? 'active' : '' }>double</div>
                                </ButtonStyle>
                            </Wrapper>
                            <Wrapper onClick={() => this.props.changeStyle('groove')}>
                                <ButtonStyle styled='groove' red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ style==='groove' ? 'active' : '' }>groove</div>
                                </ButtonStyle>
                            </Wrapper>
                            <Wrapper onClick={() => this.props.changeStyle('ridge')}>
                                <ButtonStyle styled='ridge' red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ style==='ridge' ? 'active' : '' }>ridge</div>
                                </ButtonStyle>
                            </Wrapper>
                            <Wrapper onClick={() => this.props.changeStyle('inset')}>
                                <ButtonStyle styled='inset' red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ style==='inset' ? 'active' : '' }>inset</div>
                                </ButtonStyle>
                            </Wrapper>
                            <Wrapper onClick={() => this.props.changeStyle('outset')}>
                                <ButtonStyle styled='outset' red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ style==='outset' ? 'active' : '' }>outset</div>
                                </ButtonStyle>
                            </Wrapper>
                        </div>
                    </div>
                    <div>
                        <h6 className="mb-3">Position</h6>
                        <div className="position-inner">
                            <Wrapper onClick={() => this.props.changePosition('')}>
                                <ButtonPosition position='' styled={this.props.style} red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ position==='' ? 'active' : '' }>All</div>
                                </ButtonPosition>
                            </Wrapper>
                            <Wrapper onClick={() => this.props.changePosition('-top')}>
                                <ButtonPosition position='-top' styled={this.props.style} red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ position==='-top' ? 'active' : '' }>Top</div>
                                </ButtonPosition>
                            </Wrapper>
                            <Wrapper onClick={() => this.props.changePosition('-right')}>
                                <ButtonPosition position='-right' styled={this.props.style} red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ position==='-right' ? 'active' : '' }>Right</div>
                                </ButtonPosition>
                            </Wrapper>
                            <Wrapper onClick={() => this.props.changePosition('-bottom')}>
                                <ButtonPosition position='-bottom' styled={this.props.style} red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ position==='-bottom' ? 'active' : '' }>Bottom</div>
                                </ButtonPosition>
                            </Wrapper>
                            <Wrapper onClick={() => this.props.changePosition('-left')}>
                                <ButtonPosition position='-left' styled={this.props.style} red={this.props.red} green={this.props.green} blue={this.props.blue}>
                                    <div className={ position==='-left' ? 'active' : '' }>Left</div>
                                </ButtonPosition>
                            </Wrapper>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="mb-4">
                            <h6 className="mb-3">Border Radius</h6>
                            <div className="mb-4">
                                <h6 className="mb-3">All conners</h6>
                                    <InputRange
                                        maxValue={200}
                                        minValue={0}
                                        value={this.props.corner}
                                        onChange={(value) => this.props.changeRadius(value)}
                                    >
                                    </InputRange>
                            </div>
                            <div className="mb-4">
                                <h6 className="mb-3">Top left</h6>
                                    <InputRange
                                        maxValue={200}
                                        minValue={0}
                                        value={this.props.topLeft}
                                        onChange={(value) => this.props.changeTopLeft(value)}
                                    >
                                    </InputRange>
                            </div>
                            <div className="mb-4">
                                <h6 className="mb-3">Top Right</h6>
                                    <InputRange
                                        maxValue={200}
                                        minValue={0}
                                        value={this.props.topRight}
                                        onChange={(value) => this.props.changeTopRight(value)}
                                    >
                                    </InputRange>
                            </div>
                            <div className="mb-4">
                                <h6 className="mb-3">Bottom Right</h6>
                                    <InputRange
                                        maxValue={200}
                                        minValue={0}
                                        value={this.props.bottomRight}
                                        onChange={(value) => this.props.changeBottomRight(value)}
                                    >
                                    </InputRange>
                            </div>
                            <div className="mb-4">
                                <h6 className="mb-3">Bottom Left</h6>
                                    <InputRange
                                        maxValue={200}
                                        minValue={0}
                                        value={this.props.bottomLeft}
                                        onChange={(value) => this.props.changeBottomLeft(value)}
                                    >
                                    </InputRange>
                            </div>
                        </div>
                        <div>
                            <Button type='button' onClick={this.props.clickReset}>Reset</Button>
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
        red: state.border[0].red,
        green: state.border[1].green,
        blue: state.border[2].blue,
        style: state.style,
        position: state.position,
        corner: state.corner,
        topLeft: state.topLeft,
        topRight: state.topRight,
        bottomRight: state.bottomRight,
        bottomLeft: state.bottomLeft
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeWidth: (value) => {
            dispatch({type: 'CHANGE_WIDTH', value})
        },
        changeColor: (color) => {
            dispatch({type: 'CHANGE_COLOR', color})
        },
        changeStyle: (style) => {
            dispatch({type: 'CHANGE_STYLE', style})
        },
        changePosition: (position) => {
            dispatch({type: 'CHANGE_POSITION', position})
        },
        changeRadius: (value) => {
            dispatch({type: 'CHANGE_RADIUS', value})
        },
        changeTopLeft: (value) => {
            dispatch({type: 'CHANGE_TOPLEFT', value})
        },
        changeTopRight: (value) => {
            dispatch({type: 'CHANGE_TOPRIGHT', value})
        },
        changeBottomRight: (value) => {
            dispatch({type: 'CHANGE_BOTTOMRIGHT', value})
        },
        changeBottomLeft: (value) => {
            dispatch({type: 'CHANGE_BOTTOMLEFT', value})
        },
        clickReset: () => {
            dispatch({type: 'CLICK_RESET'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control)