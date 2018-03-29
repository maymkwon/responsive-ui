import React, { Component } from 'react';
import styled from 'styled-components'



const ColorPicker = styled.div.attrs({
  style: props => ({
    background: `${props.hue}, 
                 ${50 + props.luminosity / 2},
                 ${props.luminosity}`
  })
}) `
  /* ... */
`

class ColorPicker extends Component {
  render() {
    return (
      <div>
        {/* <ColorPicker hue={mousePositionX} luminosity={mousePositionY} /> */}
      </div>
    );
  }
}

export default ColorPicker;