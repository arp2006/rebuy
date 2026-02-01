export default function MessageInput() {
  return (
    <div className="p-2 border-t border-slate-200 bg-white">
      <div className="flex gap-2">
        <textarea
          className="flex-1 border border-slate-200 rounded-xl px-4 py-2 text-sm resize-none"
          placeholder="Write a message. 500 characters max"
        />

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="30" 
          height="64"
          fill="#3498DB" viewBox="0 0 24 24"
          transform="scale(1,-1)"
          className="cursor-pointer"
        >
          <path d="m21.41 11.09-18-8a1 1 0 0 0-1.09.19c-.29.28-.39.7-.25 1.08l2.87 7.65-2.87 7.65c-.14.38-.04.8.25 1.08a1 1 0 0 0 1.1.18l18-8a.998.998 0 0 0 0-1.82ZM4.78 18.12l1.23-3.27V15l6-3-6-3v.15L4.78 5.88 18.54 12z"></path>
        </svg>
      </div>
    </div>
  );
}
