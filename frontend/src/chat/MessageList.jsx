import { useContext } from "react";
import MessageBubble from "./MessageBubble";
import { AuthContext } from "../AuthContext";

export default function MessageList({ messages, loading }) {
  const { user } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center text-sm text-slate-500">
        Loading messages…
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-slate-50">
      {messages.length === 0 && (
        <p className="text-center text-sm text-slate-500">
          No messages yet
        </p>
      )}
      
      {messages.map(msg => (
      <MessageBubble
        key={msg.id}
        text={msg.msg}
        mine={msg.sender_id === user.id}
      />
      ))}
    </div>
  );
}
