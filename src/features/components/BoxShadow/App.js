import React, { Component } from 'react'
import Generator from "./Generator";
import CssCodeBox from "./CssCodeBox";
import PreviewBox from "./PreviewBox";
import CardSession from "./CardSession";
import Template from "./Template";

const DEFAULT_CSS = {
    red: 0,
    green: 0,
    blue: 0,
    shiftRight: 0,
    shiftDown: 0,
    spread: 3,
    blur: 5,
    opacity: 20,
    inset: false
}

export default class App extends Component {

    state = {
        css: [{...DEFAULT_CSS}],
        selectedLayer: 0,
        reverseTemplate: false
    };

    static getCssCode = (css) => {
        return this.getListLayer(css).join(', ');
    }

    static getListLayer = (css) => {
        let listLayer = [];
        for(let layer of css) {
            listLayer.push(this.getCssLayer(layer)); 
        }
        return listLayer;
    }

    static getCssLayer = (layer) => {
        let {red, green, blue, shiftRight, shiftDown, spread, blur, opacity, inset} = layer;
        let result = '';
        if(inset) result += 'inset ';
        result += `rgba(${red}, ${green}, ${blue}, ${opacity/100}) ${shiftRight}px ${shiftDown}px ${blur}px ${spread}px`;
        return result;
    }

    onChangeValue = (name, value) => {
        let tempState = this.state;
        tempState.css[this.state.selectedLayer][name] = value;
        this.setState({tempState})
    }

    onShadowColorChange = (color) => {
        let tempState = this.state;
        tempState.css[this.state.selectedLayer].red = color.r;
        tempState.css[this.state.selectedLayer].green = color.g;
        tempState.css[this.state.selectedLayer].blue = color.b;
        this.setState({tempState});
    }

    onChangeCheckBox = (checked) => {
        let tempState = this.state;
        tempState.css[this.state.selectedLayer].inset = checked;
        this.setState({tempState});
    }

    onClickAddLayer = () => {
        let tempState = this.state;
        tempState.css.push({...DEFAULT_CSS});
        this.setState({tempState});
    }

    onClickLayer = id => {
        this.setState({
            selectedLayer: id
        })
    }

    onRemoveLayer = async(id) => {
        await this.onClickLayer(id);
        let currentState = this.state;
        if(currentState.css.length > 1) {
            if (currentState.css.length-1 === id) {
                currentState.css.splice(id, 1);
                currentState.selectedLayer--;
            }
            else 
                currentState.css.splice(id, 1);
            this.setState(currentState);
        }
    }

    onClickTemplate = (template) => {
        this.setState({
            css: template
        })
    }

    onSwapLayer = (data) => {
        this.setState({
            css: data
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="wrapper-inner">
                    <div className='control'>
                        <Generator 
                            onChangeValue={this.onChangeValue}
                            values={this.state.css[this.state.selectedLayer]}
                            onShadowColorChange={(color) => this.onShadowColorChange(color)}
                            onChangeCheckBox={(checked) => this.onChangeCheckBox(checked)}
                        />
                        <CardSession
                            onClickAddLayer={this.onClickAddLayer}
                            css={this.state.css}
                            selectedLayer={this.state.selectedLayer}
                            onClickLayer={id => this.onClickLayer(id)}
                            onRemoveLayer={id => this.onRemoveLayer(id)}
                            onSwapLayer={data => this.onSwapLayer(data)}
                        />
                    </div>
                    <div className='view'>
                        <PreviewBox
                            boxShadowCss={() => App.getCssCode(this.state.css)}
                        />
                        <CssCodeBox cssCode={App.getCssCode(this.state.css)} />
                        <Template onClickTemplate={(template) => this.onClickTemplate(template)} />
                    </div>
                </div>
            </div>
        )
    }
}
