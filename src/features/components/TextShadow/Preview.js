import React, {Component} from 'react'
import ColorText from './ColorText'
import ColorBack from './ColorBack'
import ValueContext from '../context/ValueContext'

class Preview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorText: {
                
            },
            colorBack: {

            }
        }
    }

    getCode () {
        return this.getListLayer(this.props.context.state.dataLayer).join(', ')
    }

    getListLayer (arr) {
        let listLayer = [];
        for(let layer of arr) {
            listLayer.push(this.getValueLayer(layer));
        }
        return listLayer;
    }

    getValueLayer (layer) {
        let opacity = layer.opacity/100;
        let result = `rgba(${layer.r}, ${layer.g}, ${layer.b}, ${opacity}) ${layer.shiftRight}px ${layer.shiftDown}px ${layer.blur}px`
        return result;
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
                <div className="preview-title mt-2 mx-4">
                <h5 className="mt-1 ml-4 font-weight-bold">Preview</h5>
                    <div className="preview-title-color">
                        <div className="mr-1"><ColorText editColorText={(data) => this.editColorText(data)}/></div>
                        <div><ColorBack editColorBack={(data) => this.editColorBack(data)}/></div>
                    </div>
                </div>
                <div className="text" style={{background : `rgb(${this.state.colorBack.r}, ${this.state.colorBack.g}, ${this.state.colorBack.b})`}}>
                    <div className="text-inline" 
                    style={{textShadow: `${this.getCode()}`}}
                    >
                        <div style={{color: `rgb(${this.state.colorText.r}, ${this.state.colorText.g}, ${this.state.colorText.b})`}}>
                            Hello
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}

const withContext = (Component) => {
    return (props) => (
        <ValueContext.Consumer>    
             {(context) => {
                return <Component {...props} context={context} />
             }}
        </ValueContext.Consumer>
    )
  }
  
export default withContext(Preview);
  