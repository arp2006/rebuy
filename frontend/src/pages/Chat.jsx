import React, { useState, useContext, useEffect } from "react";
import ConversationList from "../chat/ConversationList";
import ChatDetails from "../chat/ChatDetails";
import { AuthContext } from "../AuthContext";

export default function ChatLayout() {
  const [showChat, setShowChat] = useState(false);
  const [activeChatId, setActiveChatId] = useState(null);
  const [activeChatType, setActiveChatType] = useState("buying");

  return (
    <div className="bg-background-light font-display text-slate-900 mx-[35rem] w-full h-[58rem] overflow-hidden border border-slate-200 rounded-lg">
      <div className="flex h-full">
        <aside className="flex w-full md:w-[350px] lg:w-[400px] flex-col border-r border-slate-200 bg-white">
          <ConversationList
            onSelect={(chatId, type) => {
              setActiveChatId(chatId);
              setShowChat(true);
              setActiveChatType(type)
            }}
          />
        </aside>

        <section className={`${showChat ? "flex" : "hidden"} flex-1 flex-col bg-white`}>
          {activeChatId && (
            <ChatDetails
              chatId={activeChatId}
              type={activeChatType}
              onBack={() => setShowChat(false)}
            />
          )}
        </section>
      </div>
    </div>
  );
}