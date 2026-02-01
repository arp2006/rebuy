import { useEffect, useState } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

export default function ChatDetails({ chatId, onBack, type }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMessages() {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:3000/api/messages/${chatId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch messages");

      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error("Failed to load messages", err);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!chatId) return;
    fetchMessages();
  }, [chatId]);

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 sticky top-0 bg-white z-10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="md:hidden text-slate-500">
            ←
          </button>
          <div className="min-w-0">
            <p className="font-bold text-lg truncate">Chat</p>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>
      </div>

      <MessageList messages={messages} loading={loading} type={type} />
      <MessageInput chatId={chatId} />
    </>
  );
}
