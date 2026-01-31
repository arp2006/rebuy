import { useState } from "react";
import ConversationList from "../chat/ConversationList";
import ChatDetails from "../chat/ChatDetails"

export default function ChatLayout() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="bg-background-light font-display text-slate-900 mx-[35rem] w-full h-[58rem] overflow-hidden border border-slate-200 rounded-lg">
      <input
        type="checkbox"
        className="hidden"
        checked={showChat}
        onChange={() => setShowChat(!showChat)}
      />

      <div className="flex h-full">
        <aside
          className={`${showChat ? "hidden md:flex" : "flex"} w-full md:w-[350px] lg:w-[400px] flex-col border-r border-slate-200 bg-white`}
        >
          <ConversationList onSelect={() => setShowChat(true)} />
        </aside>

        <section
          className={`${showChat ? "flex" : "hidden md:flex"} flex-1 flex-col bg-white`}
        >
          <ChatDetails onBack={() => setShowChat(false)} />
        </section>
      </div>
    </div>
  );
}