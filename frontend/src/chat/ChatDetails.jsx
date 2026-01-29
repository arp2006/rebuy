import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

export default function ChatDetails({ onBack }) {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 sticky top-0 bg-white z-10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="md:hidden text-slate-500">←</button>
          <div className="min-w-0">
            <p className="font-bold text-lg truncate">Ajit Pawar</p>
            <p className="text-xs text-green-500 flex items-center gap-1">
              Online 
            </p>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex items-center gap-3 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
          <div className="hidden lg:block">
            <p className="text-xs font-bold truncate">Vintage Canon AE-1</p>
            {/* <p className="text-[10px] text-slate-500">$180.00</p> */}
          </div>
          <button className="bg-[#3498DB] text-white text-[10px] font-bold px-3 py-1 rounded-lg">
            Manage
          </button>
        </div>
      </div>

      <MessageList />
      <MessageInput />
    </>
  );
}