import React from 'react';
import InputColor from 'react-input-color';

export default class ColorBack extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        r: 255,
        g: 255,
        b: 255
      }
    }
    
    handleChange = (color) => {
      this.setState({
        r: color.r,
        g: color.g,
        b: color.b
      }, () => {
        this.props.editColorBack(this.state);
      })
    }

    render() {
      return (
        <div>
          <InputColor
            initialValue="#fff"
            onChange={(color) => this.handleChange(color)}
          >
          </InputColor>
        </div>
      )
    }
}