import * as React from "react";
import "./Message.scss";

type MessageType = "success" | "warning" | "error";

interface MessageProps {
  type: MessageType;
  children?: React.ReactNode;
}

const message = React.memo((props: MessageProps) => {
  return (
    <div className={`message message--${props.type}`}>{props.children}</div>
  );
});

export default message;
