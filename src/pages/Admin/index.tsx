import { useEffect, useRef, useState } from "react";
import { Conversation, Message } from "../../types";
import { _CONVERSATION_LIST, _MESSAGE_LIST } from "../../data";
import { ConversationList } from "../../components/Chat/ConversationList";
import { ChatWindow } from "../../components/Chat/ChatWindow";
import { useFetchData } from "../../hooks/fetchData";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

const AdminPage: React.FC = () => {
  const [conversation, setConversation] = useState<Conversation>();
  const { data, fetchData } = useFetchData<Conversation>("conversations");
  const handleChangeConversation = (id: number) => {
    const conversation = data.find((conversation) => conversation.id === id);
    if (conversation) {
      setConversation(conversation);
    }
  };
  const handleSendMessage = (message: string) => {
    if (!conversation) {
      return;
    }
    const { messages, ...other } = conversation;
    socket.emit("sendMessageToUser", {
      conversation: other,
      message: message,
    });
  };
  useEffect(() => {
    if (conversation) {
      const conversation2 = data.find((item) => item.id === conversation.id);
      setConversation(conversation2);
    } else if (data.length) {
      setConversation(data[0]);
    }
  }, [data]);
  useEffect(() => {
    socket.on("messageToAdmin", () => {
      fetchData();
    });
  }, []);

  return (
    <div>
      <h1>Chat Application</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          color: "black",
        }}
      >
        <ChatWindow
          listMessage={conversation?.messages || []}
          onSendMessage={handleSendMessage}
          isAdmin={true}
        />
        <ConversationList
          conversations={data}
          onChangeConversation={handleChangeConversation}
        />
      </div>
    </div>
  );
};

export default AdminPage;
