 export function Button({color,text,onClick}) {
    // const {color,text} = props;
    return (
      <button style={{ background: color, color: "white" }} onClick={onClick}>
        {text}
      </button>
    );
  }

 