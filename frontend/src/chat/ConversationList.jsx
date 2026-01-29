import ConversationItem from "./ConversationItem";

export default function ConversationList({ onSelect }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-slate-100">
        <h1 className="text-xl font-bold mb-4">Messages</h1>
        <input
          className="w-full h-10 rounded-lg bg-slate-100 px-3 text-sm outline-none"
          placeholder="Search conversations..."
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <ConversationItem onClick={onSelect} active />
      </div>
    </div>
  );
}