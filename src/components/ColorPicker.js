import React from "react";
import { SketchPicker } from "react-color";

export default function ColorPicker() {
  const [state, setState] = React.useState({
    background: "#fff",
  });
  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };
  return (
    <SketchPicker
      color={this.state.background}
      onChangeComplete={this.handleChangeComplete}
    />
  );
}
