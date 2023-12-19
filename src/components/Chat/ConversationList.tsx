import React from "react";
import { List } from "@mui/material";

import { Conversation } from "../../types";
import { ConversationItem } from "./ConversationItem";

export const ConversationList: React.FC<{
  conversations: Conversation[];
  onChangeConversation: Function;
}> = ({ conversations, onChangeConversation }) => {
  return (
    <List sx={{ border: "1px solid black", color: "black" }}>
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          conversation={conversation}
          onChangeConversation={onChangeConversation}
        />
      ))}
    </List>
  );
};
