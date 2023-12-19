import React from "react";
import { Box, Typography } from "@mui/material";
import { Message } from "../../types";

export const MessageBubble: React.FC<{
  message: Message;
  isAdmin: boolean;
}> = ({ message, isAdmin }) => {
  const bubbleStyle = isAdmin
    ? {
        backgroundColor: message.isSender ? "#e0e0e0" : "#1976d2",
        color: message.isSender ? "#000" : "#fff",
        alignSelf: message.isSender ? "flex-start" : "flex-end",
        padding: "10px",
        borderRadius: "10px",
        maxWidth: "70%",
        margin: "5px",
      }
    : {
        backgroundColor: !message.isSender ? "#e0e0e0" : "#1976d2",
        color: !message.isSender ? "#000" : "#fff",
        alignSelf: !message.isSender ? "flex-start" : "flex-end",
        padding: "10px",
        borderRadius: "10px",
        maxWidth: "70%",
        margin: "5px",
      };

  return (
    <Box style={bubbleStyle}>
      <Typography variant="body1">{message.message}</Typography>
      <Typography variant="caption">
        {new Date(message.timestamp).toLocaleTimeString()}
      </Typography>
    </Box>
  );
};
