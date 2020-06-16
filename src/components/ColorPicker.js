import React from "react";

import { SketchPicker } from "react-color";

const ColorSelect = (props) => {
  const { onChange, palette } = props;

  const handleChange = (color) => {
    const rgba = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
    console.log(props.name, rgba);

    onChange(props.name, rgba);
  };

  return (
    <div>
      <SketchPicker color={palette} onChangeComplete={handleChange} />
    </div>
  );
};

export default ColorSelect;
