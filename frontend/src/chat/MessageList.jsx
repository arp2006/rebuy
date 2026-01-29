import MessageBubble from "./MessageBubble";
export default function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-slate-50">
      <div className="grid justify-items-center mx-[12rem] bg-gray-200 rounded-sm"> 
        <p className="text-[0.9rem] text-slate-500 ">Monday</p>
      </div>
      <MessageBubble text="Is the Vintage Canon AE-1 still available?" />
      <MessageBubble text="Yes, it is." mine />
      <p className="grid justify-items-end text-[0.75rem] text-slate-500">seen 6s ago</p>
    </div>
  );
}