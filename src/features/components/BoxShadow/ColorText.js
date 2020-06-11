import React from 'react';
import InputColor from 'react-input-color';

export default class ColorText extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        r: 61,
        g: 157,
        b: 246
      }
    }
    
    handleChange = (color) => {
      this.setState({
        r: color.r,
        g: color.g,
        b: color.b
      }, () => {
        this.props.editColorText(this.state);
      })
    }

    render() {
      return (
        <div>
          <InputColor
            initialValue="#3d9df6"
            onChange={(color) => this.handleChange(color)}
          >
          </InputColor>
        </div>
      )
    }
}