import React from "react";
import MessageDisplay from "./MessageDisplay";

const MessagesDisplay = ({ userMessages }) => {
  return (
    <div className="messages-display">
      {userMessages.map((userMessage, index) => (
        <MessageDisplay key={index} message={userMessage} />
      ))}
    </div>
  );
};

export default MessagesDisplay;
