import React, { useEffect, useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { MessageBubble } from "./Message";
import { Message } from "../../types";
import { io } from "socket.io-client";

export const ChatWindow = ({
  listMessage,
  onSendMessage,
  isAdmin = false
}: {
  listMessage: Message[];
  onSendMessage: Function;
  isAdmin?: boolean;
}) => {
  const [newMessage, setNewMessage] = useState<string>("");
  const handleSendMessage = () => {
    onSendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <Container sx={{ maxWidth: "600px", margin: "0 auto" }}>
      <Box
        style={{ display: "flex", flexDirection: "column", padding: "10px" }}
      >
        {listMessage.map((message: Message) => (
          <MessageBubble key={message.id} message={message} isAdmin={isAdmin} />
        ))}

        <Box sx={{ display: "flex", marginTop: "30px" }}>
          <TextField
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
            fullWidth
          />
          <Button onClick={handleSendMessage}>Send </Button>
        </Box>
      </Box>
    </Container>
  );
};
