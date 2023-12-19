import { useEffect, useState } from "react";
import { Conversation, Message } from "../../types";
import { _CONVERSATION_LIST, _MESSAGE_LIST } from "../../data";
import { ConversationList } from "../../components/Chat/ConversationList";
import { ChatWindow } from "../../components/Chat/ChatWindow";
import { useFetchData } from "../../hooks/fetchData";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

const AdminPage: React.FC = () => {
  const [conversation, setConversation] = useState<Conversation>();

  const { data, fetchData } = useFetchData<Conversation>(
    "conversations/?userId=3"
  );

  const handleSendMessage = (message: string) => {
    if (!conversation) {
      return;
    }
    const { messages, ...other } = conversation;
    socket.emit("sendMessageToAdmin", {
      conversation: other,
      message: message,
    });
  };
  useEffect(() => {
    if (data.length) {
      setConversation(data[0]);
    }
  }, [data]);
  useEffect(() => {
    // client-side
    socket.emit("joinRoom", { conversationId: 2 });
    socket.on("messageFromAdmin", () => {
      fetchData();
    });
  }, []);

  return (
    <div>
      <h1>Chat Application of Customer 2</h1>
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
        />
      </div>
    </div>
  );
};

export default AdminPage;
