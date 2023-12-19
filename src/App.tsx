import React, { useEffect, useState } from "react";

import { ChatWindow } from "./components/Chat/ChatWindow";
import { ConversationList } from "./components/Chat/ConversationList";
import { _CONVERSATION_LIST, _MESSAGE_LIST } from "./data";
import { Conversation, Message } from "./types";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/Admin";
import Customer1 from "./pages/Customer/Customer1";
import Customer2 from "./pages/Customer/Customer2";
import Home from "./pages/Home";
import CustomEmptyOverlayGrid from "./components/DataTable";

const App: React.FC = () => {
  const [listMessage, setListMessage] = useState<Message[]>([]);
  const [listConversation, setListConversation] =
    useState<Conversation[]>(_CONVERSATION_LIST);

  const handleChangeConversation = (id: number) => {
    const conversation = _CONVERSATION_LIST.find(
      (conversation) => conversation.id === id
    );
    const newListMessage = _MESSAGE_LIST.filter(
      (msg) => msg.userId === conversation?.userId
    );
    setListMessage(newListMessage);
  };

  const handleSendMessage = (data: Message) => {
    setListMessage([...listMessage, data]);
  };
  useEffect(() => {
    const newConversation = _MESSAGE_LIST.filter((msg) => msg.userId === 1);
    setListMessage(newConversation);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/customer1" element={<Customer1 />} />{" "}
      <Route path="/table" element={<CustomEmptyOverlayGrid />} />
      <Route path="/customer2" element={<Customer2 />} />
    </Routes>
  );
};

export default App;
