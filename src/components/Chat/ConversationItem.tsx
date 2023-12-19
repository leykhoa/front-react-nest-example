import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
import { Conversation } from "../../types";

export const ConversationItem: React.FC<{
  conversation: Conversation;
  onChangeConversation: Function;
}> = ({ conversation, onChangeConversation }) => {
  return (
    <ListItem button onClick={() => onChangeConversation(conversation.id)}>
      <ListItemText
        primary={conversation.userId}
        secondary={
          <>
            <Typography>{}</Typography>

            {/* {conversation.updatedAt.toLocaleTimeString()} */}
          </>
        }
      />
    </ListItem>
  );
};
