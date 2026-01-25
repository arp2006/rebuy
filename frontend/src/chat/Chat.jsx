export default function Chat() {
  return (
    <div className="bg-background-light font-display text-slate-900 h-screen overflow-hidden">
      <input className="hidden peer" id="chat-toggle" type="checkbox" />

      <div className="flex flex-col h-full">
        <main className="flex flex-1 overflow-hidden relative">
          <aside
            className="w-full md:w-[350px] lg:w-[400px] flex flex-col border-r border-slate-200 bg-white z-10"
            id="conversation-list"
          >
            <div className="p-4 border-b border-slate-100">
              <h1 className="text-xl font-bold text-slate-900 mb-4">
                Messages
              </h1>

              <div className="relative h-10 w-full">
                <div className="flex w-full h-full items-stretch rounded-lg bg-slate-100">
                  <div className="text-slate-400 flex items-center justify-center pl-3">
                    <span className="material-symbols-outlined text-[20px]">
                      search
                    </span>
                  </div>
                  <input
                    className="w-full border-none bg-transparent focus:ring-0 text-sm text-slate-900 placeholder:text-slate-400 px-3"
                    placeholder="Search conversations..."
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto chat-scrollbar">
              <label
                className="flex items-center gap-4 px-4 min-h-[80px] py-3 bg-primary/5 border-r-4 border-primary cursor-pointer hover:bg-slate-50 transition-colors block"
                htmlFor="chat-toggle"
              >
                <div className="relative shrink-0">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12 border border-slate-200"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgDudZyAqz2KpJIt4RrqDwwpjOrWf6QvDWX4VpjGXnHKMSlrZ7p7mVVuFsiVR_8uojzztrHpf0km8xTHo91KUBChQep5RdLxM2OBokunwO7HrdZWE3erl6-JK06O8jpY2QjlbDbZ6UMPNsduoeaL51zw-c_tu4P1pzWb2MrKYiPkp1iJnUOP6m3DJEKs9Z5vly-dsZrh52p5zg8uDyGJ_ZSYsh9CsFuxBR66Gt-Vnolxewi2KMatyG_nvka7-BCgE8RTtPpsU5VEU")',
                    }}
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full" />
                </div>

                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <p className="text-slate-900 text-sm font-bold truncate">
                      Sarah Jenkins
                    </p>
                    <span className="text-slate-400 text-xs shrink-0">
                      2m ago
                    </span>
                  </div>
                  <p className="text-slate-900 text-sm font-medium line-clamp-1">
                    Is the Vintage Camera still available?
                  </p>
                  <p className="text-primary text-xs font-medium truncate mt-0.5">
                    Item: Vintage Canon AE-1
                  </p>
                </div>
              </label>
            </div>
          </aside>

          <section
            className="hidden md:flex flex-1 flex-col bg-white h-full"
            id="chat-detail"
          >
            {/* chat detail remains identical, minus dark:* classes */}
          </section>
        </main>
      </div>
    </div>
  );
}
