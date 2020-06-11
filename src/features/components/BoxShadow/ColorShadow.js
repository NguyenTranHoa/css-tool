import React from 'react'
import InputColor from 'react-input-color';

export default class ColorShadow extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        r: 0,
        g: 0,
        b: 0
      }
    }

    render() {
      return (
        <div>
          <InputColor
            initialValue="#000"
            onChange={(color) => this.props.onShadowColorChange(color)}
          >
          </InputColor>
        </div>
      )
    }
}