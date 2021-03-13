import React, { useState } from "react";
import "./button.css";
function Button(props) {
  const [size] = useState(props.size);
  const [color] = useState(props.color);
  const [content] = useState(props.content);
  const [bgcolor] = useState(props.bgcolor);
  const [padding] = useState(props.padding);

  return (
    <button
      className="style"
      style={{
        backgroundColor: bgcolor,
        color: color,
        fontSize: size,
        padding: padding,
      }}
    >
      {content}
    </button>
  );
}

export default Button;
