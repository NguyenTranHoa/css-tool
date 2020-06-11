import React from 'react';
import InputColor from 'react-input-color';
import ValueContext from '../context/ValueContext'

class Color extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        r: 0,
        g: 0,
        b: 0
      }
    }
    
    handleChange = (color) => {
      this.setState({
        r: color.r,
        g: color.g,
        b: color.b
      }, () => {
        this.props.context.editColor(this.state);
      })
    }

    render() {
      return (
        <div>
          <InputColor
            initialValue="#000"
            onChange={(color) => this.handleChange(color)}
          >
          </InputColor>
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

export default withContext(Color);
