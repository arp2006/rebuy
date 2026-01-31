export default function ConversationItem({ onClick, active, data }) {
  return (
    <div
      onClick={onClick}
      className={`flex gap-4 px-4 py-3 cursor-pointer border-b border-slate-200
        hover:bg-slate-50
        ${active ? "bg-blue-50 border-r-4 border-blue-500" : ""}
      `}
    >
      <div className="flex-1">
        <div className="flex justify-between">
          <p className="text-sm font-bold">{data.name}</p>
          <span className="text-xs text-slate-400">
            {data.updated_at
              ? new Date(data.updated_at).toLocaleTimeString()
              : ""}
          </span>
        </div>

        <p className="text-sm text-slate-600 truncate">
          {data.lastMessage || "No messages yet"}
        </p>
      </div>
    </div>
  );
}
