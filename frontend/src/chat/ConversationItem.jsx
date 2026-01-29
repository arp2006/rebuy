
export default function ConversationItem({ onClick, active }) {
  return (
    <div
      onClick={onClick}
      className={`flex gap-4 px-4 py-3 cursor-pointer hover:bg-slate-50 
        active ? "bg-[#3498DB]B]/5rder-r-4 borborder-[#3498DB] : "border-b"
      `}
    >
    <div className="flex-1">
        <div className="flex justify-between">
          <p className="text-sm font-bold">Ajit Pawar</p>
          <span className="text-xs text-slate-400">2m ago</span>
        </div>
        <p className="text-sm text-slate-600 truncate">Is the camera still available?</p>
      </div>
    </div>
  );
}
